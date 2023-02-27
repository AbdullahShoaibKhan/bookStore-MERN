require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo succesful");
  } catch (error) {
    console.log("mongo failed");
    process.exit(1);
  }
};
module.exports = connectDB;
