subscribeButton = document.querySelector(".subscribeButton");
success = document.querySelector(".success");
singUpMenu = document.querySelector(".singUpMenu");
mobileimg = document.querySelector(".mobileimg");

subscribeButton.addEventListener("click", () => {
  singUpMenu.classList.toggle("none");
  success.classList.toggle("toggle");
  mobileimg.classList.toggle("none");
});
success.addEventListener("click", () => {
  singUpMenu.classList.toggle("none");
  success.classList.toggle("toggle");
  mobileimg.classList.toggle("none");
});
