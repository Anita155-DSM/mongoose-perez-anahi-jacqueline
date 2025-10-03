import { Types, model, Schema } from 'mongoose';

const categorySchema = new Schema({
  name: { 
    type: String, 
    required: true 
},
  description: {
    type: String,
    required: true
  },
}, { 
    versionKey: false
});

categorySchema.virtual("course", {
  ref: 'Course',
  localField: '_id',
  foreignField: "category"
})

categorySchema.set("toObject", {virtuals: true})
categorySchema.set("toJSON", {virtuals: true})

export const CategoryModel = model("Category", categorySchema);
