import { model, Schema, Types } from "mongoose";

const profileSchema = new Schema(
{
  bio: { 
    type: String, 
    maxlength: 500 
},
  avatar_url: { 
    type: String, 
    maxlength: 100 
},
  social: {  //embebido
    twitter: { 
      type: String, 
      maxlength: 100 
    },
    facebook: { 
      type: String, 
      maxlength: 100 
    },
    instagram: { 
      type: String, 
      maxlength: 100 
    },
},
  isDeleted: {
  type: Boolean,
  default: false
}
}
,{
  versionKey: false
});

export const ProfileModel = model("Profile", profileSchema);
