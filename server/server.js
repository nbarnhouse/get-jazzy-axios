const express = require('express');
console.log('Test for express on js_number_group');
//Import arrays in modules
const artistListArray = require('./modules/artist');
const songListArray = require('./modules/song');
//Import artist routes
const artistRouter = require('./routes/artist');
//Import songs routes
const songRouter = require('./routes/song');


const app = express();
const PORT = process.env.PORT || 5001;

app.listen(5001, () => {
    console.log('listening on port', PORT)
});

//registered static files
app.use(express.static('server/public'));
//Allows acceptance of JSON data in the body of the request
app.use(express.json());


//Make route to particular path
app.use('/artist', artistRouter);


//Make route to particular path
app.use('/song', songRouter);