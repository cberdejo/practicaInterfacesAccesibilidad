function guardarPeliculaYRedirigir(pelicula, direccion){
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("pelicula", pelicula);
    }
    window.location.replace(direccion + ".html");
}

function cargarPelicula(){
    if (typeof(Storage) !== "undefined") {
        return localStorage.getItem("pelicula");
    } else {
        return null;
    }
}

function imagenPelicula(){
    if (typeof(Storage) !== "undefined") {
        var ruta = "images/" + localStorage.getItem("pelicula") + ".jpg";
        document.getElementById("imagen").getAttribute("src") = ruta;
    } else {
        return null;
    }
}