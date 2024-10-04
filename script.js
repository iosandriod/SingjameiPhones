let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}


// script.js

// Define your links here
const links = {
    whatsapp: 'https://Wa.me/+919366976292', // Replace with your WhatsApp link
    instagram: 'https://www.instagram.com/singjameiphones?igsh=cTdoamZ0dnNrenNl', // Replace with your Instagram link
    location: 'https://maps.google.com/?q=24.775154,93.942650' // Replace with your location link
};

// Add event listeners to the icons
document.getElementById('whatsapp').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.open(links.whatsapp, '_blank'); // Open in a new tab
});

document.getElementById('instagram').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.open(links.instagram, '_blank'); // Open in a new tab
});

document.getElementById('location').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.open(links.location, '_blank'); // Open in a new tab
});