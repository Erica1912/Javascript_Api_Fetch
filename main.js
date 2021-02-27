const url = "https://pokeapi.co/api/v2/pokemon/1/";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let element = document.getElementById("element");    
    element.innerHTML = 
    `<p>${data.name}</p>
    <img src='${data.sprites.front_default}' />`    
  })
  .catch((err) => console.log(err));
