import { UserModel } from "../models/user.models.js";
import { ProfileModel } from "../models/profile.models.js";
import { EnrollmentModel } from "../models/enrollment.models.js";

/*export const createUser = async (req, res) => {
    const { username, email, password } = req.body; //los valores que me llegan por body
    if (!username || !email || !password) {
        return res.status(400).json({ msg: "falta informacion requerida" });//si los valores de username, email o password no existen entonces retorno un error 400
    }; 
    //la siguiente validacion verifica si el usuario ya existe en la base de datos
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ msg: "el usuario ya existe" });
    }
    try {
        const newUser = await UserModel.create({ //esta funcion crea un nuevo usuario en la base de datos
            username,
            email,
            password
        });
        res.status(201).json({
        msg: "usuario creado correctamente",
        data: newUser
    });
    } catch (error) {
        res.status(500).json({msg: "error interno del servidor"});
    }
};*/

export const getAllUser = async (req, res) => {
  try {
    const users = await UserModel.find().populate("Profile"); //populate sirve para traer los datos de la coleccion relacionada, en este caso el perfil

    res.status(200).json({
      ok: true,
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);

    res.status(200).json({
      ok: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  const existingUser = await UserModel.findById(id);
  if (!existingUser) {  //si el usuario no existe, no se puede actualizar
    return res.status(404).json({
      ok: false,
      msg: "El usuario no existe",
    });
  }
  try {

    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { username },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "Usuario actualizado correctamente",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

  const { id } = req.params;
  const existingUser = await UserModel.findById(id);
  if (!existingUser) {
    return res.status(404).json({
      ok: false,
      msg: "El usuario no existe",
    });
  }
  try {
    // Eliminar perfil relacionado (si existe)
    await ProfileModel.deleteOne({ user: id });
    // Eliminar inscripciones relacionadas
    await EnrollmentModel.deleteMany({ user: id });
    // Soft delete del usuario
    const deletedUser = await UserModel.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
    res.status(200).json({
      ok: true,
      msg: "Usuario, perfil e inscripciones eliminados correctamente",
      data: deletedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  };
