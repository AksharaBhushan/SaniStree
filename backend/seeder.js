import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import blogs from './data/blogs.js';
import User from './models/userModel.js';
import Blog from './models/blogModel.js';
import connectDB from './config/db.js';
import pads from './data/pads.js';
import Pad from './models/padModel.js';

dotenv.config();

await connectDB();

const importData=async()=>{
    try {
        await Blog.deleteMany();
        await User.deleteMany();
        await Pad.deleteMany();


        const createdUser=await User.insertMany(users);

        const adminUser=createdUser[0]._id;

        const sampleBlogs=blogs.map(blog=>{
            return{...blog,user:adminUser}
        })

        await Blog.insertMany(sampleBlogs)
        console.log("Data imported".green.inverse)
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData=async()=>{
    try {
        await Blog.deleteMany();
        await User.deleteMany();

        console.log("Data destroyed".red.inverse)
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit();
    }
}

if(process.argv[2]==="-d"){
    destroyData();
}else{
    importData();
}