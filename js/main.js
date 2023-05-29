let recetas = `
<div class="grid-container">
`

for(let elemento of recipes){
    recetas = recetas + `
     <div class="grid-item">
    <a href="${elemento.url}"><img src= ${elemento.img} alt="Imagen del producto 1" class="img-item">
    <span class= "titulo-item"> ${elemento.title}</span>
    
    </div>
  `;
}

document.querySelector("main").innerHTML = recetas;
