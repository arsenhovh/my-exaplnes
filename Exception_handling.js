/*
1. В try catch конструкцию завернуть код: console.log(a), let a = 3. И вывести ошибку –  ‘let перед использованием нужно объявить’.
2. При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'
*/

//---1---
try{
console.log(a);
let a = 3;

}catch(e){
 console.log(e.name, e.message)
}

//---2---
try{

  let d = 1 / 0;

}catch(e){

  console.log(e.name , "announcer can not be 0") 
}


