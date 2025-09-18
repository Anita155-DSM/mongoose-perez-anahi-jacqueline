import mongoose, { Schema, model, Types} from 'mongoose';

const courseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  teacher: { // embebido
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
    category: {
    type: mongoose.Schema.Types.ObjectId,  // id del documento en la otra colección
    ref: "Category"                        // nombre del modelo al que hace referencia
  }
}, { 
    versionKey: false
});

export const CourseModel = model("Course", courseSchema);
