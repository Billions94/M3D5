// const ref = document.querySelector('#goodmorning, #recently')


// const tracksTable = document.getElementById("tracks")
// const goToArtist = new URLSearchParams(window.location.search).get("albumId")
// console.log(`Album`, goToArtist)

const goodMorning = () => {
    queryArtist()
    showAlbum()
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
  
      // DOM manipulation
  
      let row = document.getElementById('goodmorning')
      row.innerHTML = ''
      // Erasing the pervious table and put a new one when the function is called
      for (let i = 0; i < 5; i++) {
        let object = body.data[i];
      
      // Looping through the data array to get our specific components
        const col = document.createElement("div");
        col.className = "d-flex";
        col.innerHTML = `
  
        <div class="good-morning-card ml-3 mt-4 mb-3 active ">
        <div  class="row no-gutters">
            <div class="col-3">
                <a href="./albumpage.html?albumId=${object.album.id}">
                <img src="${object.album.cover_medium}"
                    style="border-radius: 4px" width="80" /></a>
            </div>
            <div class="col-5 ml-0">
                <div class="card-body">
                    <h6 class="card-title text-white">
                        ${object.title}
                    </h6>
                    <button id='btn-with-style' type="button" onclick="playTrack()" class="btn btn-success">▶️</button>
                </div>
            </div>
        </div>
      </div>
                
                `;
        row.appendChild(col);

      }
      // At the end of this loop with should have x length of cards with different album covers and different title
    })
    .catch((err) => {
      console.error(err);
    });
  }



const recentlyPlayed = () => {
    showAlbum()
    .then((response) => response.json())
    .then((body) => {
    //   console.log(body);
  
      // DOM manipulation
  
      let row = document.getElementById('recently')
      row.innerHTML = ''
      // Erasing the pervious table and put a new one when the function is called
      for (let i = 0; i < 5; i++) {
        let object = body.data[i];
        console.log(object);
      // Looping through the data array to get our specific components
        const col = document.createElement("div");
        col.className = "d-flex";
        col.innerHTML = `
                <div class="Recently-card ml-3 p-2 ">
                <img src="${object.album.cover_medium}"
                    class="card-img-top" />
                <div class="card-body mt-2">
                    <h6 class="card-title text-white">${object.title}</h6>
                    <a href="./albumpage.html?albumId=${object.album.id}" class="card-text text-light">${object.artist.name}</a>
                    <h5></h5>
                    <button id='btn-with-style1' type="button" class="btn btn-success">▶️</button>
                </div>
                </div>
                
                `;
        row.appendChild(col);
      }
      // At the end of this loop with should have x length of cards with different album covers and different title
    })
    .catch((err) => {
      console.error(err);
    });
}


