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
document.addEventListener("DOMContentLoaded", function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwGsO6-5_-iepgehW6LuevPQqZb9TQ8kvfzJDwbBDAKS9GzL83UzBut-JR15Hdw--F_6w/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            fetch(scriptURL, { 
                method: 'POST', 
                body: new FormData(form)
            })
            .then(response => response.text()) // Convert response to text to check
            .then(data => {
                console.log("Success:", data);
                msg.innerHTML = "Message has been successfully sent! I will get back to you soon!";
                msg.style.display = "block"; // Ensure it is visible
                setTimeout(function () {
                    msg.innerHTML = "";
                    msg.style.display = "none"; // Hide after 5 sec
                }, 5000);
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
                msg.innerHTML = "Error submitting the form. Please try again!";
                msg.style.display = "block";
                msg.style.color = "red"; // Change to red for errors
                setTimeout(() => {
                    msg.innerHTML = "";
                    msg.style.display = "none";
                }, 5000);
            });
        });
    }
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

// Toggle Additional Skills inside "My Skills" Section
function toggleAddSkills(action) {
    const extraSkills = document.getElementById("extra-skills");
    const seeMoreBtn = document.getElementById("add-skills-see-more-btn");
    const showLessBtn = document.getElementById("add-skills-show-less-btn");

    if (action === "show") {
        extraSkills.style.display = "grid"; 
        seeMoreBtn.style.display = "none"; 
        showLessBtn.style.display = "inline-block"; 
    } else {
        extraSkills.style.display = "none"; 
        seeMoreBtn.style.display = "inline-block"; 
        showLessBtn.style.display = "none"; 
    }
}

/** Ensure Buttons Work After Page Load **/
document.addEventListener("DOMContentLoaded", function () {
    const showMoreSkillsBtn = document.getElementById("show-more-btn");
    const showLessSkillsBtn = document.getElementById("show-less-btn");
    const addSkillsSeeMoreBtn = document.getElementById("add-skills-see-more-btn");
    const addSkillsShowLessBtn = document.getElementById("add-skills-show-less-btn");

    if (showMoreSkillsBtn) {
        showMoreSkillsBtn.addEventListener("click", function () {
            toggleSkills(true);
        });
    }

    if (showLessSkillsBtn) {
        showLessSkillsBtn.addEventListener("click", function () {
            toggleSkills(false);
        });
    }

    if (addSkillsSeeMoreBtn) {
        addSkillsSeeMoreBtn.addEventListener("click", function () {
            toggleAddSkills("show");
        });
    }

    if (addSkillsShowLessBtn) {
        addSkillsShowLessBtn.addEventListener("click", function () {
            toggleAddSkills("hide");
        });
    }
});

/** --------------------------- COURSEWORK SECTION --------------------------- */
// Toggle details for coursework
function toggleDetails(detailId) {
    const detailElement = document.getElementById(detailId);
    if (detailElement.style.display === "none" || detailElement.style.display === "") {
        detailElement.style.display = "block"; // Show the details
    } else {
        detailElement.style.display = "none"; // Hide the details
    }
}

// Toggle sub-containers within coursework details
function toggleSubContainer(subContainerId) {
    const subContainer = document.getElementById(subContainerId);
    if (subContainer.style.display === "none" || subContainer.style.display === "") {
        subContainer.style.display = "block"; // Show the sub-container
    } else {
        subContainer.style.display = "none"; // Hide the sub-container
    }
}



