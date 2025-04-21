import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL;

console.log("MONGODB_URL", MONGODB_URL);

if (!MONGODB_URL) {
  console.error(
    "Error: MONGODB_URL is not defined in the environment variables."
  );
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(
      MONGODB_URL,

      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      console.log("Connected to mongodb")
    );
  } catch (error) {
    console.error("database connection error:", error);
  }
};

export default connectDB;
