const express = require ("express");
const router = express.Router();
const artistListArray = require('../modules/artist');

// Get route to get Artist from Server
router.get('/', (req, res) => {
    res.send(artistListArray);
});


//Post Route to send Artist to Server
router.post('/', (req, res) => {

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

// Get route to delete Artist from Server
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const filteredArtistArray = artistListArray.filter(() =>{
    return artist.id !== id;
  });
  artistListArray = filteredArtistArray; 
  res.send(200);
});

module.exports = router;