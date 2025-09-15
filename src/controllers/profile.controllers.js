import { ProfileModel } from "../models/profile.models.js";

export const createProfile = async (req, res) => {
  const { user, bio, avatar_url, social } = req.body;
  if (!user) {
    return res.status(400).json(
        { msg: "No puedes crear un perfil sin un usuario asociado",
          ok: false
   });
  }
  try {
    const newProfile = await ProfileModel.create({
      user,
      bio,
      avatar_url,
      social
    });
    res.status(201).json(
        { msg: "Perfil creado correctamente",
          data:newProfile,
          ok: true
        });
  } catch (error) {
    res.status(500).json(
        { mesg: "Error interno del servidor",
          ok: false,
          data: error.message
        });
  }
};

export const getAllProfiles = async (req, res) => {
  try {
    const profiles = await ProfileModel.find().populate("User"); //populate sirve para traer los datos de la coleccion relacionada, en este caso el usuario

    res.status(200).json({
      ok: true,
      data: profiles,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getProfileById = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await ProfileModel.findById(id).populate("User");

    res.status(200).json({
      ok: true,
      data: profile,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const updateProfile = async (req, res) => {
  const { id } = req.params;
  const { bio, avatar_url, social } = req.body;
  const existingProfile = await ProfileModel.findById(id);
  if (!existingProfile) {  //si el perfil no existe, no se puede actualizar
    return res.status(404).json({
      ok: false,
      msg: "El perfil no existe",
    });
  }
  try {
    const updatedProfile = await ProfileModel.findByIdAndUpdate(
      id,
      { bio, avatar_url, social },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "Perfil actualizado correctamente",
      data: updatedProfile,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const deleteProfile = async (req, res) => {
  const { id } = req.params;
  const existingProfile = await ProfileModel.findById(id);
  if (!existingProfile) {  //si el perfil no existe, no se puede eliminar
    return res.status(404).json({
      ok: false,
      msg: "El perfil no existe",
    });
  }
  try {
    const deletedProfile = await ProfileModel.findByIdAndDelete(id);
    res.status(200).json({
      ok: true,
      msg: "Perfil eliminado correctamente",
      data: deletedProfile,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};