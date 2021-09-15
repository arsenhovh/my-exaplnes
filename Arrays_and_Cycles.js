/*
1. Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
2. Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
3. Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
4. Преобразовать числовой массив в Boolean
5. Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
6. Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
7. Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу
8. Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10
9. Реализовать цикл, который выводит в консоль простые числа
10.Реализовать цикл, который выводит в консоль нечетные числа
*/

//---1---
const filmArray = ["Zoro", "Devil" ,"Womens"];


for(let i = 0; i <= filmArray.length; i++ ){
  console.log(filmArray[i]);
}

//---2---
const cars = ["Ford " , "Lexus " , "Toyota "]

const str = cars.toString();

const newcar = str.split(",");

newcar


//---3---
const names = ["Arthur","Armen","Arman"];

for(let i = 0; i < names.length; i++ ){
  names[i] = "Hello " + names[i] ;
  console.log(names[i]);
}


//---4---
const numbers = [1,0,-90];
 for(let i = 0; i < numbers.length; i++ ){
  numbers[i]=Boolean(numbers[i]);
  console.log(numbers[i]);
}

//---5--- 
function sort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

sort([5,4,3,6,9,2,1,-33,10,0,-5,9,8,99])


//---6---
function moreThan(arr){
  const newarr = [];
for (let i = 0; i < arr.length; i++) {
  if(arr[i]>3){
    newarr.push(arr[i])
  }
}   
return newarr;
}

moreThan([5,4,3,6,9,2,1,-33,10,0,-5,9,8,99])

//---7---
function findIndex(num, arr){
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == num){
    return i;
  }
   
}
return - 1;
}
let arr6 = [1,2,3,6,5,9,8,6];

findIndex(6, arr6);


//---8---
var numm = 30;
while(numm > 10){

  console.log(numm);
  numm--;
}

//---9---
const arr7 = [1,2,3,6,5,9,8,6]
function numIsSimple (num){
for(let i = 2; i <= Math.sqrt(num); i++ ){
  if (num % i == 0){
return false
  }
}
return true;
}

for(let i = 0; i < arr7.length; i++){
    if(numIsSimple(arr7[i])){
      console.log(arr7[i])
    }
  }


//---10---
 function oddNumsfromArray(arr){
  for (let i = 0; i < arr.length; i++){
      if(arr[i] % 2 !== 0){
        console.log(arr[i])
      }
  } 
 }
