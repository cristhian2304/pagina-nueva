// Código del carrusel
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".slide-container");
  const firstImg = carousel.querySelectorAll("img")[0];
  const arrowIcons = document.querySelectorAll(".gallery-slider span");
  let isDragStart = false,
    isDragging = false,
    prevPageX,
    prevScrollLeft;
  const firstImgWidth = firstImg.clientWidth + 7;

  arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
  });

  const dragStart = (e) => {
    isDragStart = true;
    isDragging = false;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragStart) return;
    isDragging = true;
    e.preventDefault();
    carousel.classList.add("dragging");
    const positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
  };

  const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if (!isDragging) return;
    isDragging = false;
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("touchstart", dragStart);
  carousel.addEventListener("mousemove", dragging);
  carousel.addEventListener("touchmove", dragging);
  carousel.addEventListener("mouseup", dragStop);
  carousel.addEventListener("mouseleave", dragStop);
  carousel.addEventListener("touchend", dragStop);
  carousel.addEventListener("dragstart", (e) => e.preventDefault());
});

document.addEventListener("DOMContentLoaded", function () {
  var isMobile =
    /iPhone|Android|iPad|iPod|Windows Phone|webOS|BlackBerry|Opera Mini|IEMobile|Mobile/i.test(
      navigator.userAgent
    );
  var currentURL = window.location.href;
  var whatsappLinks = document.querySelectorAll("a#lead_whatsapp");
  whatsappLinks.forEach(function (link) {
    var message =
      "Hola! Me gustaría recibir más asesoría sobre esta información: " +
      encodeURIComponent(currentURL);
    var mobileLink = "https://wa.me/573506329106?text=" + message;
    var desktopLink =
      "https://web.whatsapp.com/send?phone=573506329106&text=" + message;
    if (isMobile) {
      link.setAttribute("href", mobileLink);
    } else {
      link.setAttribute("href", desktopLink);
    }
  });
});
