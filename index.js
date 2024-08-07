// Task 1: Write a function that executes JavaScript code passed to it as a string argument
function calculateExpression(expression) {
  if (typeof expression === 'string') {
    return eval(expression);
  } else {
    return `Argument is not a string.`;
  }
}

const tmp = 2;
console.log("Task 1 ====================================");
console.log(
  'calculateExpression("3 + 5 * 2")',
  calculateExpression("3 + 5 * 2")
); // Outputs 13
console.log(calculateExpression(tmp)); //Outputs : Argument is not a string.

// Task 2: Write a function that takes a string and returns a number from that string or an error message.
function getNumberFromString(s) {
  let numberFromString = parseFloat(s);
  if (isNaN(numberFromString)) {
    return "Couldn't extract a number from the provided string";
  } else {
    return numberFromString;
  }
}

console.log("Task 2 ====================================");
console.log(
  'getNumberFromString("100.5 apples")',
  getNumberFromString("100.5 apples")
); // Outputs 100.5
console.log(
  'getNumberFromString("No numbers here")',
  getNumberFromString("No numbers here")
); // Outputs an error message

// Task 3: Write a function that takes a string and returns an integer from that string or an error message.
function getIntegerFromString(s) {
  let intFromString = parseInt(s);
  if (isNaN(intFromString)) {
    return `Couldn't extract an integer from the provided string.`;
  } else {
    return intFromString;
  }
}

console.log("Task 3 ====================================");
console.log(
  'getIntegerFromString("100 apples")',
  getIntegerFromString("100 apples")
); // Outputs 100
console.log(
  'getIntegerFromString("No integers here")',
  getIntegerFromString("No integers here")
); // Outputs an error message

// Task 4: Write a function that checks if a given number is finite.
function isNumberFinite(num) {
  if (isFinite(num) === true) {
    return `The number is finite.`;
  } else {
    return `The number is not finite.`;
  }
}

console.log("Task 4 ====================================");
console.log("isNumberFinite(100)", isNumberFinite(100)); // Outputs "The number is finite."
console.log("isNumberFinite(Infinity)", isNumberFinite(Infinity)); // Outputs "The number is not finite."

// Task 5: Write a function that checks if a given value is NaN.
function isValueNaN(value) {
  if (isNaN(value) === true) {
    return `The value is NaN.`;
  } else {
    return `The value is not NaN.`;
  }
}

console.log("Task 5 ====================================");
console.log("isValueNaN(NaN)", isValueNaN(NaN)); // Outputs "The value is NaN."
console.log("isValueNaN(100)", isValueNaN(100)); // Outputs "The value is not NaN."

// Task 6: Write a function that encodes a URL component.
function encodeURLComponent(urlComponent) {
  return encodeURIComponent(urlComponent);
}

console.log("Task 6 ====================================");
console.log(
  'encodeURLComponent("Hello World!")',
  encodeURLComponent("Hello World!")
); // Outputs "Hello%20World!"

// Task 7: Write a function that encodes a URL.
function encodeURL(url) {
  return encodeURI(url);
}

console.log("Task 7 ====================================");
console.log(
  'encodeURL("https://ex ample.com")',
  encodeURL("https://ex ample.com")
); // Outputs "https://ex%20ample.com"

// Task 8: Write a function that decodes an encoded URL component.
function decodeURLComponent(urlComponent) {
  return decodeURIComponent(urlComponent);
}

console.log("Task 8 ====================================");
console.log(
  'decodeURLComponent("Hello%20World%21")',
  decodeURLComponent("Hello%20World%21")
); // Outputs "Hello World!"

// Task 9: Write a function that decodes an encoded URL.
function decodeURL(url) {
  return decodeURI(url);
}

console.log("Task 9 ====================================");
console.log(
  'decodeURL("https://ex%20ample.com")',
  decodeURL("https://ex%20ample.com")
); // Outputs "https://ex ample.com"
