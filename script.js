
// ================= MOBILE MENU =================

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuIcon.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("bx-menu");
        icon.classList.add("bx-x");
    } else {
        icon.classList.remove("bx-x");
        icon.classList.add("bx-menu");
    }

});


// ================= CLOSE MENU =================

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.remove("bx-x");
        icon.classList.add("bx-menu");

    });

});


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ================= CONTACT FORM =================

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
    const phone = document.querySelector("#phone").value;
    const message = document.querySelector("#message").value;


    const mailBody =
        "Name: " + name +
        "\nEmail: " + email +
        "\nPhone: " + phone +
        "\n\nMessage:\n" + message;


    const mailtoLink =
        "mailto:your-email@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(mailBody);


    window.location.href = mailtoLink;


    formMessage.textContent =
        "Opening your email application...";

});