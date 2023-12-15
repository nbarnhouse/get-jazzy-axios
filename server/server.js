const express = require('express');
console.log('Test for express on js_number_group');

const app = express();
const PORT = process.env.PORT || 5001;

//registered static files
app.use(express.static('server/public'));
//Allows acceptance of JSON data in the body of the request
app.use(express.json());

app.listen(5001, () => {
    console.log('listening on port', 5001)
});


const artistListArray = [
    {
        name: 'Miles Davis',
        born: 1926,
        died: 1990,
    },
    {
        name: 'Duke Ellington',
        born: 1899,
        died: 1974,
    },
    {
        name: 'John Coltrane',
        born: 1926,
        died: 1987,
    },
    {
        name: 'Louis Daniel Armstrong',
        born: 1901,
        died: 1971,
    },
];

const songListArray = [
    {
        title: 'Take Five',
        artist: 'The Dave Brubeck Quartet',
    },
    {
        title: 'So What',
        artist: 'Miles Davis',
    },
    {
        title: 'Sing Sing Sing',
        artist: 'Benny Goodman',
    },
    {
        title: 'Take the "A" Train',
        artist: 'The Dave Brubeck Quartet',
    },
];


// Get route to get Artist from Server
app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

// Get route to get Song from Server
app.get('/song', (req, res) => {
    res.send(songListArray);
});


//Post Route to send Artist to Server
app.post('/artist', (req, res) => {

    const newArtist = req.body;
    // store data
    console.log(`Get a POST request for artist`, newArtist);

    if (
        newArtist.name == null ||
        newArtist.born == null ||
        newArtist.died == null ||
        !newArtist.name ||
        !newArtist.born ||
        !newArtist.died
      ) {
        res.sendStatus(400);
        return;
      };

    artistListArray.push(newArtist);
    //console.log(`New Artist`, newArtist);
    res.sendStatus(201);

});

//Post Route to send Song to Server
app.post('/song', (req, res) => {

    const newSong = req.body;
    // store data
    console.log(`Get a POST request for song`, newSong);

    if (
        newSong.title == null ||
        newSong.artist == null ||
        !newSong.title ||
        !newSong.artist
      ) {
        res.sendStatus(400);
        return;
      };
    
    songListArray.push(newSong);
    //console.log(`New Song`, newSong);
    res.sendStatus(201);

});

