export const createBackBtn = () =>{
    fetch("../pages/goBackBTN.html")
    .then(resp => resp.text())
    .then(data => {      
      $("#root").prepend(data)
    })
};

// export const createYoutubePage = () =>{
//     fetch("../pages/youtube.html")
//     .then(resp => resp.text())
//     .then(data => {      
//       $("#root").html(data)
//     })
// };

// export const createMapPage = () =>{
//     fetch("../pages/maps.html")
//     .then(resp => resp.text())
//     .then(data => {    
//       $("#root").html(data)
//     })
// };