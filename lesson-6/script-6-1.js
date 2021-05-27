var container = document.querySelector('.container'); //добавили центральный блок
// -------------------------------
var imgWrappMin = document.querySelector('.img-wrapp-min');// Добавили wrapp контейнер для маленьких картинок 
// -------------------------------
var imgWrappBig = document.querySelector('.img-wrapp-big'); // Добавили wrapp контейнер для больших картинок 
// -------------------------------
var quantityImg = 3; //Количество картинок
for (var i = 0; i<quantityImg; i++) {// Добавление маленьких картинок
   var imgMin = document.createElement('img');
   imgMin.className = 'img-min';
   imgMin.src = 'img/cat-0' + (i + 1) + '.webp';
   imgWrappMin.append(imgMin);
}
for (var i = 0; i<quantityImg; i++) {// Добавление больших картинок
   var imgBig = document.createElement('img');
   imgBig.className = 'img-big';
   imgBig.src = 'img/cat-0' + (i + 1) + '.webp';
   imgWrappBig.append(imgBig);
}
// -------------------------------
var imgMins = document.querySelectorAll('.img-min'); // Коллекция мини-картинок
// -------------------------------
var imgBigs = document.querySelectorAll('.img-big'); // Коллекция больших-картинок
// -------------------------------







// for (var i = 0; i < imgMins.length; i++) { // назначили ссылки мини картинкам
//    imgMins[i].src = 'img/cat-0' + (i + 1) + '.webp';
//    // imgMins[i].onclick = clickImg;
// }







// var imgBig = document.getElementsByClassName('.img-min');
// var imgBigOne = imgBig.getAttribute("src");
// console.log(imgBigOne);

// function clickImg(event) {

//    switch (event.target) {
//       case imgMins[0]:

//          imgWrappBig.append('afterbegin', imgMins[0]).classList.add('img-big');
//          break;
//       case imgMins[1]:
//          imgWrappBig.insertAdjacentElement('afterbegin', imgMins[1]).classList.add('img-big');
//          break;
//       case imgMins[2]:
//          imgWrappBig.insertAdjacentElement('afterbegin', imgMins[2]).classList.add('img-big');
//          break;

//    }
// }

