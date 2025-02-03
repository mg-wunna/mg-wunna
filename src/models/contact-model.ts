import mongoose from 'mongoose'

// ✔ create contact schema
const contactSchema = new mongoose.Schema(
  {
    email: String,
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

// ✔ create contact model
const ContactModel =
  mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default ContactModel
