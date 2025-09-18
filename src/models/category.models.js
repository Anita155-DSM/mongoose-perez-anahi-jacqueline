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

export const CategoryModel = model("Category", categorySchema);
