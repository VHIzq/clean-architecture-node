import { Schema, model } from "mongoose"

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    descrption: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
 //hace referencia a una colecicon en la base dfe  datos
const UserModel = model("users", UserSchema)

export default UserModel
