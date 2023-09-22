const app = require('./src/server');
const connection = require('./src/database/connection');

const { connectToDatabase } = connection;
const { PORT } = process.env;

(async () => {
	await connectToDatabase();
})();

const server = app.listen(PORT || 3000, async () => {
	console.log(`App listening on port ${process.env.PORT}!`);
});

module.exports = server;