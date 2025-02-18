export function ruVersion() {
  const title = document.querySelector(".header__top-title");
  title.innerHTML = "Будь как дома, путник...";

  const start = document.querySelector(".main__item-start");
  start.innerHTML = "Мастер приглашает в гости";

  const info = document.querySelector(".items");
  info.innerHTML = "Марионетки (галерея)";

  const lang = document.querySelector(".lang");
  lang.innerHTML = "Язык: заморский";

  const sound = document.querySelector(".main__item-sound");
  sound.innerHTML = "Голос тёмной долины";

  const data = document.querySelector(".footer__date-year");
  data.innerHTML = "2022...<span>Летели месяцы, года <br>В веселом царстве карлика-шута!</span>";

  const ruleTitle = document.querySelector(".rule__title");
  ruleTitle.innerHTML = "Здравствуй, путник!";

  const ruleText = document.querySelector(".rule__text");
  ruleText.innerHTML = "Заходи, садись, налей себе чего-нибудь. Правила до невозможного просты, как сама смерть или любовь. Тебе нужно слушать песни и предания разных поколений и назвать, кто же скрывается под маской, за это ты получишь <span>ром!</span> Угадаешь с первого раза, мадам Жоржет нальёт тебе 5 рюмок! За каждый промах получишь на 1 меньше! Теперь ты знаешь, чeго ждать. (Нажми на любую часть коды, чтобы продолжить)";

  const gallTitle = document.querySelector(".gallery__header-title");
  gallTitle.innerHTML = "Бал лицемеров";

  const gallBack = document.querySelector(".gallery__header-past");
  gallBack.innerHTML = "Назад";

  const gallNext = document.querySelector(".gallery__header-next");
  gallNext.innerHTML = "Вперёд";

  const gallHome = document.querySelector(".gallery__header-close");
  gallHome.innerHTML = "Домой";
}