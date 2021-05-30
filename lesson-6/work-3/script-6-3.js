var container = document.querySelector('.container'); //Добавили центральный блок
// -------------------------------
var imgWrappMin = document.querySelector('.img-wrapp-min');//Добавили wrapp контейнер для маленьких картинок 
// -------------------------------
var imgWrappBig = document.querySelector('.img-wrapp-big'); //Добавили wrapp контейнер для больших картинок 
// -------------------------------
var quantityImg = 5; //Количество мини картинок
var quantityImgBut = 0;// Для преключения картинок в большом блоке
// -------------------------------// -------------------------------
// -------------------------------// -------------------------------
var imgMin, imgBig; //Переменные картинки мал и бол
// -------------------------------// -------------------------------
for (var i = 0; i < quantityImg; i++) {//Добавление маленьких картинок
   createImg(imgMin, 'img-min', imgWrappMin, 'cat-min', i);// По функции
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
   createImg(imgBig, 'img-big', imgWrappBig, 'cat-big', e.target.dataset.id - 1);
   quantityImgBut = e.target.dataset.id-1;
} 
function onerrorImg(imgBig) {
   imgBig.onerror = () => {
      var errorImg = document.createElement('img');
      errorImg.className = 'img-big';
      errorImg.src = 'img/cat-non.png';
      imgWrappBig.innerHTML = '';
      imgWrappBig.prepend(errorImg);
   }
}
// -------------------------------// -------------------------------
// -------------------------------// -------------------------------
var buttonsTmg = document.querySelectorAll('.button');//Создали коллекцию кнопок
// -------------------------------// -------------------------------
// -------------------------------// -------------------------------
console.log();
createImg(imgBig, 'img-big', imgWrappBig, 'cat-big', 0);//Запускаем больую картинку в большом блоке
// -------------------------------// -------------------------------
// -------------------------------// -------------------------------
for (var i = 0; i < 2; i++) {
   buttonsTmg[i].addEventListener('click', switchImgBig);//Перебираем кнопки для функции
}
// -------------------------------// -------------------------------
// -------------------------------// -------------------------------
function switchImgBig(e) {//При нажатии кнопок
   switch (e.target.dataset.but) {
      case '1'://Если левая нажата
         console.log('ну и? левая');
         imgWrappBig.innerHTML = '';
         quantityImgBut--;
         switch (quantityImgBut) {
            case -1:
               quantityImgBut = quantityImg - 1;
               createImg(imgBig, 'img-big', imgWrappBig, 'cat-big', quantityImgBut);
               break;
            default: createImg(imgBig, 'img-big', imgWrappBig, 'cat-big', quantityImgBut);
         }
         break;
      case '2'://Если правая нажата
         console.log('ну и? правая');
         imgWrappBig.innerHTML = '';
         quantityImgBut++;
         switch (quantityImgBut) {
            case 5:
               quantityImgBut = 0;
               createImg(imgBig, 'img-big', imgWrappBig, 'cat-big', quantityImgBut);
               break;
            default: createImg(imgBig, 'img-big', imgWrappBig, 'cat-big', quantityImgBut);
         }
   }
}
