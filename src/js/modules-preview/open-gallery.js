export function openGallery() {
  const buttonGall = document.querySelector(".link-gallery");
  
  buttonGall.addEventListener("click", function(){
    const gall = document.querySelector(".footer__gallery");
    gall.classList.add("active");
  })
}