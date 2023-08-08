const mongoose = require("mongoose");
require("dotenv").config();



const connect = async () => {
  try {
    const uri = process.env.MONGO_URI; // Get the MongoDB URI from the environment variable
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, // Optional: enables Mongoose to create indexes for unique fields automatically
      useFindAndModify: false, // Optional: disables Mongoose's deprecated findAndModify() function
    };
    const client = await mongoose.connect('mongodb+srv://<username>:<password>@cluster0.maekmkp.mongodb.net/?retryWrites=true&w=majority');
    console.log("Connected to MongoDB!");
    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
};

module.exports = connect;
