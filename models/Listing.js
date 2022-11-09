import mongoose, { Schema } from 'mongoose';

const AgentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const ListingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  property_type: {
    type: String,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  baths: {
    type: Number,
    required: true,
  },
  parking: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  photos: {
    type: [String],
    required: true,
  },
  video: String,
  agent: {
    type: AgentSchema,
    required: true,
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
});

export default mongoose.models.Listing || mongoose.model('Listing', ListingSchema);
