import mongoose from 'mongoose';

// ✔ create blog schema
const blogSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    keywords: { type: String, required: true },
    categories: { type: [String], required: true },
    views: { type: Number, default: 0 },
    publishedAt: { type: Date, required: true },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

// ✔ create index for title and description fields for text search
blogSchema.index({ title: 'text', description: 'text', keywords: 'text' });

// ✔ create index for categories field
blogSchema.index({ categories: 1 });

// ✔ create index for views field
blogSchema.index({ views: -1 });

// ✔ create index for publishedAt field
blogSchema.index({ publishedAt: -1 });

// ✔ create blog model
const BlogModel = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default BlogModel;
