import { Document, Schema, model, models  } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string
    imageUrl: string
    description: string
    location: string
    startDateTime: Date
    endDateTime: Date
    createdAt: Date
    categoryId: string
    published: boolean
    category: { _id: string, name: string },
    content: string
    createdBy: string
    
}

const EventSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    location: {type: String},
    createdAt: {type: Date, default: Date.now},
    imageUrl: {type: String, required: true},
    startDateTime: {type: Date, default: Date.now},
    endDateTime: {type: Date, default: Date.now},
    published: {type: Boolean, default: false},
    category: {type: Schema.Types.ObjectId, ref: "Category"},
    content: {type: String},
    createdBy: {type: String},
})

const Event = models.Event || model("Event", EventSchema);

export default Event;