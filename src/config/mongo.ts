import { connect } from "mongoose";
import { DB_URI } from "./constants";

const dbConnect = async (): Promise<void> => {
    try {
        console.log(DB_URI)
        await connect(DB_URI || 'mongodb://localhost:27017/contactdb')
        console.log("DB initialized successfully.");
    } catch (error) {
        throw error
    }
};

export default dbConnect;