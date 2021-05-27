var container = document.querySelector('.container'); //добавили центральный блок
// -------------------------------
var imgWrappMin = document.querySelector('.img-wrapp-min');// Добавили wrapp контейнер для маленьких картинок 
// -------------------------------
var imgWrappBig = document.querySelector('.img-wrapp-big'); // Добавили wrapp контейнер для больших картинок 
// -------------------------------
var quantityImgMin = 3; //Количество мини картинок
var quantityImgBig = 3; //Количество мини картинок
for (var i = 0; i < quantityImgMin; i++) {// Добавление маленьких картинок
   var imgMin = document.createElement('img');
   imgMin.className = 'img-min';
   imgMin.src = 'img/cat-0' + (i + 1) + '.webp';
   imgWrappMin.append(imgMin);
}
for (var i = 0; i < quantityImgBig; i++) {// Добавление больших картинок
   var imgBig = document.createElement('img');
   imgBig.className = 'img-big opacity-img';
   imgBig.src = 'img/cat-0' + (i + 1) + '.webp';
   imgWrappBig.append(imgBig);
}
// -------------------------------
var imgMins = document.querySelectorAll('.img-min'); // Коллекция мини-картинок
// -------------------------------
var imgBigs = document.querySelectorAll('.img-big'); // Коллекция больших-картинок
// -------------------------------
imgBigs[2].src = 'img/';// Убрали путь у третьей большой картинки
//----При нажатии на мини отображать большую-----
// ----------------------------------------------

imgMins[0].addEventListener("click", f1);
imgMins[1].addEventListener("click", f2);
imgMins[2].addEventListener("click", f3);

function f1() {
   imgBigs[0].classList.toggle('opacity-img');
   imgBigs[1].classList.add('opacity-img');
   imgBigs[2].classList.add('opacity-img');
}
function f2() {
   imgBigs[1].classList.toggle('opacity-img');
   imgBigs[0].classList.add('opacity-img');
   imgBigs[2].classList.add('opacity-img');
}
function f3() {
  if (imgBigs[2].onerror = true) {// Условие, если src адреса нет, выдать ошибку
      var errImgBig = document.createElement('img');
      errImgBig.src = 'img/cat-non.png';// И добавить картинку
      imgWrappBig.append(errImgBig);
      imgBigs[0].classList.add('opacity-img');
      imgBigs[1].classList.add('opacity-img');
   } else {
      imgBigs[2].classList.toggle('opacity-img');
      imgBigs[0].classList.add('opacity-img');
      imgBigs[1].classList.add('opacity-img');
   }
}

// -------------------------------
console.log(imgBigs);

