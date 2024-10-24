let navbar = document.getElementById("navbar");
let links = document.getElementById("list-link");
let cancelNavbar = document.getElementById("cancel-bar");
cancelNavbar.addEventListener("click", () => {
   links.style.display="none";
   navbar.style.display = "block";
})
navbar.addEventListener("click", () => {
    links.style.display = "flex";
    navbar.style.display = "none";
    })