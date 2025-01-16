import mongoose from 'mongoose';

// ✔ create contact schema
const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// ✔ create contact model
const Contact =
  mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
