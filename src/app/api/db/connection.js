import mongoose from "mongoose";
const connection_string = process.env.MONGO_URI;

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(connection_string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'Suhaag-Matrimony',
        })

        console.log('Connected to MongoDB');
        console.log(connection.db.databaseName);
    } catch (error) {
        console.log('Error connecting to MongoDB');
        console.log(error);
    }
};