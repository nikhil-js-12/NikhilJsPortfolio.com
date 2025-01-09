// JavaScript file for the entire website functionality

// Tab switching functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Side menu toggle functionality
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

// Google Sheets form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbwGsO6-5_-iepgehW6LuevPQqZb9TQ8kvfzJDwbBDAKS9GzL83UzBut-JR15Hdw--F_6w/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message has been successfully sent!";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

// Projects section toggle functionality
function toggleProjects(action) {
    const extraProjects = document.getElementById("extra-projects");
    const seeMoreBtn = document.getElementById("projects-see-more-btn");
    const showLessBtn = document.getElementById("projects-show-less-btn");

    if (action === "show") {
        extraProjects.style.display = "grid"; // Display the hidden rows
        seeMoreBtn.style.display = "none"; // Hide the 'Show More' button
        showLessBtn.style.display = "block"; // Show the 'Show Less' button
    } else if (action === "hide") {
        extraProjects.style.display = "none"; // Hide the extra rows
        seeMoreBtn.style.display = "block"; // Show the 'Show More' button
        showLessBtn.style.display = "none"; // Hide the 'Show Less' button
    }
}

// Display message for experience "See more"
function displayExperienceMessage(event) {
    event.preventDefault();
    const msg = document.getElementById("experience-msg");
    msg.innerHTML = "Will be updated in future!";
    setTimeout(() => {
        msg.innerHTML = "";
    }, 5000);
}

// Toggle additional skills visibility
function toggleSkills(showMore) {
    const additionalSkills = document.getElementById("additional-skills");
    const showMoreBtn = document.getElementById("show-more-btn");

    if (showMore) {
        additionalSkills.style.display = "block";
        showMoreBtn.style.display = "none";
    } else {
        additionalSkills.style.display = "none";
        showMoreBtn.style.display = "block";
    }
}

// Toggle details for projects and experiences
function toggleDetails(detailId) {
    const detailElement = document.getElementById(detailId);
    if (detailElement.style.display === "none" || detailElement.style.display === "") {
        detailElement.style.display = "block"; // Show the details
    } else {
        detailElement.style.display = "none"; // Hide the details
    }
}
