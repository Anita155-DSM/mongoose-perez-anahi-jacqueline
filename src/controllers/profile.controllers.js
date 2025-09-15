import ProfileModel from "../models/profile.models";

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