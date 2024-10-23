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