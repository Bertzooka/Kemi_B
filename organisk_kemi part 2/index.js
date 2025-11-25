// Gem reference til nuværende side
let currentPage = '#page1';

// Kør, når siden er loadet
window.onload = () => {
    // Start med page7
    shiftPage(currentPage);

    // Lav menu links automatisk
    const allPages = document.querySelectorAll('.page');
    const sidebar = document.querySelector('.sidebar');

    allPages.forEach(page => {
        const a = document.createElement('a');
        a.innerText = page.getAttribute('title') || page.id;
        a.addEventListener('click', () => shiftPage('#' + page.id));
        sidebar.appendChild(a);
    });

    // Dropdown på page6
    const dropdown = document.getElementById("theDropdown");
    const page6 = document.getElementById("page6");

    dropdown.onchange = function () {
        if (dropdown.value === "white") {
            page6.style.backgroundImage = "";
        } else {
            page6.style.backgroundImage = `url(${dropdown.value})`;
        }
    };

    // Video funktionalitet (hvis du tilføjer et video element med id="theVideo" og knap med id="videoButton")
    const videoButton = document.getElementById("videoButton");
    const theVideo = document.getElementById("theVideo");
    let videoPlaying = true;

    if (videoButton && theVideo) {
        videoButton.addEventListener('click', () => {
            if (videoPlaying) {
                theVideo.pause();
                videoPlaying = false;
            } else {
                theVideo.play();
                videoPlaying = true;
            }
        });
    }
};

// Funktion til at skifte sider
function shiftPage(newPage) {
    const oldPage = document.querySelector(currentPage);
    const nextPage = document.querySelector(newPage);

    if (oldPage) oldPage.classList.remove('show');
    if (nextPage) nextPage.classList.add('show');

    currentPage = newPage;
}
