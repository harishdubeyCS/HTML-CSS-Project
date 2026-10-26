const burger = document.querySelector(".humburger");
const list = document.querySelector(".navlist");

burger.addEventListener("click", ()=>{
    list.classList.toggle("navlist-active")
})