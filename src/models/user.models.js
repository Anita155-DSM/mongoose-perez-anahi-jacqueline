import mongoose, {Schema, model, Types} from "mongoose";

const userSchema = new Schema(
{
    username: {
        type: String,
        unique: true,
        require: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    Profile: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Profile' 
    },
    isDeleted: {
       type: Boolean,
       default: false
} 
}
,{
    versionKey: false
});



/*// Virtual para populate reverso - obtener el perfil desde Profile collection
// usando el campo 'user' que referencia a este User
userSchema.virtual('profileDetails', {
  ref: 'Profile',           // Modelo Profile
  localField: '_id',        // ID del usuario
  foreignField: 'user',     // Campo en Profile que referencia al User
  justOne: true             // true porque es relación 1:1
});

// Incluir virtuals en JSON
userSchema.set('toJSON', { virtuals: true });
userSchema.set('toObject', { virtuals: true });*/

export const UserModel = model("User", userSchema);