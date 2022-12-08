/* Consumo de Apis */

function ConsumodeAPIS (NombreAPI) {
    alert ( "Consumo de api: " + NombredeAPI )

    const API_URL= "https://jsonplaceholder.typicode.com/" ;
}

console.log (`${API_URL}posts/1`);
fetch (`${API_URL}posts/1`)


  function mouseDown() {
    document.getElementById("myP").style.color = "red";
  }
  
  function mouseUp() {
    document.getElementById("myP").style.color = "green";
  }



  function MostrarMensajesIf () {
    /* let boolean= true;*/
    /* let number =5, */
  
let string = 5;
if (string >= 7){ 
    alert ("Se cumplió la condición 1")
}
else if (string =="Hola") {
    alert ("Se cumplió la condición 2");
}
else if (string < 4) {
    alert ("Se cumplió la condición 3");
}
else {
     alert ("No se cumplió ninguna condición");

}}

  function MostrarMensajeSwitch () {
/* Switch */

let string = "Hola";

switch (string) {

case 5:
    alert ("Es 5")
    break;

case "Hola":
    alert ("Hola");
    break;

    default:
        alert ("No cumple ningún caso")
        break;
} }

/*While */

function MostrarMensajesWhile ()

{
let ciclo =5;
while (ciclo >= 1 ) {
    ciclo = ciclo -1;
    alert(ciclo)
}
 }


/* Do While */

 function MostrarMensajesDoWhile () {

let num = 1;

do {

num=num + 1;

alert ('el número es :' + num);
/* if (num === 3) {
break;
} */
}
 while (num < 5); 
 }


 function MostrarMensajesFor () {

 for (let index =0 ; index < 5;index++)  {
 alert (index);}
 }

 function Sumar  (num1, num2) {
 let total = num1 + num2;
alert ("La suma de "+ num1 + " y " + num2 + " es igual a " + total)
 }

/* Manejo del DOM */

function ManejodelDOM () {
document.getElementById("obtenerPorId").innerHTML = "Hola bienvenidos a la página de María"


}

/* Evento Click */ 
    function Saludar() {
        alert("Bienvenidos a la página de María")
      }
      
      let botonEvento = document.getElementById("evento");
      let inputEvento = document.getElementById("evento2");
      let submitEvento = document.getElementById("evento2");

/* APIS */

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  const API_URL = "https://jsonplaceholder.typicode.com/" ;


/* GET POST */


function ConsumoAPIS (NombreAPI)
{
alert ("Consumo de Api:"+ NombreAPI)

}
fetch (`${API_URL}post/1`)


/* post de un post */

fetch(`${API_URL}posts`, {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
      }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => console.log("Publicar un post: ", json));

/* Rick y Morty */


function mostrarPersonajes() {
    /* URL del API */
    const API_URL = "https://rickandmortyapi.com/api/character";
  
    /* Ocultar botón */
    document.getElementById("botonMostrarPersonajes").classList.add("ocultar");
  
    /* Petición al API */
    fetch(API_URL, { method: "GET" })
    .then((response) => response.json())
    .then((jsonResponse) => {
      const containerCards = document.getElementById("container-cards");
      /* Cambiar algunas propiedades de la información que me trae el API */
      /* const imgCharacters = ["https://media.vandal.net/i/1200x630/9-2022/202292910312533_1.jpg", "https://pbs.twimg.com/media/FUqYS8jXoAAWSf9.jpg"]
      
      for (let index = 0; index < imgCharacters.length; index++) {
        jsonResponse.results[index].name = imgCharacters[index]
      } */
  
      /* Asignación de tarjeta a cada persona del API */
      const template = jsonResponse.results.map((character)=>{
        return (`
          <div class="card card-element">
            <img src="${character.image}" class="card-img-top" alt="${character.name}">
            <div class="card-body">
              <h5 class="card-title">Nombre: ${character.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Especie: ${character.species} </li>
              <li class="list-group-item">Género: ${character.gender}</li>
              <li class="list-group-item">Status: ${character.status}</li>
            </ul>
            <div class="card-body">
              <a href="${character.url}" target="_blank" class="card-link">Ver más información</a>
            </div>
          </div>
        `)
      })
  
      /* Agregación de las tarjetas al contenedor */
      for (let index = 0; index < template.length; index++) {
        containerCards.innerHTML += template[index];
      }
    })
  }
  