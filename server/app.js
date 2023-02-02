const express = require("express");
const config = require('config');
require('dotenv').config();
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
// const res = require("express/lib/response");
// const pool = require('./db');

const PORT = process.env.PORT || 5000;
// const PORT = config.get('port') || 5000;


const app = express();
// middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router)

// app.use('/api/auth', require('./routes/auth.routes'));

//Обработка ошибок, последний Middleware
app.use(errorHandler);

async function start() {
	try{
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
	} catch (e) {
		console.log('Server Error', e.message);
		process.exit(1);
	};
};

start();


// test code
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// app.use(express.json({type: "text/plain"}));
// app.use('/api', userRouter);
// app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
// app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`)).on('connection', (connection) => connection.pipe(process.stdout));