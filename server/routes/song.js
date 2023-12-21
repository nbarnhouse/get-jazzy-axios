const express = require ("express");
const router = express.Router();
const songListArray = require('../modules/song');

// Get route to get Song from Server
router.get('/', (req, res) => {
    res.send(songListArray);
});

//Post Route to send Song to Server
router.post('/', (req, res) => {

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

module.exports = router;