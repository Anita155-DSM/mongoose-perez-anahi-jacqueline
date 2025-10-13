import mongoose, { Schema, model } from 'mongoose';

const enrollmentSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  }
}, {
  versionKey: false
});

export const EnrollmentModel = model("Enrollment", enrollmentSchema);