function sumEvenOdd(numbers) {
    let evenSum = 0;
    let oddSum = 0;
  
    for (let num of numbers) {
      if (num % 2 === 0) {
        evenSum += num;
      } else {
        oddSum += num;
      }
    }
  
    return [evenSum, oddSum];
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  function averageAndMedian(numbers) {
    let average = 0;
    let median = 0;
  
    const sum = numbers.reduce((a, b) => a + b, 0);
    average = sum / numbers.length;
  
    numbers.sort((a, b) => a - b);
    const mid = Math.floor(numbers.length / 2);
    
    if (numbers.length % 2 === 0) {
      median = (numbers[mid - 1] + numbers[mid]) / 2;
    } else {
      median = numbers[mid];
    }
  
    return { average, median };
  }
  
  function countVowels(str) {
    let vowelCount = 0;
    const vowels = 'aeiouAEIOU';
  
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  
  console.log(sumEvenOdd([1, 2, 3, 4, 5])); 
  console.log(fahrenheitToCelsius(32));  
  console.log(celsiusToFahrenheit(0));   
  console.log(reverseString("JavaScript"));  
  console.log(averageAndMedian([10, 20, 30, 40, 50]));  
  console.log(countVowels("JavaScript is fun"));  
  