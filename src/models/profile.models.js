import { model, Schema, Types } from "mongoose";

const profileSchema = new Schema(
{
  user: { 
    type: Types.ObjectId, 
    ref: "User", 
    required: true 
},
  bio: { 
    type: String, 
    maxlength: 500 
},
  avatar_url: { 
    type: String, 
    maxlength: 100 
},
  social: {
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
},{
  versionKey: false
});

const ProfileModel = model("Profile", profileSchema);

export default ProfileModel;
