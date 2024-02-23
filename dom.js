let currentImageIndex = 0;
let imagen = ["beagle.jfif", "buldog.jfif", "poodle.jfif","pastor aleman.jfif"]; 
let titulo = document.getElementById("h1")

function showImage(index) {
    let imagenes = document.getElementById("imagen");
    imagenes.src = imagen[index];
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= imagen.length) {
        currentImageIndex = 0;
    }
    showImage(currentImageIndex);
}

function previousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {   
        currentImageIndex = imagen.length - 1;
    }
    showImage(currentImageIndex);
}

function previousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = imagen.length - 1;
    }
    showImage(currentImageIndex);
}
showImage(currentImageIndex);