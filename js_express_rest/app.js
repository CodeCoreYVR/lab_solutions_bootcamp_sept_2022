const express = require('express');
const logger = require('morgan');
const path = require('path')
const methodOverride = require('method-override');
const noteRoutes = require('./routes/notes');
const billRoutes = require('./routes/bills');

const app = express();
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
// Method Override
app.use(
    // Without this, we cannot accept DELETE or PATCH or PUT requests from
    // the browser!
    methodOverride((req, res) => {
        if (req.body && req.body._method) {
            const method = req.body._method;
            // This modifies the request object
            // it changes it from a POST request
            // to be whatever the value for _method was
            // within the form that was just submitted
            return method;
        }
    })
);

app.get("/", (req, res) => {
    res.render("home");
});


app.use('/notes', noteRoutes);
app.use('/bills', billRoutes);

const PORT = 3000;
const DOMAIN = 'localhost';

app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening at http://${DOMAIN}:${PORT}`);
})

// Then, create all CRUD routes for the notes in their own router module.

// A route to show a form for creating a note at GET /notes/new
// 1. create a page =>new.ejs => form
// 2. make a router for this page => /notes/new
//-----------------------------------------------
// A route for create notes from form submissions at POST /notes
// 1. change the action and method of the form in the new.ejs => action="/notes", method="POST"
// 2. make a router which path is /notes and the method is post
// 3. inside this router we call the knex insert function here, insert the data from the form
// 4. redirect to home page
//-----------------------------------------------
// A route to list the notes at GET /notes
// 1. create a page => /notes
// 2. make a router for this page /notes
// 3. inside this router, get all the data from notes table => send it to the page index.ejs
// 4. using a loop to log all the data from the router
//-----------------------------------------------
// A route to show a single note at GET /notes/:id
// 1. create a page 
// 2. a router to get to this page /notes/:id
// 3. inside this router, get the data of this id from the notes table, send it to the show.ejs
// 4. display the data here
//-----------------------------------------------
// A route to delete a note at DELETE /notes/:id
// 1. add a delete button => to the show.ejs
// 2. create a router => delete, path is /notes/:id
// 3. delete the data by the id from the path => :id
// 4. redirect to home page
//-----------------------------------------------
// A route to edit a note at GET /notes/:id/:edit
// 1. create a page for edit => edit.ejs
// 2. add a button to edit => show.ejs => once the user clicked this button => redirect to the edit page, also send the id to this page
// 3. get the record of this id => display the data on the edit page
//-----------------------------------------------
// A route to update an edited note at PATCH /notes/:id
// 1. make a router to update => PATCH /notes/:id
// 2. change the form inside edit.ejs => we can send the updated data to patch router
// 3. in patch router, we can get the data by req.body, also the id from req.params
// 4. update this record by the new data and the id
// 5. redirect to home page
//-----------------------------------------------