document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("imageover");
    const imageText = document.getElementById("imgtext");

    imageContainer.addEventListener("mouseover", function() {
        imageText.classList.add("active")
    });

    imageContainer.addEventListener("mouseout", function() {
        imageText.classList.remove("active")
    });
});