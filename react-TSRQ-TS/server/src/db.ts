//import mongoose and export the connection function
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

export async function db() {
  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL is not defined in the environment variables."
    );
  }

  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("DB connected");
  } catch (error) {
    console.log("DB connection error: ", error);
  }
}
