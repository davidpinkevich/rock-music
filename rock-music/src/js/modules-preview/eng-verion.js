export function engVersion() {
  const title = document.querySelector(".header__top-title");
  title.innerHTML = "Be at home, wayfarer...";

  const start = document.querySelector(".main__item-start");
  start.innerHTML = "Master invites you";

  const info = document.querySelector(".items");
  info.innerHTML = "Puppets (gallery)";

  const lang = document.querySelector(".lang");
  lang.innerHTML = "Language: Russian";

  const sound = document.querySelector(".main__item-sound");
  sound.innerHTML = "Voice of the dark valley";

  const git = document.querySelector(".git__footer-text");
  git.innerHTML = "Scary <br> tales...";

  const data = document.querySelector(".footer__date-year");
  data.innerHTML = "2022...<span>Months, years flew by In the <br>merry realm of the dwarf jester!</span>";

  const ruleTitle = document.querySelector(".rule__title");
  ruleTitle.innerHTML = "Hello, wayfarer!";

  const ruleText = document.querySelector(".rule__text");
  ruleText.innerHTML = "Come in, sit down, pour yourself something. The rules are impossibly simple, like death itself or love. You need to listen to the songs and legends of different generations and name who is hiding under the mask, for this you will get <span>rum!</span> Guess the first time, Madame Georgette will pour you 5 glasses! For each miss you get 1 less! Now you know what to expect. (Click on any part of the code to continue)";

  const gallTitle = document.querySelector(".gallery__header-title");
  gallTitle.innerHTML = "Ball of hypocrites";

  const gallBack = document.querySelector(".gallery__header-past");
  gallBack.innerHTML = "Past";

  const gallNext = document.querySelector(".gallery__header-next");
  gallNext.innerHTML = "Next";

  const gallHome = document.querySelector(".gallery__header-close");
  gallHome.innerHTML = "Home";
}