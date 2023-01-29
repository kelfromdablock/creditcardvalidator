// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validCred = arr => {
  const reversed = arr.reverse();
  //reversed the numbers
  for (let i = 1; i < reversed.length; i+=2)    
    {reversed[i] *= 2; 
        //looped through every other number, minus first (check) #. Luhn algorithm 
    if (reversed[i] > 9) {
      reversed[i] -= 9;
      //if greater than 9, subtract 9
    }} 
const summedNums = reversed.reduce(   (accumulator, currentValue) => {return accumulator + currentValue});
     //added all numbers together
  let result = (summedNums%10 === 0 ? true : false);
    //if added numbers === 0, return true
return result; } 

const findInvalidCards = invalid => {
  let notValid = [];
  for (let j = 0; j < invalid.length; j++){  if (validCred(invalid[j]) === false) {notValid.push(invalid[j]);}}
    //looped through all credit card numbers to see if they fit the above function. If falsy, added to NotValid array
  return notValid;
}

const idInvalidCardCompanies = invalidCards => {
  let cardCompany = [];
  for (let k=0; k < invalidCards.length; k++) {
    //loops through all invalid credit cards, but only 0
  if (k === 3) {cardCompany.push('Amex');
  } else if (k === 4) {cardCompany.push('Visa');
  } else if (k === 5) {cardCompany.push('Mastercard');
  } else if (k === 6) {cardCompany.push('Discover');
  } else {cardCompany.push('Company not found');}}
  const companies = Array.from(new Set(cardCompany));
    //new Set was used to not duplicate the company names
  return companies.join(', ');}
   //.join(', ') used to join the companies into a string
  


//console.log(validCred(mystery5));
//console.log(validCred(mystery4));  

//console.log(findInvalidCards(batch));

//console.log(idInvalidCardCompanies(batch));

console.log(`Credit card companies supplying invalid cards: ${idInvalidCardCompanies(batch)}`);