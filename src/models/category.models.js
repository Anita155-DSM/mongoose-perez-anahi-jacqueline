import mongoose, { model } from 'mongoose';

const categorySchema = new mongoose.Schema({
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

export const categoryModel = model("Category", categorySchema);
