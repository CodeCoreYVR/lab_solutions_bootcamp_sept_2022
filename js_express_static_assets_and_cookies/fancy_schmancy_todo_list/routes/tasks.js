const express = require('express');
const router = express.Router();

// The callback for this route is executed when a get request is made to '/tasks/new'
// In the case of this project, it is when the link in the nav bar is clicked
router.get('/new', (request, response) => {
	// Render the newTask view as a response
	response.render('newTask');
});

// The callback for this route is executed when a post request is made to '/tasks'
// In the case of this project, it is when the form in the `newTask` view is
// submitted with the action="/tasks":
//
//        <form action="/tasks" method="post">
//
router.post('/', (request, response) => {
	// Get the parameters/values that were submitted by the form
	const title = request.body.title;
	const body = request.body.body;
	// Get the previous array of Todo Objects from the cookies (if it does not
	// exist, initialize it as an empty array);
	const todoList = request.cookies.todoList || [];
	// Add the new Todo Object into the `todoList`
	todoList.push({ title, body });
	// Send back the new `todoList` to the browser in the response
	response.cookie('todoList', todoList);
	// redirect the browser to the page the lists all todos
	response.redirect('/tasks');
});

// The callback for this route is executed when a get request is made to '/tasks'
// In the case of this project, it is when the link in the nav bar is clicked,
// or when the browser is redirected here after creating a task
router.get('/', (request, response) => {
	response.render('todoList');
});

module.exports = router;
