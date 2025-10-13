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

categorySchema.virtual('courses',{
  ref: "Course",
  localField: "_id",
  foreignField: "category"
})

categorySchema.set('toJSON', {virtuals: true})
categorySchema.set('toObject', {virtuals: true})



/*categorySchema.virtual('courses', {  //'courses' es el nombre del virtual osea que cuando lo referencio eso debe ir en el populate
  ref: "Category",
  localField: "_id",  //el ID de categoria que se utiliza para buscar coincidencias en la ref despues
  foreignField: "category"  //el campo en el modelo Course que hace referencia a Category (donde se guarda el ID de los cursos que pertenecen a tal categoria)
})

categorySchema.set('toJSON', {virtuals: true});
categorySchema.set('toObject', {virtuals: true})*/


export const CategoryModel = model("Category", categorySchema);
