let encabezado=`
<h1>Cocinando JUNTOS</h1>
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="about.html">Sobre nosotros</a></li>
                <li><a href="recetas.html">Recetas</a></li>
                <li><a href="gallery.html">Galería</a></li>
                <li><a href="contacto.html">Contacto</a></li>
                               
            </ul>
        </nav>

`
let piePagina=`
        <div class="social">
            <ul class="social-icons">
                  <li>Siguenos en:</li>
                    <li><a href="#"><i class="fab fa-instagram" style="color: #ffffff;"></i></a></li>
                  <li><a href="#"><i class="fab fa-facebook" style="color: #ffffff;"></i></a></li>
                  <li><a href="mailto:contacto@recetasjuntos.com.ar"><i class="fa-solid fa-envelope" style="color: #ffffff;"></i></a></li>
              </ul>
          </div>
        <p>Derechos reservados &copy; 2023 Recetas de Cocina</p>`

document.querySelector("header").innerHTML=encabezado
document.querySelector("footer").innerHTML=piePagina