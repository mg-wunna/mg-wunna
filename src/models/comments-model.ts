import mongoose from 'mongoose';

// ✔ create comment schema
const commentSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    slug: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// ✔ create index for type and slug fields
commentSchema.index({ type: 1, slug: 1 });

// ✔ create index for date field
commentSchema.index({ date: -1 });

// ✔ create comment model
const CommentModel =
  mongoose.models.Comment || mongoose.model('Comment', commentSchema);

export default CommentModel;
