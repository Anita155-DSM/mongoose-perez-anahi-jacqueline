import { UserModel } from "../models/user.models.js";

export const createUser = async (req, res) => {
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
};

export const getAllUser = async (req, res) => {
  try {
    const users = await UserModel.find().populate("roles");

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

  try {
    // const user = await UserModel.findById(id);

    // const updatedUser2 = await UserModel.updateOne({ _id: id }, { username });

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

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    // const user = await UserModel.findById(id);

    // const deletedUser2 = await UserModel.deleteOne({ _id: id });

    const deletedUser = await UserModel.findByIdAndDelete(id);

    res.status(200).json({
      ok: true,
      msg: "Usuario eliminado correctamente",
      data: deletedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};