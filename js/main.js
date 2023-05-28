let recetas = `
<div class="grid-container">
`


for(let elemento of datos){
    recetas = recetas + `
    <div class="grid-item">
    <img src= ${elemento.img} alt="Imagen del producto 1" class="img-item"></a>
    <span class= "titulo-item"> ${elemento.title}</span>
    <p class="parrafo-item"> ${elemento.url}</p>
    </div>
  `
}

document.querySelector("section").innerHTML=recetas

