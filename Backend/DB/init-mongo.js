import mongoose from "mongoose";

// Define the connection string for MongoDB
const dbURI = "mongodb://localhost:27017/mydatabase"; // Replace with your actual MongoDB URI

// Function to establish a connection to MongoDB
const connectDb = () => {
  return mongoose
    .connect(dbURI, {
      useNewUrlParser: true,  // Use the new connection string parser
      useUnifiedTopology: true, // Use the new unified topology engine
    })
    .then(() => {
      console.log("Connected to MongoDB successfully!");
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB:", err);
    });
};

// Export the connectDb function to use it elsewhere in the app
export default connectDb;
