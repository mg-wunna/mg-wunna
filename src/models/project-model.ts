import mongoose from 'mongoose';

// ✔ create project schema
const projectSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    categories: { type: [String], required: true },
    links: [
      {
        title: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// ✔ create index for title and description fields for text search
projectSchema.index({ title: 'text', description: 'text' });

// ✔ create index for categories field
projectSchema.index({ categories: 1 });

// ✔ create project model
const ProjectModel =
  mongoose.models.Project || mongoose.model('Project', projectSchema);

export default ProjectModel;