const showsToTry = () => {
    showAlbum()
    .then((response) => response.json())
    .then((body) => {

  
      let row = document.getElementById('shows')
      row.innerHTML = ''
      for (let i = 0; i < 5; i++) {
        let object = body.data[i];
        
        const col = document.createElement("div");
        col.className = "d-flex";
        col.innerHTML = `
                <div class="Recently-card ml-3 p-2 ">
                <img src="${object.album.cover_medium}"
                    class="card-img-top" />
                <div class="card-body mt-2">
                    <h6 class="card-title text-white">${object.title}</h6>
                    <a href="./albumpage.html?albumId=${object.album.id}" class="card-text text-light">${object.artist.name}</a>
                    <button id='btn-with-style1' type="button" class="btn btn-success">▶️</button>
                </div>
                </div>
                
                `;
        row.appendChild(col);
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

const recentlyDownloaded = () => {
    showAlbum()
    .then((response) => response.json())
    .then((body) => {

  
      let row = document.getElementById('downloaded')
      row.innerHTML = ''
      for (let i = 0; i < 5; i++) {
        let object = body.data[i];
        
        const col = document.createElement("div");
        col.className = "d-flex";
        col.innerHTML = `
                <div class="Recently-card ml-3 p-2 ">
                <img src="${object.album.cover_medium}"
                    class="card-img-top" />
                <div class="card-body mt-2">
                    <h6 class="card-title text-white">${object.title}</h6>
                    <a href="./albumpage.html?albumId=${object.album.id}" class="card-text text-light">${object.artist.name}</a>
                    <button id='btn-with-style1' type="button" class="btn btn-success">▶️</button>
                </div>
                </div>
                
                `;
        row.appendChild(col);
      }
    })
    .catch((err) => {
      console.error(err);
    });

}

const favouriteMusice = () => {
    showAlbum()
    .then((response) => response.json())
    .then((body) => {

  
      let row = document.getElementById('favorite')
      row.innerHTML = ''
      for (let i = 0; i < 5; i++) {
        let object = body.data[i];
        
        const col = document.createElement("div");
        col.className = "d-flex";
        col.innerHTML = `
                <div class="Recently-card ml-3 p-2 ">
                <img src="${object.album.cover_medium}"
                    class="card-img-top" />
                <div class="card-body mt-2">
                    <h6 class="card-title text-white">${object.title}</h6>
                    <a href="./albumpage.html?albumId=${object.album.id}" class="card-text text-light">${object.artist.name}</a>
                    <button id='btn-with-style1' type="button" class="btn btn-success">▶️</button>
                </div>
                </div>
                
                `;
        row.appendChild(col);
      }
    })
    .catch((err) => {
      console.error(err);
    });

}

function showAlbum() {
  
    return fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=album",{
      method: "GET",
    })
     
   }

function queryArtist(){
    let search = document.querySelector('input[type="search"]').value
    searchDeezers(search)
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
  
      // DOM manipulation
  
      let row = document.getElementById('recently')
      row.innerHTML = ''
      // Erasing the pervious table and put a new one when the function is called
      for (let i = 0; i < body.data.length; i++) {
        let object = body.data[i];
        // console.log(object);
      // Looping through the data array to get our specific components
        const col = document.createElement("div");
        col.className = "col-3";
        col.innerHTML = `
  
                <div class="Recently-card ml-3 p-2 ">
                                <img src="${object.album.cover_medium}"
                                    class="card-img-top" />
                                <div class="card-body mt-2">
                                    <h6 class="card-title text-white">${object.title}</h6>
                                    <a href="./albumpage.html?albumId=${object.album.id}" class="card-text text-light">${object.artist.name}</a>
                                    <button id='btn-with-style1' type="button" class="btn btn-success">▶️</button>
                                </div>
                            </div>
                
                `;
        row.appendChild(col);
      }

      let goodmorning = document.getElementById('goodmorning')
      goodmorning.innerHTML = ''

      for (let i = 0; i < 5; i++) {
        let object = body.data[i];
      
      // Looping through the data array to get our specific components
        const col = document.createElement("div");
        col.className = "d-flex";
        col.innerHTML = `
  
        <div class="good-morning-card ml-3 mt-4 mb-3 active ">
        <div  class="row no-gutters">
            <div class="col-3">
                <img src="${object.album.cover_medium}"
                    style="border-radius: 4px" width="80" />
            </div>
            <div class="col-5 ml-0">
                <div class="card-body">
                    <h6 class="card-title text-white">
                        ${object.title}
                    </h6>
                    <button id='btn-with-style' type="button" onclick="playTrack()" class="btn btn-success">▶️</button>
                </div>
            </div>
        </div>
      </div>
                
                `;
             goodmorning.appendChild(col);
      }

      
      // At the end of this loop with should have x length of cards with different album covers and different title
    })
    .catch((err) => {
      console.error(err)
    });
  
  }
  
  
   function searchDeezers(callArtists) {
  
    return fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" +  callArtists,{
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "a81ed449a2msh8ebcd5601f7fe5ap11e549jsn3e177f880351",
      },
    })
     
   }



  
  

  //  const albumID = new URLSearchParams(window.location.search).get("id")
  //  console.log(albumID);
  
  
  window.onload = () => {
    goodMorning()
    recentlyPlayed()
    showsToTry()
    recentlyDownloaded()
    favouriteMusice()
    searchDeezers()

 

    
    




  
  
  
  };

