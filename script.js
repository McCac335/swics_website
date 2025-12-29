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
