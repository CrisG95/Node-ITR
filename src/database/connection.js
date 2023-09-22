const mongoose = require('mongoose');

let cachedDB = null;

const connectToDatabase = async () => {
	try {

		if(cachedDB) {
			const hasAConnection = mongoose.connections.find(
				connection => connection.readyState === 1
			);
			if(hasAConnection) {
				console.log('Reusing connection');
				return;
			}
		}

		const URI = `${process.env.MONGODB_URL}`;

		const mongooseInstance = await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

		console.log('Connected to database');

		cachedDB = mongooseInstance;

	} catch(error) {
		console.log(error);
	}
};

module.exports = { connectToDatabase };