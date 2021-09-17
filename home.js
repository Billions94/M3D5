function queryArtist(){
    let search = document.querySelector('input[type="search"]').value
    searchDeezers(search)
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
  
      // DOM manipulation
  
      let row = document.querySelector("#album-row");
      row.innerHTML = ''
      // Erasing the pervious table and put a new one when the function is called
      for (let i = 0; i < body.data.length; i++) {
        let object = body.data[i];
        console.log(object);
      // Looping through the data array to get our specific components
        const col = document.createElement("div");
        col.className = "col-3";
        col.innerHTML = `
  
                <div class="Recently-card ml-3 p-2 ">
                                <img src="${object.album.cover_medium}"
                                    class="card-img-top" />
                                <div class="card-body mt-2">
                                    <h6 class="card-title text-white">${object.title}</h6>
                                    <h5 class="card-text"></h5>
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
  
  
   function searchDeezers(callArtists) {
  
    return fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" +  callArtists,{
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "a81ed449a2msh8ebcd5601f7fe5ap11e549jsn3e177f880351",
      },
    })
     
   }
  
  
  
  window.onload = () => {
    searchDeezers()
    queryMusic()
    
  
  
  
  };
  
  document.querySelector("#btn-b4-follow").addEventListener("click", function () {
    let doc = document.querySelector(".follow");
    doc.classList.toggle("arrow-right");
    console.log(2);
    doc.classList.toggle("button-paused");
    console.log(3);
  });
  
  let audio1 = document.getElementById("myAudio");
  let isPlaying = false;
  function togglePlay() {
    isPlaying ? myAudio.pause() : myAudio.play();
  }
  myAudio.onplaying = function () {
    isPlaying = true;
  };
  myAudio.onpause = function () {
    isPlaying = false;
  };
  
  // let audio2 = document.getElementById("sound1");
  // let isPlaying = false;
  // function togglePlay1() {
  // isPlaying ? sound1.pause() : sound1.play();
  // };
  // sound1.onplaying = function() {
  // isPlaying = true;
  // };
  // sound1.onpause = function() {
  // isPlaying = false;
  // };