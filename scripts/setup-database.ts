import 'dotenv/config';
import fs from 'fs';
import mongoose from 'mongoose';
import BlogModel from '../src/models/blog-model.js';
import ProjectModel from '../src/models/project-model.js';

const logInfo = (message: string) => {
  console.log('\x1b[36m%s\x1b[0m', message);
};

const logSuccess = (message: string) => {
  console.log('\x1b[32m%s\x1b[0m', message);
};

const logError = (message: string) => {
  console.log('\x1b[31m%s\x1b[0m', message);
};

const logDivider = () => {
  logInfo(`
══════════════════════════════════════
`);
};

const handleError = (error: Error, context: string) => {
  logError(`Error in ${context}:`);
  logError(error.message);
  throw error;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function createBlog(slug: string, metaData: any) {
  logInfo(`📝 Creating blog "${slug}"...`);
  try {
    await BlogModel.create({
      ...metaData,
      publishedAt: new Date(metaData.publishedAt),
      image: `/blogs/${slug}/cover.png`,
      slug,
    });
    logSuccess(`✨ Blog "${slug}" has been added successfully!`);
  } catch (error) {
    handleError(error as Error, `creating blog ${slug}`);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function updateBlog(slug: string, metaData: any) {
  logInfo(`📝 Updating blog "${slug}"...`);
  try {
    await BlogModel.updateOne(
      { slug },
      {
        title: metaData.title,
        description: metaData.description,
        categories: metaData.categories,
        keywords: metaData.keywords,
        image: `/blogs/${slug}/cover.png`,
        publishedAt: new Date(metaData.publishedAt),
      }
    );
    logSuccess(`✨ Blog "${slug}" has been updated successfully!`);
  } catch (error) {
    handleError(error as Error, `updating blog ${slug}`);
  }
}

async function setupBlogData() {
  logDivider();
  logInfo('🎯 Setting Up Blog Data...');

  try {
    const blogs = fs.readdirSync('./public/blogs');

    await Promise.all(
      blogs.map(async (slug: string) => {
        const blogData = await BlogModel.findOne({ slug: slug });
        const metaData = JSON.parse(
          fs.readFileSync(`./public/blogs/${slug}/meta.json`, 'utf-8')
        );

        if (!blogData) {
          await createBlog(slug, metaData);
        } else if (
          blogData._doc.title !== metaData.title ||
          blogData._doc.description !== metaData.description ||
          JSON.stringify(blogData._doc.categories) !==
            JSON.stringify(metaData.categories) ||
          blogData._doc.image !== `/blogs/${slug}/cover.png` ||
          new Date(blogData._doc.publishedAt).getTime() !==
            new Date(metaData.publishedAt).getTime() ||
          blogData._doc.keywords !== metaData.keywords
        ) {
          await updateBlog(slug, metaData);
        } else {
          logSuccess(`✨ Blog "${slug}" already up to date!`);
        }
      })
    );

    const allBlogs = await BlogModel.find(
      { slug: { $nin: blogs } },
      { slug: 1 }
    );
    if (allBlogs.length > 0) {
      logInfo(`🗑️ Found ${allBlogs.length} blogs to delete...`);

      await Promise.all(
        allBlogs.map(async (blog) => {
          logInfo(`🗑️ Deleting blog "${blog.slug}"...`);
          await BlogModel.deleteOne({ slug: blog.slug });
          logSuccess(`✨ Blog "${blog.slug}" deleted successfully!`);
        })
      );
    }
  } catch (error) {
    handleError(error as Error, 'setting up blog data');
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function createProject(slug: string, metaData: any) {
  logInfo(`📝 Creating project "${slug}"...`);
  try {
    await ProjectModel.create({
      ...metaData,
      publishedAt: new Date(metaData.publishedAt),
      image: `/projects/${slug}/cover.png`,
      slug,
    });
    logSuccess(`✨ Project "${slug}" has been added successfully!`);
  } catch (error) {
    handleError(error as Error, `creating project ${slug}`);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function updateProject(slug: string, metaData: any) {
  logInfo(`📝 Updating project "${slug}"...`);
  try {
    await ProjectModel.updateOne(
      { slug },
      {
        title: metaData.title,
        description: metaData.description,
        categories: metaData.categories,
        keywords: metaData.keywords,
        image: `/projects/${slug}/cover.png`,
        publishedAt: new Date(metaData.publishedAt),
      }
    );
    logSuccess(`✨ Project "${slug}" has been updated successfully!`);
  } catch (error) {
    handleError(error as Error, `updating project ${slug}`);
  }
}

async function setupProjectData() {
  logDivider();
  logInfo('🎯 Setting Up Project Data...');

  try {
    const projects = fs.readdirSync('./public/projects');

    await Promise.all(
      projects.map(async (slug: string) => {
        const projectData = await ProjectModel.findOne({ slug: slug });
        const metaData = JSON.parse(
          fs.readFileSync(`./public/projects/${slug}/meta.json`, 'utf-8')
        );

        if (!projectData) {
          await createProject(slug, metaData);
        } else if (
          projectData._doc.title !== metaData.title ||
          projectData._doc.description !== metaData.description ||
          JSON.stringify(projectData._doc.categories) !==
            JSON.stringify(metaData.categories) ||
          projectData._doc.status !== metaData.status ||
          projectData._doc.image !== `/projects/${slug}/cover.png` ||
          new Date(projectData._doc.publishedAt).getTime() !==
            new Date(metaData.publishedAt).getTime() ||
          projectData._doc.keywords !== metaData.keywords
        ) {
          await updateProject(slug, metaData);
        } else {
          logSuccess(`✨ Project "${slug}" already up to date!`);
        }
      })
    );

    const allProjects = await ProjectModel.find(
      { slug: { $nin: projects } },
      { slug: 1 }
    );
    if (allProjects.length > 0) {
      logInfo(`🗑️ Found ${allProjects.length} projects to delete...`);

      await Promise.all(
        allProjects.map(async (project) => {
          logInfo(`🗑️ Deleting project "${project.slug}"...`);
          await ProjectModel.deleteOne({ slug: project.slug });
          logSuccess(`✨ Project "${project.slug}" deleted successfully!`);
        })
      );
    }
  } catch (error) {
    handleError(error as Error, 'setting up project data');
  }
}

async function fixBlogData() {
  logDivider();
  logInfo('🎯 Fixing Blog Data...');

  const blogs = BlogModel.find({}).cursor();

  for await (const blog of blogs) {
    await BlogModel.deleteOne({ _id: blog._id });

    await BlogModel.create({
      _id: blog._id,
      image: blog.image,
      slug: blog.slug,
      title: blog.title,
      description: blog.description,
      keywords: blog.keywords,
      categories: blog.categories,
      views: blog.views,
      publishedAt: blog.publishedAt,
    });
  }
}

async function fixProjectData() {
  logDivider();
  logInfo('🎯 Fixing Project Data...');

  const projects = ProjectModel.find({}).cursor();

  for await (const project of projects) {
    await ProjectModel.deleteOne({ _id: project._id });

    await ProjectModel.create({
      _id: project._id,
      image: project.image,
      slug: project.slug,
      title: project.title,
      description: project.description,
      keywords: project.keywords,
      categories: project.categories,
      links: project.links,
      views: project.views,
      publishedAt: project.publishedAt,
    });
  }
}

async function resetDatabase() {
  logDivider();
  logInfo('🎯 Resetting Database...');

  logInfo('🗑️ Removing all indexes...');
  await BlogModel.collection.dropIndexes();
  await ProjectModel.collection.dropIndexes();
  logSuccess('✨ All indexes removed successfully!');

  logInfo('🔄 Recreating indexes for Blog collection...');
  await BlogModel.collection.createIndex({
    title: 'text',
    description: 'text',
    keywords: 'text',
  });
  await BlogModel.collection.createIndex({ categories: 1 });
  await BlogModel.collection.createIndex({ views: -1 });
  await BlogModel.collection.createIndex({ publishedAt: -1 });
  logSuccess('✨ Blog indexes recreated successfully!');

  logInfo('🔄 Recreating indexes for Project collection...');
  await ProjectModel.collection.createIndex({
    title: 'text',
    description: 'text',
    keywords: 'text',
  });
  await ProjectModel.collection.createIndex({ categories: 1 });
  await ProjectModel.collection.createIndex({ views: -1 });
  await ProjectModel.collection.createIndex({ publishedAt: -1 });
  logSuccess('✨ Project indexes recreated successfully!');
}

async function initializeDatabase() {
  logDivider();
  logInfo('🚀 Initializing Database Setup...');
  logDivider();

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    logSuccess('✨ Connected to MongoDB successfully!');

    await setupBlogData();
    await setupProjectData();
    await fixBlogData();
    await fixProjectData();
    await resetDatabase();
    logDivider();
    logSuccess('✨ Database Setup Completed Successfully!');
    logDivider();
  } catch (error) {
    handleError(error as Error, 'database initialization');
  } finally {
    await mongoose.disconnect();
    logInfo('👋 Disconnected from MongoDB');
    process.exit(0);
  }
}

initializeDatabase();
