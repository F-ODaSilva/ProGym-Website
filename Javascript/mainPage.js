//ON LOAD POP UP SOCIAL MEDIA

document.addEventListener("DOMContentLoaded", function () {
  /*The "DOMContentLoaded" is used when the initial HTML document has been completely loaded and parsed without waiting for stylesheeets, images and subframes to finish loading.
     This is specially suited to this scenario */
  //Check if the user has visited the site before
  if (!localStorage.getItem("visited")) {
    //Show the popup after 5 seconds
    setTimeout(function () {
      document.getElementById("popUpStart").style.display = "contents";
      localStorage.setItem("visited", "true");
    }, 5000); //5 seconds delay
  }
});

// NAVBAR HIDE AND DISPLAY ON SCROLL ANIMATION
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;
  let navbar = document.querySelector(".scrolling-navbar");
  if (currentScroll > lastScrollTop) {
    // Scroll down
    navbar.classList.add("hidden");
  } else {
    // Scroll up
    navbar.classList.remove("hidden");
  }
  lastScrollTop = currentScroll;
});

// CAROUSEL MODAL CLICK EVENT

document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll("#categories .carousel-item");

  carousels.forEach(function (carousel) {
    carousel.addEventListener("click", function () {
      const column = carousel.closest(".col");
      if (column) {
        column.removeAttribute("data-aos");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll("#categories .carousel");

  carousels.forEach(function (carousel) {
    carousel.addEventListener("hidden.bs.modal", function (event) {
      const column = carousel.closest(".col");
      const dataAOSValue = column.getAttribute("data-aos-initial"); // Store initial data-aos value

      if (column && dataAOSValue) {
        column.setAttribute("data-aos", dataAOSValue);
      }
    });

    // Store initial data-aos value for each column
    const column = carousel.closest(".col");
    if (column) {
      column.setAttribute("data-aos-initial", column.getAttribute("data-aos"));
    }
  });
});
