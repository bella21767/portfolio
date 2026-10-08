// ================================
// MOBILE SIDEBAR
// ================================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });
}


// ================================
// SIDEBAR NAVIGATION
// ================================

const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".page-section");

navItems.forEach(function (item) {

    item.addEventListener("click", function (event) {

        const link = item.getAttribute("href");

        // Ignore links without a section
        if (!link || !link.startsWith("#")) {
            return;
        }

        event.preventDefault();

        // Remove active state
        navItems.forEach(function (nav) {
            nav.classList.remove("active");
        });

        // Add active state
        item.classList.add("active");

        // Hide all sections
        sections.forEach(function (section) {
            section.classList.add("hidden-section");
        });

        // Show selected section
        const selectedSection = document.querySelector(link);

        if (selectedSection) {
            selectedSection.classList.remove("hidden-section");
        }

        // Close mobile sidebar
        if (window.innerWidth <= 850) {
            sidebar.classList.remove("open");
        }
    });

});


// ================================
// GENERATE SCHEDULE BUTTON
// ================================

const generateBtn = document.getElementById("generateBtn");

if (generateBtn) {

    generateBtn.addEventListener("click", function () {

        generateBtn.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> Generating...';

        setTimeout(function () {

            generateBtn.innerHTML =
                '<i class="fas fa-circle-check"></i> Schedule Ready';

            showMessage("Schedule generated successfully!");

            setTimeout(function () {

                generateBtn.innerHTML =
                    '<i class="fas fa-wand-magic-sparkles"></i> Generate Schedule';

            }, 2500);

        }, 1500);

    });

}


// ================================
// TOAST MESSAGE
// ================================

function showMessage(message) {

    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");

    if (!toast || !toastMessage) {
        return;
    }

    toastMessage.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2500);
}


// ================================
// WEEK BUTTONS
// ================================

const dateButtons = document.querySelectorAll(".date-btn");

dateButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        dateButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        showMessage(button.textContent + " selected");

    });

});


console.log("Smart Scheduling System loaded successfully.");