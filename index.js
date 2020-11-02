const share = document.querySelector(".share-circle");

const popup = document.querySelector(".popup");

share.onclick = () => {
  popup.classList.toggle("show");
  share.classList.toggle("ontop");
};
