import mongoose from "mongoose";
const connection_string = process.env.MONGO_URI;

export const connectDb = async () => {
    try {
        const connection = await mongoose.connect(connection_string, {
            dbName: 'Suhaag-Matrimony',
        });

        console.log('Connected to MongoDB');
        console.log(connection.connection.db.databaseName); // Database name verification
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message || error);
    }
};
