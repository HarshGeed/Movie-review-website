import mongoose from "mongoose";

export async function connect() {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connected successfully");

        mongoose.connection.on("error", (err) => {
            console.error("MongoDB connection error:", err);
            process.exit(1); // Ensure the process exits on failure
        });

        return connection;
    } catch (error) {
        console.error("Something went wrong while connecting to MongoDB:", error);
        throw error; // Rethrow for better debugging
    }
}
