fetchapi = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/412")
    .then((response) => {
        return response.json()
    })
    .then((body) => {
        console.log(body)

        let firstRow = document.querySelector("#liked-songs")
        firstRow.innerHTML=`<div class="d-flex liked-songs-container">
        <img src="${body.picture_big}" width="192px" alt="">
        <div class="expert">
            <h1 id="likedsongh1">${body.name}</h1>
        </div>
    </div>`


        
    })
    .catch((err) => console.error(err.message))
}

fetchapi2 = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=50")
    .then((response) => {
        return response.json()
    })
    .then((body) => {
        console.log(body)

        let row = document.querySelector(".song-content")
        row.innerHTML=``
        let array = body.data
        console.log(array)

        for(let i=0; i < array.length; i++) {
            let col = document.createElement('div')

            col.innerHTML=`<div class="table-body mt-3">

            <div class="d-flex hash">
                <h6 class="text-light">${i+1}</h6>
            </div> 
            <div class=" d-flex cover title">
                <div class="cover-son">
                    <img src="${array[i].album.cover_big}" width="45" />
                </div>
                <div class="co">
                    <a id="a1" href="">${array[i].title}</a>
                    <br>
                    <a id="a2" href="">${array[i].artist.name}</a><span class="commas">,</span>
                </div>
            </div>
            
            
            <div class="d-flex duration">
            <span class="text-light ">${array[i].duration}</span>
            </div>

        </div>`
        row.appendChild(col)
      
        }

        

       

    
        
    })
    
}

window.onload = () => {
    const id = new URLSearchParams(window.location.search).get("id")
    console.log(id)
    fetchapi()
    fetchapi2()
}
