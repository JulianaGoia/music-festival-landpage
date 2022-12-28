window.onload = () => {
  const mobMenuIcon = document.getElementById("mob-menu-btn");
  mobMenuIcon.addEventListener("click", () => {
    if (mobMenuIcon.classList.contains("open")) {
      mobMenuIcon.classList.remove("open");
    } else {
      mobMenuIcon.classList.add("open");
    }
  });

  const ticketMenuItem = document.getElementById("ticket-menu-item");
  ticketMenuItem.addEventListener("click", () => {
    if (ticketMenuItem.classList.contains("open")) {
      ticketMenuItem.classList.remove("open");
    } else {
      ticketMenuItem.classList.add("open");
    }
  });

  const previousBtn = document.getElementById("previous");
  const nextBtn = document.getElementById("next");
  const carousel = document.getElementById("carousel");

  nextBtn.addEventListener("click", () => {
    const itemWidth = carousel.getElementsByTagName("div")[0].clientWidth;
    carousel.scrollLeft = carousel.scrollLeft + itemWidth;
  });

  previousBtn.addEventListener("click", () => {
    const itemWidth = carousel.getElementsByTagName("div")[0].clientWidth;
    carousel.scrollLeft = carousel.scrollLeft - itemWidth;
  });
};
