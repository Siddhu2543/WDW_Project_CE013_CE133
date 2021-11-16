const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 1.5) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
});

let lis = document.getElementById("scroll").querySelectorAll('li');

function addBG(e) {
    e.target.classList.add("bg-dark");
    e.target.classList.add("text-white");
}

function removeBG(e) {
    e.target.classList.remove("bg-dark");
    e.target.classList.remove("text-white");
}

function bgRED(e) {
    if (!e.target.classList.contains("bg-danger")) {
        e.target.classList.remove("bg-dark");
        e.target.classList.add("bg-danger");
        // e.target.style.zoom = 1.5;
        // e.target.style.MozTransform = 'scale(1.5)';
        e.target.style.WebkitTransform = 'scale(1.1)';
        e.target.style.boxShadow = "5px 5px 5px black, -5px -5px 5px black, -5px 5px 5px black, 5px -5px 5px black";
        e.stopPropagation();
    }
}

function bgDARK(e) {
    if (e.target.classList.contains("bg-danger")) {
        e.target.classList.add("bg-dark");
        e.target.classList.remove("bg-danger");
        e.target.classList.remove("shadow");
        e.target.style.WebkitTransform = 'scale(1)';
        e.target.style.boxShadow = "";
        e.stopPropagation();
    }
}

function toDSA() {
    window.location.href = "Quiz Application with Timer/dsa.html"
}

function toDBMS() {
    window.location.href = "Quiz Application with Timer/dbms.html"
}

function toDDC() {
    window.location.href = "Quiz Application with Timer/ddc.html"
}