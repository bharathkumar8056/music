import mongoose from "mongoose";

export const connectDb = async () => {
	try {
		const connect = await mongoose.connect("mongodb://localhost:27017/");
		console.log("DATABASE CONNECTED", connect.connection.name);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
