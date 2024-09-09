function isEvenOrOdd(y) {
    if (y % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}


function isPrime(y) {
    if (y <= 1) return false;
    if (y === 2) return true;
    if (y % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(y); i += 2) {
        if (y % i === 0) return false;
    }

    return true;
}


function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Clean string
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}


const number = 15; 
const text = 'Jino'; 


console.log(`The number ${number} is ${isEvenOrOdd(number)}.`);

if (isPrime(number)) {
    console.log(`The number ${number} is a prime number.`);
} else {
    console.log(`The number ${number} is not a prime number.`);
}

console.log(`The string "${text}" is ${isPalindrome(text) ? 'a palindrome' : 'not a palindrome'}.`);


const choice = 2; 

switch (choice) {
    case 1:
        console.log('You selected option 1.');
        break;
    case 2:
        console.log('You selected option 2.');
        break;
    case 3:
        console.log('You selected option 3.');
        break;
    default:
        console.log('Invalid choice.');
}


for (let i = 1; i <= 5; i++) {
    console.log(`Number: ${i}`);
}