const header = document.querySelector(".header");
const link = document.querySelectorAll(".link");
const contact = document.querySelector(".contact-info");

window.addEventListener('scroll', () => {
    console.log(pageYOffset);

    if (window.pageYOffset >= 30) {
        header.style.position = "fixed";
        header.style.background = "#fff";
        contact.classList.add("link-dark");
    }
    else{
    	header.style.position = "absolute";
        header.style.background = "transparent";
        contact.classList.remove("link-dark");
    }

});