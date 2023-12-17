
function fetchSong() {
    //Get request for song
    axios({
        method: 'GET',
        url: '/song'
        })
        .then(function (response) {
            // Code that will run on successful response
            console.log(response);
            renderSong(response.data);   
        })
        .catch(function (error) {
            // Code that will run on any errors from the server.
            console.log(error);
            console.error('ERROR', error)
        })
};

function fetchArtist() {

    //Get request for artist
    axios({
        method: 'GET',
        url: '/artist'
        })
        .then(function (response) {
            // Code that will run on successful response
            // from the server.
            console.log(response);
            renderArtist(response.data);
        })
        .catch(function (error) {
            // Code that will run on any errors from the server.
            console.log(error);
            console.error('ERROR', error)
        })
};

function renderSong(songsFromServer) {
    //songFromServer will be an Array of song data
    const songDiv = document.querySelector('#songTableBody');
    for (let song of songsFromServer) {
        songDiv.innerHTML += `
        <tr>
            <td>${song.title}</td>
            <td>${song.artist}</td>
        </tr>
    `;
    }
};

function renderArtist(artistFromServer) {
    // artistFromServer will be an Array of artist data
    let artistDiv = document.querySelector('#artistTableBody');
    for (let artist of artistFromServer) {
        artistDiv.innerHTML += `
        <tr>
            <td>${artist.name}</td>
            <td>${artist.born}</td>
            <td>${artist.died}</td>
        </tr>
    `;
    }
};

function submitSong(event) {
    //Post function for song
    console.log('test');
    event.preventDefault();
    const titleElement = document.querySelector('#songTitle');
    const artistElement = document.querySelector('#songArtist');
    
    const newSongCat = {
        title: titleElement.value,
        artist: artistElement.value,
      };

    axios ({
        method: 'POST', 
        url: '/song', 
        data: newSongCat
    })
    .then((response) => {
        //Clear fields
        titleElement.value = '';
        artistElement.value = '';

        // Clear existing content in the song table body
        const songTableBodyClear = document.querySelector('#songTableBody');
        songTableBody.innerHTML = '';

        //Get new data
        fetchSong();

    }).catch((error) => {
        console.error('ERROR', error);
    });    

    form.reset();
};

function submitArtist(event) {
    //Post function for artist
    console.log('Post function for artist');

    event.preventDefault();
    const nameElement = document.querySelector('#artistName');
    const birthElement = document.querySelector('#artistBirth');
    const deathElement = document.querySelector('#artistDeath');

    const newArtistCat = {
        name: nameElement.value,
        born: birthElement.value,
        died: deathElement.value
      };

    axios ({
        method: 'POST', 
        url: '/artist', 
        data: newArtistCat
    })
    .then((response) => {
        //Clear fields
        nameElement.value = '';
        birthElement.value = '';
        deathElement.value = '';

        // Clear DOM
        const artistTableBodyClear = document.querySelector('#artistTableBody');
        artistTableBodyClear.innerHTML = '';

        //Get new data
        fetchArtist();

    }).catch((error) => {
        console.error('ERROR', error);
       });

       FormData.rest
};


fetchSong();
fetchArtist();