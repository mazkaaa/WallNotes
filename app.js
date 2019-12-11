const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cookieParser());

require('./app/routes/note.routes')(app);

const indexRouter = require('./app/routes/index.routes');

//db config
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//db connect
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then( () =>{
	console.log('Successfully connected to database');
}).catch(err => {
	console.log('Cannot connect to database', err);
	process.exit();
});

app.use('/', indexRouter);

app.use((req, res, next) => {
	next(createError(404));
});


app.use( (err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	//res.render('error');
	res.json({
		"error": err.message,
		"status": err.status
	});
});

module.exports = app;
