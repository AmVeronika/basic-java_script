var container = document.querySelector('.container'); //добавили центральный блок
// -------------------------------
var imgWrappMin = document.querySelector('.img-wrapp-min');// Добавили wrapp контейнер для маленьких картинок 
// -------------------------------
var imgWrappBig = document.querySelector('.img-wrapp-big'); // Добавили wrapp контейнер для больших картинок 
// -------------------------------
var quantityImg = 3; //Количество мини картинок

// -------------------------------// -------------------------------
// -------------------------------// -------------------------------
for (var i = 0; i < quantityImg; i++) {// Добавление маленьких картинок
   var imgMin = document.createElement('img');
   imgMin.className = 'img-min';
   imgMin.setAttribute('data-id', i+1)
   imgMin.src = 'img/cat-min-0' + (i + 1) + '.webp';
   imgWrappMin.append(imgMin);
}
// for (var i = 0; i < quantityImg; i++) {// Добавление больших картинок
//    var imgBig = document.createElement('img');
//    imgBig.className = 'img-big opacity-img';
//    imgBig.src = 'img/cat-big-0' + (i + 1) + '.webp';
//    imgWrappBig.append(imgBig);
// }

// -------------------------------// -------------------------------
// -------------------------------// -------------------------------
var imgMins = document.querySelectorAll('.img-min'); // Коллекция мини-картинок
// -------------------------------
var imgBigs = document.querySelectorAll('.img-big'); // Коллекция больших-картинок
// -------------------------------// -------------------------------
// -------------------------------// -------------------------------

for (var i = 0; i < quantityImg; i++) {
   imgMins[i].addEventListener('click', f1);//Отработчик при клике
}
// imgMins[0].addEventListener("click", f1);//Отработчик при клике
// imgMins[1].addEventListener("click", f2);//Отработчик при клике
// imgMins[2].addEventListener("click", f3);//Отработчик при клике

function f1(e) {
   imgWrappBig.innerHTML = '';// 
   var imgBig = document.createElement('img');
   imgBig.className = 'img-big';
   imgBig.src = 'img/cat-big-0' + e.target.dataset.id + '.webp';
   imgWrappBig.prepend(imgBig);
   console.log(e.target);
   console.log(imgBig);
}
// function f2() {
//    imgBigs[1].classList.toggle('opacity-img');
//    imgBigs[0].classList.add('opacity-img');
//    imgBigs[2].classList.add('opacity-img');
// }
// function f3() {
//   imgBigs[2].classList.toggle('opacity-img');
//    imgBigs[0].classList.add('opacity-img');
//    imgBigs[1].classList.add('opacity-img');
// }
// console.log(imgBigs[2].onerror);
// -------------------------------// -------------------------------
// -------------------------------// -------------------------------

