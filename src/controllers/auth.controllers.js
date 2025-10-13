import { UserModel } from "../models/user.models.js";
import { hashPassword, comparePassword } from "../helpers/bcrypt.js";
import { signToken, verifyToken } from "../helpers/jwt.js";

export const register = async (req, res) => {
  try {
    const { username, email, password, profile } = req.body;
    const user = await UserModel.findOne({email})
    if (user) {
        return res.status(400).json({
            msg: "este usuario ya esta en uso"
        })
    }
    const hasshedPassword = await hashPassword(password, user.password)
    const newUser = await UserModel.create({
      username,
      email,
      password: hasshedPassword,
      profile
    });
    return res.status(201).json({ msg: "Usuario registrado correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }
    const validPassword = await comparePassword(password, user.password);
    if (!validPassword) {
        return res.status(400).json({
            msg: "email o contraseña incorrectos"
        })
    }
    //una vez validado, lo guardamos en un token userid yy role
    const token = signToken({id: user._id, role: user.role});
    //guardamos en una cookie
    res.cookie("token", token, {
        httpOnly: true
    })
    // TODO: buscar user, validar password, firmar JWT y setear cookie httpOnly
    return res.status(200).json({ msg: "Usuario logueado correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const getProfile = async (req, res) => {
  try {
    // TODO: devolver profile del user logueado actualmente
    const profile = await UserModel.findById(req.user._id).select('profile');
    return res.status(200).json({ data: profile });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const logout = async (_req, res) => {
  res.clearCookie("token");
  return res.status(204).json({ msg: "Sesión cerrada correctamente" });
};
