import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb is connected on host ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1); // 1 means exit with error 0 means success
  }
};
