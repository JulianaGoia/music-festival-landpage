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
};
