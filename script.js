console.log("Hack with SWICS loaded");

function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("responsive");
}

// automatically close the menu when nav link clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navbar").classList.remove("responsive");
    });
});

const countdown = () => {
    // set hackathon date using GMT timezone
    const countDate = new Date("February 22, 2026 10:00:00 GMT").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    if (gap > 0) {
        // create time constants
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // calculate the units
        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        // update html
        document.getElementById("days").innerText = textDay < 10 ? "0" + textDay : textDay;
        document.getElementById("hours").innerText = textHour < 10 ? "0" + textHour : textHour;
        document.getElementById("minutes").innerText = textMinute < 10 ? "0" + textMinute : textMinute;
        document.getElementById("seconds").innerText = textSecond < 10 ? "0" + textSecond : textSecond;
    }

};

// run the countdown every second & call immediately 
setInterval(countdown, 1000);
countdown();