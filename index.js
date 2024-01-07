document.addEventListener("DOMContentLoaded", function (event) {
  //do work
  const expand = document.getElementById("expand");
  const mobileNav = document.querySelector(".mobile-nav");
  const ulNavMobile = document.querySelector('.nav-ul-link') ;


  expand.addEventListener("click", (event) => {
    mobileNav.classList.toggle("hidden");
  });

  ulNavMobile.addEventListener('click', () => {
    mobileNav.classList.toggle("hidden");
  })

});
