//Task 1 var 1
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sum = (array, i = array.length - 1) =>
  i === 0 ? array[i] : array[i] + sum(array, i - 1);

console.log(sum(array));

// Task 1, var 2
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(array1) {
  i = array1.length - 1;

  if (i === 0) {
    array1[i];
  } else {
    array1[i] + sum(array1, i - 1);
  }

  return sum;
}

console.log(sum(array1));

// Task 2 var1

let deepCount = function (arr) {
  countElement = 0;

  for (const element of arr) {
    if (Array.isArray(element) === false) {
      countElement += 1;
    } else if (element.length === 0) {
      continue;
    } else countElement += deepCount(element) + 1;
  }

  return countElement;
};

console.log(deepCount([])); //0
console.log(deepCount([1, 2, 3])); //3
console.log(deepCount(["x", "y", ["z"]])); //4
console.log(deepCount([1, 2, [3, 4, [5]]])); //7
console.log(deepCount([[[[[]]]]])); //3

//Task 2 var2
let deepCount1 = function (arr1) {
  countElement1 = 0;
  for (const element1 of arr1) {
    Array.isArray(element1) === false
      ? (countElement1 += 1
        ? element1.length !== 0
        : (countElement1 -= 1))
      : (countElement1 += deepCount(element1) + 1);
  }
  return countElement1;
};

console.log(deepCount([])); //0
console.log(deepCount([1, 2, 3])); //3
console.log(deepCount(["x", "y", ["z"]])); //4
console.log(deepCount([1, 2, [3, 4, [5]]])); //7
console.log(deepCount([[[[[]]]]])); //3

//Task 3
const employees = {
  development: {
    backend: [
      { name: "Mike", salary: 2000 },
      { name: "Nikola", salary: 2500 },
    ],
    frontend: [
      { name: "Artem", salary: 3000 },
      { name: "Alex", salary: 2700 },
    ],
  },
  sales: {
    marketing: {
      internet_marketers: [
        { name: "Nina", salary: 1000 },
        { name: "Olena", salary: 1300 },
      ],
      promotion: [
        { name: "Oleg", salary: 1400 },
        { name: "Masha", salary: 1700 },
      ],
    },
    sellers: [
      { name: "Max", salary: 900 },
      { name: "Donald", salary: 700 },
      { name: "Joe", salary: 1100 },
    ],
  },
  designer: [{ name: "Kate", salary: 1800 }],
};

function total() {
  let sum = 0;

  return function sumSallary(obj) {
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key].forEach((employee) => (sum += employee.salary));
      } else {
        sumSallary(obj[key]);
      }
    }
    return sum;
  };
}

console.log(total()(employees));

//Task 4
const arr1 = [2, 15, 7, 3];
const arr2 = [9, 3, 17, 24, 4, 8];
const arr3 = [6, 11, 16, 15, 11];

const numbers = [...arr1, ...arr2, ...arr3];
console.log(numbers);
console.log(Math.max(...numbers));
