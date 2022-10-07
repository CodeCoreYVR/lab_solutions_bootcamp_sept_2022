const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const tasksRouter = require('./routes/tasks');

const app = express();
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Custom middleware
app.use((request, response, next) => {
	const todoList = request.cookies.todoList;
	response.locals.todoList = [];
	if (todoList) {
		// This initializes a variable called `todoList` which will be available to
		// all of the views. The variable `todoList` is assigned the value of the
		// `cookies.todoList` array
		response.locals.todoList = todoList;
	}

	// The middleware is finished. Go on to next middleware and/or route
	next();
});

app.use('/tasks', tasksRouter);

// Have the root path redirect the browser to the todo listing page
app.get('/', (request, response) => {
	response.redirect('/tasks');
});

const PORT = 4000;
const DOMAIN = 'localhost';
app.listen(PORT, DOMAIN, () => {
	console.log(`The server is listening at http://${DOMAIN}:${PORT}`);
});
