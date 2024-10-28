// JavaScript für die Galerie-Interaktivität

let modal = document.getElementById("galleryModal");
let modalImg = document.getElementById("modalImage");
let captionText = document.getElementById("caption");

function openModal(imageIndex) {
    const images = document.querySelectorAll(".gallery-img");
    modal.style.display = "block";
    modalImg.src = images[imageIndex].src;
    captionText.innerHTML = images[imageIndex].alt;
}

function closeModal() {
    modal.style.display = "none";
}