import mongoose from "mongoose";

const mongoUrl = process.env.MONGODB_URL;

if (!mongoUrl) {
  throw new Error("Connection string is undefined!");
}

let cached = global.mongooseConn;
if (!cached) {
  cached = global.mongooseConn = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) {
    console.log("Connected from cache");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("New connection");
    cached.promise = mongoose.connect(mongoUrl).then((c) => c.connection);
  }

  try {
    console.log("Connected from promise");

    const conn = await cached.promise;
    return conn;
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
