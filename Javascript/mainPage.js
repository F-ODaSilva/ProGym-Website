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

// NAVBAR DROPDOWN FUNCTION FOR ALL DROPDOWN-ITEMS 
$(document).ready(function () {
  // Função para definir a classe ativa para os itens do dropdown e mostrar o div correspondente
  function setActiveDropdownItem() {
    let currentHash = window.location.hash; // Obtém o hash atual da URL
    $('.dropdown-item').removeClass('active'); // Remove a classe ativa de todos os itens do dropdown
    $('.dropdown-item[href="' + currentHash + '"]').addClass('active'); // Adiciona a classe ativa ao item do dropdown correspondente

    // Esconde todos os divs
    $('[id^="div"]').hide();
    
    if (currentHash !== '') {
      $(currentHash).show(); // Mostra o div direcionado pelo hash, se o hash não estiver vazio
    }
  }

  // Manipula o evento de clique nos itens do dropdown
  $('.dropdown-item').on('click', function () {
    let targetDivId = $(this).attr('href');

    // Remove a classe ativa de todos os itens do dropdown
    $('.dropdown-item').removeClass('active');
    $(this).addClass('active'); // Adiciona a classe ativa ao item do dropdown clicado

    // Esconde todos os divs, exceto o div associado ao item clicado
    $('[id^="div"]').each(function () {
      if ('#' + $(this).attr('id') !== targetDivId) {
        $(this).hide();
      }
    });
    $(targetDivId).show(); // Mostra o div associado ao item clicado
  });

  // Define a classe ativa inicialmente no carregamento da página
  setActiveDropdownItem();

  // Escuta os eventos de mudança de hash para atualizar a classe ativa e mostrar/esconder divs quando o hash da URL muda
  $(window).on('hashchange', function () {
    setActiveDropdownItem();
  });
});


$(document).ready(function () {
  // Function to hide all divs if the current dropdown-item's div is already visible
  function hideAllDivsIfShown(targetDivId) {
    if ($(targetDivId).is(':visible')) {
      $('[id^="div"]').hide(); // Hide all divs
    }
  }

  // Function to define the active class for dropdown items and show the corresponding div
  function setActiveDropdownItem() {
    let currentHash = window.location.hash;
    $('.dropdown-item').removeClass('active');
    $('.dropdown-item[href="' + currentHash + '"]').addClass('active');

    $('[id^="div"]').hide();
    if (currentHash !== '') {
      $(currentHash).show();
    }
  }

  // Handle click event for dropdown items
  $('.dropdown-item').on('click', function () {
    let targetDivId = $(this).attr('href');

    $('.dropdown-item').removeClass('active');
    $(this).addClass('active');

    hideAllDivsIfShown(targetDivId); // Hide all divs if the current dropdown-item's div is already visible

    $(targetDivId).show();
  });

  // Set active dropdown initially on page load
  setActiveDropdownItem();

  // Listen for hashchange events to update active dropdown when URL hash changes
  $(window).on('hashchange', function () {
    setActiveDropdownItem();
  });
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
