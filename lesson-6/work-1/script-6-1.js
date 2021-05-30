var container = document.querySelector('.container'); //Добавили центральный блок
// -------------------------------
var imgWrappMin = document.querySelector('.img-wrapp-min');//Добавили wrapp контейнер для маленьких картинок 
// -------------------------------
var imgWrappBig = document.querySelector('.img-wrapp-big'); //Добавили wrapp контейнер для больших картинок 
// -------------------------------
var quantityImg = 5; //Количество мини картинок
// -------------------------------// -------------------------------
// -------------------------------// -------------------------------
var imgMin, imgBig; //Переменные картинки мал и бол
// -------------------------------// -------------------------------
for (var i = 0; i < quantityImg; i++) {//Добавление маленьких картинок
   createImg(imgMin, 'img-min', imgWrappMin, 'cat-min', i);// Поо функции
}
// -------------------------------// -------------------------------
// -------------------------------// -------------------------------
function createImg(img, imgName, imgWrapp, srcImg, i) {// Функция - Создание картинок мал и бол
   img = document.createElement('img');
   img.className = imgName;
   img.setAttribute('data-id', i + 1);
   img.src = 'img/' + srcImg + '-0' + (i + 1) + '.webp';
   imgWrapp.append(img);
   img.onerror = () => {
      var errorImg = document.createElement('img');
      errorImg.className = imgName;
      errorImg.src = 'img/cat-non.png';
      imgWrapp.innerHTML = '';
      imgWrapp.prepend(errorImg);
   }
}
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
function f1(e) {
   imgWrappBig.innerHTML = '';//перезаписываем строчку, чтобы пустой была 
   createImg(imgBig, 'img-big', imgWrappBig, 'cat-big', e.target.dataset.id-1);
   } function onerrorImg(imgBig) {
      imgBig.onerror = () => {
         var errorImg = document.createElement('img');
         errorImg.className = 'img-big';
         errorImg.src = 'img/cat-non.png';
         imgWrappBig.innerHTML = '';
         imgWrappBig.prepend(errorImg);
      }
   }