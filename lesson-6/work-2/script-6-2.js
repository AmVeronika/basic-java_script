var productBlock = document.querySelector('.product-wrapp');//Блок с карточками товаров 
var cartBlock = document.querySelector('.cart-wrapp');//Блок с корзиной
var counterButton = document.querySelector('.counter-button')//Кнопка рассчета общей стоимости
var counterSpan = document.querySelector('.counter-span')//Общая стоимость
//------------------------------------------------------------
//------------------------------------------------------------
var arrProduct = [ //Массив с каточками
   product0 = {
      titleProd: 'Куртка Красива',
      imgProd: 0,
      descriptionProd: 'Шиккарная детская вещичка, отлично подойдёт вашему отпрыску! Это лучшее, что можно было сшить на нашем заводе',
      priceProd: 2000,
   },
   product1 = {
      titleProd: 'Куртка Модная',
      imgProd: 1,
      descriptionProd: 'Шиккарная детская вещичка, отлично подойдёт вашему отпрыску! Это лучшее, что можно было сшить на нашем заводе',
      priceProd: 2500,
   },
   product2 = {
      titleProd: 'Куртка Надёжная',
      imgProd: 2,
      descriptionProd: 'Шиккарная детская вещичка, отлично подойдёт вашему отпрыску! Это лучшее, что можно было сшить на нашем заводе',
      priceProd: 2300,
   },
   product3 = {
      titleProd: 'Куртка Прекрасная',
      imgProd: 3,
      descriptionProd: 'Шиккарная детская вещичка, отлично подойдёт вашему отпрыску! Это лучшее, что можно было сшить на нашем заводе',
      priceProd: 2750,
   },
   product4 = {
      titleProd: 'Куртка Своеобразная',
      imgProd: 4,
      descriptionProd: 'Шиккарная детская вещичка, отлично подойдёт вашему отпрыску! Это лучшее, что можно было сшить на нашем заводе',
      priceProd: 100,
   },
   product5 = {
      titleProd: 'Куртка как куртка',
      imgProd: 5,
      descriptionProd: 'Шиккарная детская вещичка, отлично подойдёт вашему отпрыску! Это лучшее, что можно было сшить на нашем заводе',
      priceProd: 1000,
   },
]
//------------------------------------------------------------
//------------------------------------------------------------
var productDescription;
var productButton;
var productCard;
var productTitle;
var productImg;
var productPrice;
var productQuantityCar;
//------------------------------------------------------------
//-------------СОЗДАНИЕ КАРТОЧЕК С ЭЛЕМЕНТАМИ-----------------
//------------------------------------------------------------
for (var i = 0; i < arrProduct.length; i++) {
   createCardCart(productBlock, i, 'product-card');
   createCard(i);
}
function createCardCart(Block, ind, nameCard) {
   productCard = document.createElement('div');//Создание карточки товара
   productCard.className = nameCard;//Присвоили класс карточке товара
   productTitle = document.createElement('h3');//Создание наименование товара
   productTitle.className = 'product-title';//Присвоили класс наименованию товара
   productImg = document.createElement('img');//Создание картинку товара
   productImg.className = 'product-img';//Присвоили класс картинке товара
   productImg.setAttribute('width', 250);//Присвоили атрибут ширины картинке
   productImg.src = 'img/Gnom-0' + ind + '.webp';//Добавили ссылку
   productPrice = document.createElement('p');//Создание цены товара
   productPrice.className = 'product-price';//Присвоили класс цене картинке 
   //----------------ПРИСВАИВАНИЕ ЗНАЧЕНИЙ КАРТОЧКАМ----------
   productTitle.innerHTML = arrProduct[ind].titleProd;
   productImg.innerHTML = arrProduct[ind].imgProd;
   productPrice.innerText = arrProduct[ind].priceProd + ' рублей';
   //----------------ДОБАВЛЕНИЕ КАРТОЧКЕК В РАЗМЕТКУ----------
   Block.append(productCard);
   productCard.append(productTitle);
   productCard.append(productImg);
   productCard.append(productPrice);
};
function createCard(ind) {
   productDescription = document.createElement('p');//Создание описание товара
   productDescription.className = 'product-description';//Присвоили класс описанию картинке 
   productButton = document.createElement('button');//Создание кнопки 'купить'
   productButton.className = 'product-button';//Присвоили класс кнопке 
   productButton.setAttribute('data-id', ind);//Присвоили дата-id кнопке 
   productButton.setAttribute('data-value', 0);
   //----------------ПРИСВАИВАНИЕ ЗНАЧЕНИЙ КАРindТОЧКАМ----------
   productDescription.innerText = arrProduct[ind].descriptionProd;
   productButton.innerText = 'Купить';
   //----------------ДОБАВЛЕНИЕ КАРТОЧКЕК В РАЗМЕТКУ----------
   productCard.append(productDescription);
   productCard.append(productButton);
};
function createCartInput(ind) {
   productQuantityCar = document.createElement('input');//Создание input  товара
   productQuantityCar.className = 'product-quantity-car';//Присвоили класс картинке товара
   productQuantityCar.setAttribute('type', 'number');//Присвоили атрибуты input 
   productQuantityCar.setAttribute('value', 1);//Присвоили атрибуты input 
   productQuantityCar.setAttribute('data-id', ind);//Присвоили атрибуты input 
   productQuantityCar.setAttribute('min', 1);//Присвоили атрибуты input 
   productQuantityCar.setAttribute('max', 10);//Присвоили атрибуты input 
   productPrice.classList.add('card-product-price');
   productPrice.id = ind;//Присвоили атрибут id ценам
   //----------------ДОБАВЛЕНИЕ КАРТОЧКЕК В РАЗМЕТКУ----------
   productCard.append(productQuantityCar);
}
//------------------------------------------------------------
productButtons = document.querySelectorAll('.product-button'); //Коллекция кнопок
//------------------------------------------------------------
//-------------ПРИ НАЖАТИИ НА КНОПКУ КУПИТЬ-------------------
//------------------------------------------------------------
var productQuantityCars;
for (var j = 0; j < productButtons.length; j++) {//Добавляется карточка в корзину
   productButtons[j].onclick = function cleekProductButtons(e) {
      if (e.target.dataset.value == 0) {//Если 1 раз нажали добавить
         createCardCart(cartBlock, e.target.dataset.id, 'product-cart');//Создание элементов в карточке
         createCartInput(e.target.dataset.id);//Создание элементов в карточке
         e.target.dataset.value++;//Клик прибавляется
         //------------------------------------------------------------
         productQuantityCars = document.getElementsByClassName('product-quantity-car'); //Коллекция значений input'ов
         for (var n = 0; n < productQuantityCars.length; n++) { //Счётчик количества товаров в input'е
            productQuantityCars[n].oninput = (u) => {//При клике на input созданной карточки
               // console.log(u.target.value);
               var productPrices = document.getElementById(u.target.dataset.id);//Создание переменной с ценой карточки, которая в корзине
               var cartCardPrice = arrProduct[u.target.dataset.id].priceProd * u.target.value;//Умнеожение цены на кол-во товаров
               productPrices.innerText = cartCardPrice + ' рублей';//Замена стоимости в параграфе
            }
         }
      } else {//Иначе - не выполнять добавление
         // e.target.dataset.value++;//На будущее, считать value у input'а
         alert('Этот товар уже находится в корзине ');
      }
   }
}
//------------------------------------------------------------
//-------------ПРИ НАЖАТИИ НА КНОПКУ РАССЧИТАТЬ СТОИМОСТЬ-----
//------------------------------------------------------------
var cardProductPrice = document.getElementsByClassName('card-product-price');//Коллекция конечной стоимости каждого товара в карзине
var sum = 0;
var sumNull = 0;
counterButton.onclick = () => {
   for (var p = 0; p < productQuantityCars.length; p++) {
      sum = parseFloat(cardProductPrice[p].textContent);
      sumNull += sum;
      sum = 0;
   } 
   counterSpan.innerText= sumNull;
   sumNull = 0;
}
