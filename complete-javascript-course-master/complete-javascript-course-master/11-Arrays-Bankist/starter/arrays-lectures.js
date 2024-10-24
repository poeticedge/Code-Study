/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));




const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
//easier method to loop the array. Always first parameter is current element, 2nd current index, 3rd current array we are in.
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i + 1}: You despostied ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
//forEach loop / callback function
movements.forEach(function(mov, i, arr) {
  if(mov > 0) {
    console.log(`Movement ${i + 1}: You despostied ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
//map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//set doesnt have keys or values. key and value are the same in this code. `${key}: ${value}` Used _ as a throw away variable. 
const currenciesUnique = new Set(['USD', 'GBO', 'USD', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map) {
  console.log(`${_}: ${value}`);
});

///////////////////////////////////////
// Coding Challenge #1

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log('Dog number ${i+1} is an adult, and is ${dog} years old');
    } else {
      console.log('Dog number ${i+1} is still a puppy');
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//map method with arrow function
const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);

//const movementsUSDfor = [];
//for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);


const deposits = movements.filter(function (mov) {
  return mov > 0;
});

const withdrawls = movements.filter(mov=> mov < 0 );

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

//max value reduce method uses accumulator
const max = movements.reduce((acc, mov) => {
  if (acc > movement) return acc;
  else {
    return mov;
  }
}, movements[0]);
console.log(max);

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function (ages) {
  const humanAges= ages.map(age => age => 2 ? 2 * age: 16 + age * 4); 
  const adults = humanAges.filter(age => age >= 18 )

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length

  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
console.log(avg1, avg2)


//chaining methods
const eurToUsd = 1.1;
const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map(mov => mov * eurToUsd)
.reduce((acc, mov) => acc + mov, 0)
console.log(totalDepositsUSD);

//find method. Retrieve 1 element based on condition
const firstWithdrawl = movements.find(mov => mov < 0);
console.log(movements)
console.log(firstWithdrawl)

//sorting arrays sort properly sorts strings but special syntax is needed for numbers. Sort won't work with a mix of numbers and strings
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//return <0, A, B (keep order)
//return > 0, B, A (reverse order)
// a-b asscending, b-reverse

//movements.sort((a, b) => {
  // if (a > b) return 1;
  // if (a < b) return -1
  // });
  movements.sort((a,b) => a-b);
  console.log(movements);

  //creating arrays/generating arrays
  const x = new Array(7)
  console.log(x);

  x.fill(1); //similar with slice method
  console.log(x);

  //array.from
  const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({ length:7 }, (cur, i) => i +1);

//random dice roll

const roll = Array.from({length: 100} )

//querySelectorAll returns Node list. Similar to array but not a real array. So you cant use map/reduce. convert node list to array Array.from is used for this
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value')
  el => Number(el.textContent.replace('€', ''))
);
});

//calc deposit in bank flat added arrays into arrays. Map creates new array with same length as original
const BankDepositSum = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov  > 0)
.reduce((sum, cur) => sum + cur, 0);


//count how many deposits are $1000 in bank Reduce always starts with accumalator
//const numDeposits1000 = account.flatMap(acc => acc.movements)
//.filter(mov => mov >= 1000).length
const numDeposits1000 = account
.flatMap(acc => acc.movements)
.reduce((count, cur) => (cur => 1000 ? count + 1 : count), 0)//increment can also be written ++count instead of count + 1

//create new object. Advanced reduce method Sum of deposits and withdrawls
const {desposits, withdrawls} = accounts
.flatMap(acc => acc.movements)
.reduce((sums, cur) => {
// use the one below as it is cleaner 
//cur > 0 ? sums.deposits += cur : sums.withdrawls += cur;
sums[cur > 0 ? 'deposit' : 'withdrawls'] +=
cur;
return sums; //return accumulator
}, {desposits: 0, withdrawls: 0});

//convert string to title case
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'or', 'but', 'on', 'in', 'with', 'and'];

  const titleCase = title
  .toLowerCase()
  .split(' ')
  .map(word => 
    exceptions.includes(word) ? word: word[0]
    .toUppercase() + word.slice(1)
  )
    .join('');
  return titleCase;
};
console.log(convertTitleCase)

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array,
 simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in 
the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). 
Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!"
//  "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
// sort it by recommended food portion in an ascending order [1,2,3]
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
*/
