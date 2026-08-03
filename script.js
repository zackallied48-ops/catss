function openImage(image) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popupImage").src = image.src;
}

function closeImage() {
    document.getElementById("popup").style.display = "none";
}