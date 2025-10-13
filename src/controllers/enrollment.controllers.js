
import { EnrollmentModel } from "../models/enrollment.models.js";

// Inscribir usuario a curso
export const enrollUserInCourse = async (req, res) => {
  const { userId, courseId } = req.body;
  if (!userId || !courseId) {
    return res.status(400).json({ msg: "Faltan datos" });
  }
  try {
    const exists = await EnrollmentModel.findOne({ user: userId, course: courseId });
    if (exists) {
        return res.status(400).json({ msg: "Ya está inscrito" });
    }
    const enrollment = await EnrollmentModel.create({ user: userId, course: courseId });
    res.status(201).json({ msg: "Inscripción exitosa", enrollment });
  } catch (e) {
    res.status(500).json({ msg: "Error", error: e.message });
  }
};


// Desinscribir usuario
export const unenrollUser = async (req, res) => {
  const { enrollmentId } = req.params;
  await EnrollmentModel.findByIdAndDelete(enrollmentId);
  res.json({ msg: "Desinscripción exitosa" });
};