/*
1. Создать объект car, добавить к нему свойство color со значением 'черный'
2. Изменить свойство color объекта car на 'зеленый'
3. В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
4. На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок
5. В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)
6. Напишите функцию вычисления типа аргумента и вывод типа в консоль
7. Напишите функцию, которая определяет является ли число простым или нет
*/

//---1, 2, 3---
const car = {
  color: "black",
  power:  function() { 
    console.log("200 HP");
}
}
car.color = "green";

//---4---
function fruitSum(apple , peach){
  return apple + peach;
}

//---5---
const nameArterminal = ["Arsen","Hayk" ,"Narek"];

function terminal(name){
if(nameArterminal.includes(name)){
  return "hello "+ name ;
}
else
return "there are no this name in terminal";

};

//---6---
function findType(arg){
return console.log(typeof arg);
}

//---7---
function numIsSimple (num){
for(let i = 2; i <= Math.sqrt(num); i++ ){
  if (num % i == 0){
return false
  }
}
return true;
}
numIsSimple(2)
