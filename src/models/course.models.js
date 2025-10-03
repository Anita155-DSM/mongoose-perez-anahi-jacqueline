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
    category: [{
    type: mongoose.Schema.Types.ObjectId,  // id del documento en la otra colección
    ref: "Category"                        // nombre del modelo al que hace referencia
  }] //category como array pensado en la relacion muchos a muchos UN CURSO PUEDE PERTENECER A MUCHAS CATEGORIA SY UNA CATEGORIA PUEDE TENER MUCHOS CURSOS
}, { 
    versionKey: false
});

export const CourseModel = model("Course", courseSchema);
