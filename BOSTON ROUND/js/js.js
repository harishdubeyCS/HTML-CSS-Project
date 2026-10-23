const hambrger = document.getElementById("hamburger");
const navlist = document.getElementById("navlist");

hambrger.addEventListener("click",()=>{
    navlist.classList.toggle("navlist-active");
})