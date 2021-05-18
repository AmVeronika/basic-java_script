document.write('Задача №1 - 3 урок <br>');
// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

var num = 8;
function pizdec(num) {
// цикл
while (num <= 100) {
   var i = 2;
   // цикл 
   while (i <= num / 2) {
      // условие
      if (num % i !== 0) {
         document.write(num + '<br>');
      }
      i++;
   }
   num++;
}
}




// var num = 17;
// while (num <= 100) {
//    var i = 0;
//    console.log('Вывод num - ' + num);

//    if (i < num / 2) {
//       while (num % i !== 0) {
//          console.log('Вывод i- ' + i);
//          i++;
//       }
//    }
//    ++num;
// }





// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
document.write('Задача №2,3 - 3 урок <br>');

// var arrCart = [
//    {
//       title: 'product1',
//       price: 300,
//       quantity: 1
//    },
//    {
//       title: 'product2',
//       price: 300,
//       quantity: 1
//    },
//    {
//       title: 'product13',
//       price: 600,
//       quantity: 2
//    }
// ];

// var sum = 0;
// function countBasketPrice() {
//    for (var item of arrCart) {
//       sum += item.price * item.quantity;
//    }
//    console.log(`Общая сумма корзины составляет - ${sum}`);
// }
// countBasketPrice();




// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}
document.write('Задача №4 - 3 урок <br>');
// for (let i = 0; i < 10; console.log(i++)) {
// }

// 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

document.write('Задача №5 - 3 урок <br>');

// var pyramid = '';
// var per = 'x';
// var l = 0;

// while (l < 20) {
//    l++;
//    pyramid += per;
//    document.write(l + ' ' + pyramid + '<br>');
// }
