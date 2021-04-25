import mongoose from "mongoose";

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

db.mongoose.set("debug", { shell: true });

export { db };
