const images = ["/images/aurum/image1.jpg", "/images/aurum/image2.jpg"];
let currentIndex = 0;

const currentImgElement = document.getElementById("current-img");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function showImage(index) {
    currentImgElement.src = images[index];
}

prevBtn.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Show the initial image
showImage(currentIndex);
