/* eslint-disable @typescript-eslint/no-require-imports */
console.log(
  '\x1b[36m%s\x1b[0m',
  `
══════════════════════════════════════
                                     
          Setting Up Database          
                                      
══════════════════════════════════════`
);

import 'dotenv/config';
import fs from 'fs';
import mongoose from 'mongoose';
import BlogModel from '../src/models/blog-model.js';

async function setupBlogData() {
  console.log(
    '\x1b[36m%s\x1b[0m',
    `
  ╔════════════════════════════════╗
  ║      Setting Up Blog Data      ║
  ╚════════════════════════════════╝
`
  );

  const blogs = fs.readdirSync('./public/blogs');

  await Promise.all(
    blogs.map(async (slug: string) => {
      const blogData = await BlogModel.findOne({ slug: slug });
      const metaData = JSON.parse(
        fs.readFileSync(`./public/blogs/${slug}/meta.json`, 'utf-8')
      );

      if (!blogData) {
        await BlogModel.create({
          ...metaData,
          createdAt: new Date(metaData.createdAt),
          image:
            '/blogs/architectures-of-modern-front-end-applications/cover.png',
          slug,
        });

        console.log(
          '\x1b[32m%s\x1b[0m',
          `✨ Blog "${slug}" has been added successfully!`
        );
      } else if (
        blogData._doc.title !== metaData.title ||
        blogData._doc.description !== metaData.description ||
        JSON.stringify(blogData._doc.categories) !==
          JSON.stringify(metaData.categories)
      ) {
        await BlogModel.updateOne(
          { slug },
          {
            title: metaData.title,
            description: metaData.description,
            categories: metaData.categories,
            createdAt: new Date(metaData.createdAt),
          }
        );

        console.log(
          '\x1b[32m%s\x1b[0m',
          `✨ Blog "${slug}" has been updated successfully!`
        );
      } else {
        console.log(
          '\x1b[32m%s\x1b[0m',
          `✨ Blog "${slug}" already up to date!`
        );
      }
    })
  );
}

async function setupProjectData() {
  /* === DO SOMETHING === */
}

async function setupContactData() {
  /* === DO SOMETHING === */
}

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(async () => {
    await setupBlogData();
    await setupProjectData();
    await setupContactData();

    console.log(
      '\x1b[36m%s\x1b[0m',
      `
══════════════════════════════════════
                                      
  Setting Up Database Successfully
                                      
══════════════════════════════════════`
    );
  })
  .finally(() => {
    mongoose.disconnect();
    process.exit(0);
  });
