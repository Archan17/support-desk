const mongoose = require("mongoose");

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb connected:${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error :${error.message}`.red.underline.bold);
    process.exit(1);
  }
}

module.exports = { connectDB };
