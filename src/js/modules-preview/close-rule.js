export function closeRule() {
  const buttonClouse = document.querySelector(".footer__rule");
  buttonClouse.addEventListener("click", function(){
    buttonClouse.classList.toggle("active");
  })
}