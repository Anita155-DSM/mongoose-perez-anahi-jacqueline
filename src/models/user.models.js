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

export const UserModel = model("User", userSchema);