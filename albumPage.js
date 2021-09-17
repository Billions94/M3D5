

 const showAlbum = () => {

    const albumCover = document.getElementById("coverImg")
    const albumName = document.getElementById("albumName")
   

    const tracksTable = document.getElementById("tracks")
    

    /* const params = new URLSearchParams(window.location.search).get('albumId')
    console.log(params) */

    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062" , 
    {
        method: "GET",
        
    })
        .then(resp =>resp.json())
        .then((data) => 
        
        {console.log(data)
        albumName.innerText = data.title
        albumCover.innerHTML = `<img src="${data.cover}" class="img-fluid"  />`

        
        
        console.log(data.tracks.data.length)
        
         for (let i=0; i< data.tracks.data.length; i++) {
        
        let tracksList = document.createElement("TR")
        tracksList.innerHTML= 
        `<th scope="row">${i+1}</th>
        <td colspan="2">${data.tracks.data[i].title}</td>
        <td>${data.tracks.data[i].duration}</td>`

        console.log(tracksList)

        tracksTable.appendChild(tracksList)
        
        
        } 

        
    })
        .catch(e=> console.log(e))
    
}

window.onload = function () {

    showAlbum() 
   
   /* <tr>
   <th scope="row">1</th>
   <td colspan="2">20th Century Fox Firm Fare</td>
   <td>0:25</td>
 </tr>
     */

}   
 