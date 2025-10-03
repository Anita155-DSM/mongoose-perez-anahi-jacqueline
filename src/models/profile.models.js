import { model, Schema, Types } from "mongoose";

const profileSchema = new Schema(
{
  user: {
    type: Types.ObjectId,  // esto es para que cuando cree un profile en mi controlador se asegure que exista un user
    required: true,
    unique: true
},
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

profileSchema.virtual("user", {
  ref: 'User',
  localField: '_id',
  foreignField: 'Profile'
})

profileSchema.set("toObject", {virtuals: true})
profileSchema.set("toJSON", {virtuals: true})

export const ProfileModel = model("Profile", profileSchema);
