/******************
 * YOUR CODE HERE *
 ******************/
const isOdd = (n) => {
  return n%2 !== 0
}
const onlyOdds = (a) => {
  return a.filter(isOdd)
}
const isEven = (n) => {
  return n%2 === 0
}
const onlyEvens = (a) => {
  return a.filter(isEven)
}
const isShort = (s) => {
  return s.length < 7
}
const shortNamesOnly = (a) => {
  return a.filter(isShort)
}
const isDName = (s) =>{
  return s.startsWith('D')
}
const dNames = (a) => {
  return a.filter(isDName);
};
const containsLowercase = (s) => {
  return !s.includes(s.toUpperCase())
}
const removeTrolls = (a) => {
  return a.filter(containsLowercase)
}
const isTriStateArea = (s) => {
  return (s.includes('NY')||s.includes('NJ')||s.includes('CT'))
}
const triStateAreaOnly = (a) => {
  return a.filter(isTriStateArea)
}



/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof isOdd === 'undefined') {
  isOdd = undefined;
}

if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof isEven === 'undefined') {
  isEven = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof isShort === 'undefined') {
  isShort = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof isDName === 'undefined') {
  isDName = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}

if (typeof containsLowercase === 'undefined') {
  containsLowercase = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof isTriStateArea === 'undefined') {
  isTriStateArea = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}


module.exports = {
  isOdd,
  onlyOdds,
  isEven,
  onlyEvens,
  isShort,
  shortNamesOnly,
  isDName,
  dNames,
  containsLowercase,
  removeTrolls,
  isTriStateArea,
  triStateAreaOnly,
}
