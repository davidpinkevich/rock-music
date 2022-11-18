export function closeGallery() {
  const buttonGall = document.querySelector(".gallery__header-close");
  buttonGall.addEventListener("click", function(){
    const gall = document.querySelector(".footer__gallery");
    gall.classList.remove("active");
  })
}