import { CourseModel } from "../models/course.models.js";

export const createCourse = async (req, res) => {
  const { title, description } = req.body; //los valores que me llegan por body
  if (!title || !description) {
    return res.status(400).json({ msg: "falta informacion requerida" }); //si los valores de title o description no existen entonces retorno un error 400
  };
  //la siguiente validacion verifica si el curso ya existe en la base de datos
  const existingCourse = await CourseModel.findOne({ title });
  if (existingCourse) {
    return res.status(400).json({ msg: "el curso ya existe" });
  }
  try {
    const newCourse = await CourseModel.create({ //esta funcion crea un nuevo curso en la base de datos
      title,
      description
    });
    res.status(201).json({
      msg: "curso creado correctamente",
      data: newCourse
    });
  } catch (error) {
    res.status(500).json({ msg: "error interno del servidor" });
  }
};

export const getAllCourse = async (req, res) => {
  try {
    const courses = await CourseModel.find().populate("category"); //populate sirve para traer los datos de la coleccion relacionada, en este caso la categoria

    res.status(200).json({
      ok: true,
      data: courses,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getCourseById = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await CourseModel.findById(id);

    res.status(200).json({
      ok: true,
      data: course,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const existingCourse = await CourseModel.findById(id);
  if (!existingCourse) {  //si el curso no existe, no se puede actualizar
    return res.status(404).json({
      ok: false,
      msg: "El curso no existe",
    });
  }
  try {

    const updatedCourse = await CourseModel.findByIdAndUpdate(
      id,
      { title },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "Curso actualizado correctamente",
      data: updatedCourse,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const deleteCourse = async (req, res) => {
  const { id } = req.params;
  const existingCourse = await CourseModel.findById(id);
  if (!existingCourse) {  //si el curso no existe, no se puede eliminar
    return res.status(404).json({
      ok: false,
      msg: "El curso no existe",
    });
  }
  try {
    const deletedCourse = await CourseModel.findByIdAndDelete(id);
    res.status(200).json({
      ok: true,
      msg: "Curso eliminado correctamente",
      data: deletedCourse,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};
