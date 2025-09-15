import {Schema, model, Types} from "mongoose";

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
    }
},{
    versionKey: false,
    timestamps: true
});

export const UserModel = model("User", userSchema);