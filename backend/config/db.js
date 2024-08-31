import mongoose from "mongoose";

import { ENV_VARS } from "./envVars.js";

export default async function connectDB() {
    try {
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI)
        console.log("mongoose connected: " + conn.connection.host)
    } catch (error) {
        console.log("Error connecting mongodb: " + error.message)
        process.exit(1); // 1 means there was an error, 0 means success
    }
}
