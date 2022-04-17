
const colors = require("colors/safe");

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) return false;
  }

  return true;
};

console.log ()
let count = 1
const arr = [];
let from = process.argv[2];
let to = process.argv[3];
// (( ((typeof(process.argv[2])) !== 'number') || ( ((typeof(process.argv[3])) !== 'number')))
// console.log (Number((typeof(process.argv[2]))));
from = Number(from);
to = Number(to);
// console.log (from);
// console.log (to);
// console.log (typeof(to));
// console.log (typeof(from));
if ( (Object.is(from, NaN)) || (Object.is(to, NaN)) )  {
  console.log ("Один или несколько аргументов переданых в по не являются числом");
  process.exit(1);
}


// if ( ((from) === 'NaN' ) || ((to) === 'NaN') )  {
//   console.log ("Один или несколько аргументов переданых в по не являются числом");
//   process.exit(1);
// }



for (let number = from; number <= to; number++) {
  let colorer = colors.green;
  if (isPrime(number)) {
    arr[number]=number;
    if (count % 2 === 0) {
      colorer = colors.yellow;
      // count += 1;
      count++; 
      
    } else if (count % 3 === 0) {
      colorer = colors.red;
      count = 1;
    } else {
      // count += 1;
      count++; 
    }

    console.log(colorer(number));
  }
  // console.log(arr);
  // console.log ("число",number);
}
if (arr.length === 0) {
  colorer = colors.red;
  console.log(colorer("Нет простых чисел АХТУНГ!!!"));
}