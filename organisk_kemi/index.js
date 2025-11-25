
// Gem reference til nuværende side
let currentPage = '#page1';

// Kør, når DOM er loadet
document.addEventListener('DOMContentLoaded', () => {
    // Vis start-siden
    showPage(currentPage);

    // Menu
    const allPages = document.querySelectorAll('.page');
    const sidebar = document.querySelector('.sidebar');
    
    allPages.forEach(page => {
        const link = document.createElement('a');
        link.textContent = page.getAttribute('title') || page.id;
        link.href = "javascript:void(0)";
        link.addEventListener('click', () => showPage('#' + page.id));
        sidebar.appendChild(link);
    });

    // Dropdown på page6
    const dropdown = document.getElementById('theDropdown');
    const page6 = document.getElementById('page6');

    if(dropdown && page6){
        dropdown.addEventListener('change', () => {
            const val = dropdown.value;
            if(val === 'white'){
                page6.style.backgroundImage = '';
            } else {
                page6.style.backgroundImage = `url(${val})`;
            }
        });
    }

    // Video
    const videoButton = document.getElementById('videoButton');
    const theVideo = document.getElementById('theVideo');
    let videoPlaying = true;

    if(videoButton && theVideo){
        videoButton.addEventListener('click', () => {
            if(videoPlaying){
                theVideo.pause();
                videoPlaying = false;
            } else {
                theVideo.play();
                videoPlaying = true;
            }
        });
    }
});

// Funktion til at skifte side
function showPage(newPage){
    const oldPage = document.querySelector(currentPage);
    const nextPage = document.querySelector(newPage);

    if(oldPage) oldPage.classList.remove('show');
    if(nextPage) nextPage.classList.add('show');

    currentPage = newPage;
}


//for at for få billeder til at vise sig selv når man trykker på et knap 
//function showImage(imageUrl) {
           // const container = document.getElementById("imageDisplay");
           // container.innerHTML = `<img src="${imageUrl}" alt="Loaded Image">`;
       // }

// Find all buttons with class "toggle-btn"
const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const img = button.nextElementSibling; // The image right after the button

        if (img.style.display === "none" || img.style.display === "") {
            img.style.display = "block";   // Show image
        } else {
            img.style.display = "none";    // Hide image
        }
    });
});