// Carousel functionality
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let index = 0;

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("carouselImage").src = images[index];
}

// Form validation
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    const email = document.querySelector("#email").value;
    if (!validateEmail(email)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
    }
});

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
