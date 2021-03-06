//making carousel
let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("pictures");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//making tabs
function openTab(evt, tabName) {
    let i, tabContent, tabLinks;

tabContent = document.getElementsByClassName("tab");
for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
}

tabLinks = document.getElementsByClassName("tabLinks");
for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
}

document.getElementById(tabName).style.display = "block";
evt.currentTarget.className += " active";
}


//making counter
const speed = 200;

document.querySelectorAll('#counter').forEach(counter => {

    const counterNumber = +counter.getAttribute('countTo');

    const updateCount = setInterval(() => {

        const divContent = +counter.innerText;
        const increaseBy = counterNumber / speed;

        divContent < counterNumber ?
            counter.innerHTML = Math.ceil(divContent + increaseBy) :
            clearInterval(updateCount);

    }, 1);

});