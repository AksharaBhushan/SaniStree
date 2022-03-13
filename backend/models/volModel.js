import mongoose from "mongoose";


const volSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone_number: {
        type: String,
        required: true,
        
      },
    adhaar_card: {
        type: Number,
        required: true,
      },
    email: {
        type: String,
        required: true,
      },
    profile_pic: {
      type: String,
      required: true,
    },
    age: {
        type: Number,
        required: true,
      },
    gender: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
);

const Vol = mongoose.model("Vol", volSchema);
export default Vol;