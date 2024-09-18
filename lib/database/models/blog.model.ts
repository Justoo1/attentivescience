import { Schema, model, models, Document } from 'mongoose'
import { boolean } from 'zod'

export interface IBlog extends Document {
  _id: string;
  createdAt: Date
  published: boolean
  imageUrl: string
  title: string
  description: string
  content: string
  createdBy: string
  category: { _id: string, name: string }
  videoUrl: string
}

const BlogSchema = new Schema({
  createdAt: { type: Date, default: Date.now},
  title: {type: String, required: true,},
  description: { type: String, required: true},
  content: { type: String, required: true },
  published: {type: Boolean, default: false},
  createdBy: { type: String },
  imageUrl: { type: String },
  videoUrl: { type: String, default:''},
  category: {type: Schema.Types.ObjectId, ref: "Category"},
})

const Blog = models.Blog || model('Blog', BlogSchema)

export default Blog