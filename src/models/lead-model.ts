import mongoose from 'mongoose'

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    company: { type: String, trim: true },
    phone: { type: String, trim: true },
    projectType: {
      type: String,
      required: true,
      enum: [
        'business-website',
        'website-redesign',
        'saas-mvp',
        'dashboard',
        'other',
      ],
    },
    budget: {
      type: String,
      required: true,
      enum: ['<500', '500-2k', '2k-5k', '5k+'],
    },
    description: { type: String, required: true, maxlength: 2000 },
    goals: [
      {
        type: String,
        enum: [
          'more-customers',
          'brand-image',
          'automation',
          'launch-startup',
          'other',
        ],
      },
    ],
    timeline: {
      type: String,
      required: true,
      enum: ['asap', '1-2-weeks', '1-month', 'flexible'],
    },
    source: { type: String, default: 'website' },
    status: {
      type: String,
      default: 'new',
      enum: ['new', 'contacted', 'qualified', 'won', 'lost'],
    },
  },
  { timestamps: true, versionKey: false },
)

const LeadModel = mongoose.models.Lead || mongoose.model('Lead', leadSchema)

export default LeadModel
