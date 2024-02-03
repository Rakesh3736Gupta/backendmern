import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  const url = "mongodb+srv://rakeshgupta3736:RJZOj9iSaYNSetS3@cluster0.ypiojnk.mongodb.net/ecomerce"
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL)
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
