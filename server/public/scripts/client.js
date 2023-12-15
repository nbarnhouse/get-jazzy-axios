
function fetchSong() {
    //Get request for song
    axios({
        method: 'GET',
        url: '/song'
    })
        .then(function (response) {
            // Code that will run on successful response
            // from the server.
            console.log(response);
            // quotesFromServer will be an Array of quotes
            let quotesFromServer = response.data;
            let contentDiv = document.querySelector('#songTableBody');
            for (let song of quotesFromServer) {
                contentDiv.innerHTML += `
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
            `;
            }   
        }).catch(function (error) {
            // Code that will run on any errors from the server.
            console.log(error);
            console.error('ERROR', error)
        });
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
            // quotesFromServer will be an Array of quotes
            let quotesFromServer = response.data;
            let contentDiv = document.querySelector('#artistTableBody');
            for (let artist of quotesFromServer) {
                contentDiv.innerHTML += `
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `;
            }
        }).catch(function (error) {
            // Code that will run on any errors from the server.
            console.log(error);
            console.error('ERROR', error)
        })
};

// function renderSong() {
//   //Render song data to the DOM
// };

// function renderArtist() {
//   //Render artist data to the DOM
// };

function submitSong(event) {
    //Post function for song

    event.preventDefault();
    const titleElement = document.querySelector('#songTitle');
    const artistElement = document.querySelector('#songArtist');

    const newSongCat = {
        title: titleElement.value,
        artist: artistElement.value,
      };

    axios ({
        method: 'POST', 
        url: '/artist', 
        data: newSongCat
    })
    .then((response) => {
        fetchSong();

    }).catch((error) => {
        console.error('ERROR', error);
    });    
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
    //GET new data
    fetchArtist();
    }).catch((error) => {
        console.error('ERROR', error);
       });

};