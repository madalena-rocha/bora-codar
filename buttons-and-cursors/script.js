const buttonPrimary = document.getElementById("primary");
const buttonSecondary = document.getElementById("secondary");
const buttonTertiary = document.getElementById("tertiary");

const primaryLoading = document.getElementById("primary-loading");
const secondaryLoading = document.getElementById("secondary-loading");
const tertiaryLoading = document.getElementById("tertiary-loading");

const primaryMovable = document.getElementById("primary-movable");
const secondaryMovable = document.getElementById("secondary-movable");
const tertiaryMovable = document.getElementById("tertiary-movable");

// Loading

buttonPrimary.addEventListener("click", () => {
  primaryLoading.classList.toggle("hide");
  primaryLoading.classList.toggle("load");
});

buttonSecondary.addEventListener("click", () => {
  secondaryLoading.classList.toggle("hide");
  secondaryLoading.classList.toggle("load");
});

buttonTertiary.addEventListener("click", () => {
  tertiaryLoading.classList.toggle("hide");
  tertiaryLoading.classList.toggle("load");
});
