
let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");
menuIcon.onclick= () =>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};
 document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target) && !menuIcon.contains(event.target) && navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      menuIcon.classList.toggle("bx-x");
    }
  });