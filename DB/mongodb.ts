import mongoose from 'mongoose';

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    mongoose.connection.on('connected', () => {
      console.log("DB CONNECTED SUSSEFULLU ⚡⚡⚡");
    })
    mongoose.connection.on('error', () => {
      console.log("ERROR IN CONNECTING TO DB");
      process.exit();
    })


  } catch (error) {
    console.log(error);
  }
}