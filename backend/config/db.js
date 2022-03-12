import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const conn = await mongoose.connect("mongodb+srv://akshara:12345@cluster0.zcst1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            useUnifiedTopology:true,
            useNewUrlParser:true
       
        })

        console.log(`MongoDB Connected=${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error:${error.message}`.red.underline.bold);
        process.exit(1);
        
        
    }
}
export default connectDB;