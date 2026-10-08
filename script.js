// ================================
// MOBILE NAVIGATION
// ================================

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


// ================================
// CLOSE MOBILE NAVIGATION
// ================================

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ================================
// PROJECT COMING SOON
// ================================

function comingSoon(event) {

    event.preventDefault();

    alert("This project demo will be available soon.");

}


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !subject || !message) {

            alert("Please fill in all fields.");

            return;
        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;
        }


        /*
         * This currently opens the user's email application.
         * We can later connect this form to Formspree/Web3Forms
         * so messages are delivered directly to your inbox.
         */

        const mailto =
            "mailto:yeabbby0@gmail.com" +
            "?subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message
            );


        window.location.href = mailto;

    });

}


// ================================
// NAVBAR SHADOW
// ================================

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (!nav) {
        return;
    }

    if (window.scrollY > 50) {

        nav.style.boxShadow =
            "0 4px 25px rgba(0,0,0,0.35)";

    } else {

        nav.style.boxShadow = "none";

    }

});


console.log(
    "Portfolio loaded successfully - Yeabsra Belay"
);