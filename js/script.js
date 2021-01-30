// VARIABLES
const mobileMenuEl = document.querySelector(".mobile-menu");
const footerEl = document.querySelector("footer");
const closeBtn = document.querySelector(".close");
const mobileMenuArrowEl = document.querySelector(".mobile-menu-arrow");
const container = document.querySelector(".container");
const paragraph = document.querySelector(".paragraph");
// FUNCTIONS
const removeVisibility = () => {
  mobileMenuEl.classList.remove("visible");
};

const toggleVisible = () => {
  mobileMenuEl.classList.toggle("visible");
  if (mobileMenuEl.classList.contains("visible")) {
    mobileMenuArrowEl.style.opacity = 0;
    footerEl.style.opacity = 0;
  } else {
    mobileMenuArrowEl.style.opacity = 1;
    footerEl.style.opacity = 1;
  }
  //   if (
  //     document.body.style.maxWidth < "600px" &&
  //     mobileMenuEl.classList.contains("visible")
  //   ) {
  //     paragraph.style.opacity = "0";
  //   } else {
  //     paragraph.style.opacity = "1";
  //   }
};

// EVENT LISTENERS

mobileMenuArrowEl.addEventListener("click", toggleVisible);
closeBtn.addEventListener("click", toggleVisible);
