//There is something wrong this code. The error is showing around the event listener. 

const navToggle = document.querySelector('nav-toggle');
const navLink = document.querySelectorAll('nav-link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


//Basketball Scoreboard

let count = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


function homeIncrement () {
    count += 1
    homeScore.textContent = count
}

function guestIncrement () {
    count += 1
    guestScore.textContent = count
}

//BLackjack

//Password Generator

//Leads application