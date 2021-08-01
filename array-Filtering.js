const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

let newArray = numbers.filter(evenNumbers);

console.log (newArray);

function evenNumbers(number) {
  if (number % 2 == 0){
    return true;
  }
}
