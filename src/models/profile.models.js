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

//populate reverso

profileSchema.virtual('users',{
  ref: "User",
  localField: "_id",
  foreignField: "Profile"
})




/*profileSchema.virtual('users',{ //nombre del virtual
  ref: "User",//el 
  localField: "_id",
  foreignField: "Profile"
})

profileSchema.set('toJSON', {virtuals: true})
profileSchema.set('toObject', {virtuals: true})*/

export const ProfileModel = model("Profile", profileSchema);
