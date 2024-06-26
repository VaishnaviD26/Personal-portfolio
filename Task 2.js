let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");
 
 function showMessage() {
  var inputs = document.getElementsByClassName('input-box');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type === 'text' || inputs[i].type === 'email' || inputs[i].type === 'number' || inputs[i].tagName === 'TEXTAREA') {
      inputs[i].value = '';
    }
  }

  alert("Hey, thanks a bunch for reaching out to me through the contact form on the website. I'll get back to you soon!");
}




function openresume(){
  window.open('RESUME 2024.pdf','_blank');
}
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offserHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + " ]")
          .classList.add("active");
      });
    }
  });
};
menuicon.onclick = () => {
  menuicon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

