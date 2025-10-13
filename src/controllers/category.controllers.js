import { CategoryModel } from "../models/category.models.js";
import { CourseModel } from "../models/course.models.js";

export const createCategory = async (req, res) => {
  const { name, description } = req.body; //los valores que me llegan por body
  if (!name || !description) {
    return res.status(400).json({ msg: "falta informacion requerida" }); //si los valores no existen entonces retorno un error 400
  };
  //la siguiente validacion verifica si la categoria ya existe en la base de datos
  const existingCategory = await CategoryModel.findOne({ name });
  if (existingCategory) {
    return res.status(400).json({ msg: "la categoria ya existe" });
  }
  try {
    const newCategory = await CategoryModel.create({ //esta funcion crea una nueva categoria en la base de datos
      name,
      description
    });
    res.status(201).json({
      msg: "categoria creada correctamente",
      data: newCategory
    });
  } catch (error) {
    res.status(500).json({ msg: "error interno del servidor" });
  }
};

export const getAllCategory = async (req, res) => {
  try {
    const categories = await CategoryModel.find().populate("courses"); //populate sirve para traer los datos de la coleccion relacionada, en este caso los cursos

    res.status(200).json({
      ok: true,
      data: categories,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await CategoryModel.findById(id);

    res.status(200).json({
      ok: true,
      data: category,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const existingCategory = await CategoryModel.findById(id);
  if (!existingCategory) {  //si la categoria no existe, no se puede actualizar
    return res.status(404).json({
      ok: false,
      msg: "La categoria no existe",
    });
  }
  try {
    const updatedCategory = await CategoryModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "Categoria actualizada correctamente",
      data: updatedCategory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const existingCategory = await CategoryModel.findById(id);
  if (!existingCategory) {  //si la categoria no existe, no se puede eliminar
    return res.status(404).json({
      ok: false,
      msg: "La categoria no existe",
    });
  }
  try {
    const deletedCategory = await CategoryModel.findByIdAndDelete(id);
    res.status(200).json({
      ok: true,
      msg: "Categoria eliminada correctamente",
      data: deletedCategory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};
