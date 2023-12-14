const express = require('express');

const app = express();
const PORT = 5001;

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

app.use(express.static('server/public'));

app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

app.get('/song', (req, res) => {
    res.send(songListArray);
});

// TODO - Add GET for songs

app.listen(5001, () => {
    console.log('listening on port', 5001)
});

//Post Song to Server
app.post('/artist', (req, res) => {
    const newArtist = req.body;

    if (newArtist.text == null) {
        res.sendStatus(400);
        return; 
      }

    artistListArray.push(req.body);

    res.sendStatus(201);

});

