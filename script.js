const SelfRating = 'Curriculum Vitae\nScore: 130/130\n1. Ссылка на CV засабмичена в rs app +10\n' +
'2. Вёрстка валидная +10\n3. Вёрстка семантическая +20\n' +
'4. В footer есть ссылка на гитхаб автора, год создания приложения, логотип курса со ссылкой на курс +10\n' +
'5. Для оформления СV используются css-стили +10\n' +
'6. При уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону +10\n' +
'7. На странице СV есть фото автора, пропорции изображения не искажены, у изображения есть атрибут alt +10\n' +
'8. Навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a +10\n' +
'9. Выполнены требования к содержанию СV +30\n10. CV выполнено на английском языке +10\n' +
'11. Дополнительный функционал: на ширине экрана 980рх и меньше реализовано адаптивное меню (вне оценки)';

console.log(SelfRating);

const cvBody = document.querySelector('.body');
const burgerButton = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');

function burgerMenu() {
  burgerButton.classList.toggle('open');
  nav.classList.toggle('open');
  navList.classList.toggle('open');
  cvBody.classList.toggle('scroll-lock');
}
burgerButton.addEventListener('click', burgerMenu);

function closeMenu(event) {
  if (event.target.classList.contains('nav-link')) {
      burgerButton.classList.remove('open');
      nav.classList.remove('open');
      navList.classList.remove('open');
      cvBody.classList.remove('scroll-lock');
  }
}
nav.addEventListener('click', closeMenu);