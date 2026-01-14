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

// create a custom calendar invite for the event
document.getElementById('ics-download').addEventListener('click', function (e) {
    e.preventDefault();

    const event = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//SWiCS//Hackathon//EN',
        'BEGIN:VEVENT',
        'UID:' + Date.now() + '@hackwithswics.com',
        'DTSTAMP:' + new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z',
        'DTSTART;TZID=Europe/London:20260222T100000',
        'DTEND;TZID=Europe/London:20260222T200000',
        'SUMMARY:Hack with SWiCS: An MLH x Gemini Hack Day',
        'DESCRIPTION:Join SWiCS for the launch of our single-day, inclusivity-focused hackathon: 6 hours of building time, powered by Google Gemini.\\n\\nWe welcome beginners, first-time hackers, and students from all backgrounds, especially those from underrepresented groups in STEM :).',
        'LOCATION:The Diamond, 32 Leavygreave Rd, Broomhall, Sheffield S3 7RD, UK',
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([event], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'hack-with-swics.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// run the countdown every second & call immediately 
setInterval(countdown, 1000);
countdown();