// --- Mobile Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// When the user clicks the hamburger menu, toggle the 'active' class
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// --- Astrologer Profile Modal Logic ---
const modal = document.getElementById('profile-modal');

// Function to open the modal and inject the specific astrologer's data
function openProfile(name, skills, experience, price) {
    // Inject data into the HTML elements inside the modal
    document.getElementById('modal-name').innerText = name;
    document.getElementById('modal-skills').innerText = skills;
    document.getElementById('modal-exp').innerText = experience;
    document.getElementById('modal-price').innerText = price;
    
    // Show the modal by changing display from 'none' to 'flex'
    modal.style.display = 'flex';
}

// Function to close the modal
function closeProfile() {
    modal.style.display = 'none';
}

// Close the modal if the user clicks anywhere outside the white box
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeProfile();
    }
});
