/* ============================================================
   LESSON 6 — LOOPS: EXERCISES + TEST CASES
   ------------------------------------------------------------
   How to use:
   - Read the exercise, then write your loop in the blank space
     under it (where you see  // your code here).
   - Use console.log(...) to print your answer.
   - Each exercise has 3 TEST CASES: an INPUT -> the EXACT output
     you should get. Change the starter variable to each test
     value, run the file (node lesson-6-loops-tests.js), and
     compare your output to the expected output.
   - All 3 match = exercise correct.

   Rules: NO arrays. NO functions. Only variables, data types,
   operators (% && || !), if, strings, String()/Number()/isNaN,
   and Math.floor(x).

   NOTE: every exercise uses a DIFFERENT variable name, so all
   your answers can live in this one file with no clashes.

   The two shapes:
     for (let i = 0; i < 5; i++) { ... }       // known count
     let n = 5; while (n > 0) { ...; n--; }     // until false
   ============================================================ */

/* ============================================================
   PART A — FOR LOOPS
   ============================================================ */

// ----- 1. Count up -----
// Log the numbers 1 through `maxCount`, one per line, using a for loop.
let maxCount = 10;
// your code here
// TEST 1:  maxCount = 10  ->  1 2 3 4 5 6 7 8 9 10
for (let i = 1; i <= maxCount; i++) {
  console.log(i);
}
// TEST 2:  maxCount = 3   ->  1 2 3

// TEST 3:  maxCount = 1   ->  1

// ----- 2. Count down -----
// Log `startNum` down to 0, then log "Liftoff!" after the loop ends.
let startNum = 10;
// your code here

// TEST 1:  startNum = 10  ->  10 9 8 7 6 5 4 3 2 1 0  then  Liftoff!
for (i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Blastoff!");
// TEST 2:  startNum = 3   ->  3 2 1 0  then  Liftoff!

// TEST 3:  startNum = 0   ->  0  then  Liftoff!

// ----- 3. Even numbers only -----
// Log every even number from 2 up to `evenMax`. (Step i += 2, or if (i % 2 === 0).)
let evenMax = 20;
// your code here

// TEST 1:  evenMax = 20  ->  2 4 6 8 10 12 14 16 18 20
for (i = 0; i <= evenMax; i += 2) {
  console.log(i);
}
// TEST 2:  evenMax = 10  ->  2 4 6 8 10
// TEST 3:  evenMax = 1   ->  (nothing printed)

// ----- 4. Sum 1 to max -----
// sumTotal = 0 before the loop. Add each number 1..`sumMax` to it. Log sumTotal.
let sumMax = 100;
// your code here

// TEST 1:  sumMax = 100  ->  5050
sumTotal = 0;
for (i = 1; i <= sumMax; i++) {
  sumTotal += i;
}
console.log(sumTotal);
// TEST 2:  sumMax = 10   ->  55
// TEST 3:  sumMax = 1    ->  1

// ----- 5. Times table -----
// Log the `tableN` times table from "tableN x 1" to "tableN x 10", like "7 x 3 = 21".
let tableN = 7;
// your code here

// TEST 1:  tableN = 7  ->  7 x 1 = 7  ...  7 x 10 = 70
for (i = 1; i <= 10; i++) {
  console.log(tableN + " x " + i + " = " + tableN * i);
}

// TEST 2:  tableN = 2  ->  2 x 1 = 2  ...  2 x 10 = 20
// TEST 3:  tableN = 1  ->  1 x 1 = 1  ...  1 x 10 = 10

// ----- 6. Factorial -----
// Multiply 1*2*...*`factN` with an accumulator starting at 1. Log the result.
let factN = 5;
let result = 1;
// your code here

// TEST 1:  factN = 5  ->  120
for (i = 1; i <= factN; i++) {
  result *= i;
  console.log(result);
}
// TEST 2:  factN = 3  ->  6
// TEST 3:  factN = 1  ->  1

// ----- 7. Count multiples -----
// Count how many numbers from 1 to `multMax` are divisible by 3 (i % 3 === 0). Log the count.
let multMax = 50;
// your code here

// TEST 1:  multMax = 50  ->  16
let counter = 0;
for (i = 1; i <= multMax; i++) {
  if (i % 3 === 0) {
    counter++;
  }
}
console.log(counter);
// TEST 2:  multMax = 10  ->  3
// TEST 3:  multMax = 2   ->  0

// ----- 8. FizzBuzz (lite) -----
// Loop 1 to `fizzMax`. Multiple of 3 -> "Fizz", of 5 -> "Buzz", both -> "FizzBuzz", else the number.
let fizzMax = 3;
// your code here
for (i = 1; i <= fizzMax; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
// TEST 1:  fizzMax = 5   ->  1 2 Fizz 4 Buzz
// TEST 2:  fizzMax = 15  ->  1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz
// TEST 3:  fizzMax = 3   ->  1 2 Fizz

/* ============================================================
   PART B — WHILE LOOPS
   ============================================================ */

// ----- 9. Halve it -----
// While halveN > 1, log halveN then halve it: halveN = Math.floor(halveN / 2).
let halveN = 100;
// your code here
while (halveN > 1) {
  halveN = Math.floor(halveN / 2);
  console.log(halveN);
}
// TEST 1:  halveN = 100  ->  50 25 12 6 3 1
// TEST 2:  halveN = 16   ->  8 4 2 1
// TEST 3:  halveN = 1    ->  (nothing printed)

// ----- 10. Count the digits -----
// Using digitN = Math.floor(digitN / 10) in a while loop, count the digits. Log the count. (Pure math.)
let digitN = 7384;
let count = 0;
// your code here

while (digitN > 0) {
  digitN = Math.floor(digitN / 10);
  count++;
}
console.log(count);
// TEST 1:  digitN = 7384  ->  4
// TEST 2:  digitN = 50    ->  2
// TEST 3:  digitN = 9     ->  1

// ----- 11. Sum of digits -----
// Add last digit (sumDigitN % 10) to a total, then sumDigitN = Math.floor(sumDigitN / 10). While > 0. Log total.
let sumDigitN = 1234;
// your code here

// TEST 1:  sumDigitN = 1234  ->  10
// TEST 2:  sumDigitN = 999   ->  27
// TEST 3:  sumDigitN = 5     ->  5

// ----- 12. Guess limiter -----
// While guessNum !== secretNum, log "Trying " + guessNum, then guessNum++.
// After the loop log "Found it: " + secretNum.
let secretNum = 4;
let guessNum = 1;
// your code here

// TEST 1:  secretNum = 4, guessNum = 1  ->  Trying 1 / Trying 2 / Trying 3, then  Found it: 4
// TEST 2:  secretNum = 2, guessNum = 1  ->  Trying 1, then  Found it: 2
// TEST 3:  secretNum = 1, guessNum = 1  ->  (no Trying), then  Found it: 1

/* ============================================================
   PART C — LOOPING OVER STRINGS
   ============================================================ */

// ----- 13. Spell it out -----
// Loop with spellWord[i] and log one letter per line.
let spellWord = "hello";
// your code here

// TEST 1:  spellWord = "hello"  ->  h e l l o
// TEST 2:  spellWord = "hi"     ->  h i
// TEST 3:  spellWord = "a"      ->  a

// ----- 14. Count a letter -----
// Count how many times "a" appears in letterWord (if letterWord[i] === "a"). Log the count.
let letterWord = "banana";
// your code here

// TEST 1:  letterWord = "banana"  ->  3
// TEST 2:  letterWord = "aaa"     ->  3
// TEST 3:  letterWord = "dog"     ->  0

// ----- 15. Count the vowels -----
// For each char, if "aeiou".includes(vowelText[i]) add to a counter. Log the count.
let vowelText = "javascript";
// your code here

// TEST 1:  vowelText = "javascript"  ->  3
// TEST 2:  vowelText = "aeiou"       ->  5
// TEST 3:  vowelText = "xyz"         ->  0

// ----- 16. Reverse a string -----
// reversedText = "". Loop and build backwards: reversedText = reverseWord[i] + reversedText. Log it.
let reverseWord = "code";
// your code here

// TEST 1:  reverseWord = "code"  ->  edoc
// TEST 2:  reverseWord = "abc"   ->  cba
// TEST 3:  reverseWord = "x"     ->  x

// ----- 17. Count the words -----
// wordCount = 1. Each space (wordSentence[i] === " ") -> wordCount++. Log the count.
let wordSentence = "the cat sat down";
// your code here

// TEST 1:  wordSentence = "the cat sat down"  ->  4
// TEST 2:  wordSentence = "hello world"       ->  2
// TEST 3:  wordSentence = "one"               ->  1

/* ============================================================
   PART D — COMBINE IT
   ============================================================ */

// ----- 18. Find first digit in text -----
// Loop digitText chars. When !isNaN(Number(digitText[i])) -> log "First digit: " + char and break.
// If none found, log "No digits".
let digitText = "abc4def";
// your code here

// TEST 1:  digitText = "abc4def"  ->  First digit: 4
// TEST 2:  digitText = "a9b2"     ->  First digit: 9
// TEST 3:  digitText = "abc"      ->  No digits

// ----- 19. Is it prime? -----
// Loop i from 2 to primeN-1. If primeN % i === 0 -> not prime, break. Log "Prime"/"Not prime".
let primeN = 13;
// your code here

// TEST 1:  primeN = 13  ->  Prime
// TEST 2:  primeN = 15  ->  Not prime
// TEST 3:  primeN = 2   ->  Prime

// ----- 20. Multiplication grid (nested) -----
// Loop row 1..gridRows, inside it loop col 1..gridCols. Log row + " x " + col + " = " + (row * col).
let gridRows = 3;
let gridCols = 3;
// your code here

// TEST 1:  gridRows = 3, gridCols = 3  ->  9 lines, last is  3 x 3 = 9
// TEST 2:  gridRows = 2, gridCols = 2  ->  4 lines, last is  2 x 2 = 4
// TEST 3:  gridRows = 1, gridCols = 3  ->  1 x 1 = 1 / 1 x 2 = 2 / 1 x 3 = 3

/* ============================================================
   PART E — LEETCODE-STYLE  (same tools only: loops, if,
   % , Math.floor, strings — NO arrays, NO functions)
   Each problem is stated like a coding challenge. Read the
   input, compute, and log the answer.
   ============================================================ */

// ----- E1. Palindrome Number  (LeetCode 9) -----
// Given an integer palinNum, log true if it reads the same forwards and
// backwards, else false. Negative numbers are never palindromes.
// Hint: rebuild the number reversed with % 10 and Math.floor(/10), compare.
let palinNum = 121;
// your code here

// EXAMPLE 1:  Input: palinNum = 121    Output: true
//   Explanation: reading 121 left-to-right and right-to-left both give 121.
// EXAMPLE 2:  Input: palinNum = -121   Output: false
//   Explanation: right-to-left it reads 121-, so it is not a palindrome.
// EXAMPLE 3:  Input: palinNum = 10     Output: false
//   Explanation: right-to-left it reads 01, which is not the same as 10.

// ----- E2. Reverse Integer  (LeetCode 7) -----
// Given an integer revNum, log its digits reversed. Keep the sign.
// Hint: track sign, work on the positive value, build revResult with % 10.
let revNum = 123;
// your code here

// EXAMPLE 1:  Input: revNum = 123    Output: 321
//   Explanation: the digits 1-2-3 reversed are 3-2-1.
// EXAMPLE 2:  Input: revNum = -123   Output: -321
//   Explanation: reverse 123 -> 321, then re-apply the negative sign.
// EXAMPLE 3:  Input: revNum = 120    Output: 21
//   Explanation: 120 reversed is 021; a leading zero drops, leaving 21.

// ----- E3. Add Digits / Digital Root  (LeetCode 258) -----
// Given a non-negative integer rootNum, repeatedly add its digits until only
// one digit remains, then log it. (Use a while loop INSIDE a while loop, or
// loop until rootNum < 10.)
let rootNum = 38;
// your code here

// EXAMPLE 1:  Input: rootNum = 38   Output: 2
//   Explanation: 3 + 8 = 11, then 1 + 1 = 2. 2 has one digit, so stop.
// EXAMPLE 2:  Input: rootNum = 0    Output: 0
//   Explanation: 0 already has a single digit.
// EXAMPLE 3:  Input: rootNum = 99   Output: 9
//   Explanation: 9 + 9 = 18, then 1 + 8 = 9.

// ----- E4. Happy Number  (LeetCode 202) -----
// Replace happyNum by the sum of the squares of its digits, repeat.
// Log true if it reaches 1, false otherwise.
// Hint (no arrays): an unhappy number always reaches 4 — loop while
// happyNum !== 1 && happyNum !== 4.
let happyNum = 19;
// your code here

// EXAMPLE 1:  Input: happyNum = 19   Output: true
//   Explanation: 1²+9²=82, 8²+2²=68, 6²+8²=100, 1²+0²+0²=1. Reached 1.
// EXAMPLE 2:  Input: happyNum = 2    Output: false
//   Explanation: 2 -> 4 -> 16 -> 37 -> 58 -> 89 -> ... loops, never reaches 1.
// EXAMPLE 3:  Input: happyNum = 7    Output: true
//   Explanation: 7 -> 49 -> 97 -> 130 -> 10 -> 1. Reached 1.

// ----- E5. Number of 1 Bits / Hamming Weight  (LeetCode 191) -----
// Given a non-negative integer bitsNum, log how many 1s are in its binary form.
// Hint: while bitsNum > 0, add (bitsNum % 2) to a count, then Math.floor(/2).
let bitsNum = 11;
// your code here

// EXAMPLE 1:  Input: bitsNum = 11    Output: 3
//   Explanation: 11 in binary is 1011, which has three 1s.
// EXAMPLE 2:  Input: bitsNum = 128   Output: 1
//   Explanation: 128 in binary is 10000000, which has one 1.
// EXAMPLE 3:  Input: bitsNum = 7     Output: 3
//   Explanation: 7 in binary is 111, which has three 1s.

// ----- E6. Power of Three  (LeetCode 326) -----
// Given an integer powNum, log true if it is a power of 3 (3^0=1, 3^1=3, ...),
// else false. Hint: while powNum % 3 === 0, divide it by 3; check if it ends at 1.
let powNum = 27;
// your code here

// EXAMPLE 1:  Input: powNum = 27   Output: true
//   Explanation: 27 = 3 × 3 × 3 = 3³, so it is a power of three.
// EXAMPLE 2:  Input: powNum = 0    Output: false
//   Explanation: no power of three equals 0.
// EXAMPLE 3:  Input: powNum = 45   Output: false
//   Explanation: 45 = 9 × 5; the factor 5 means it is not a power of three.

// ----- E7. Length of Last Word  (LeetCode 58) -----
// Given a string lastWordStr that may have trailing spaces, log the length of
// the LAST word. Hint: walk from the end — skip trailing spaces, then count
// letters until the next space.
let lastWordStr = "Hello World";
// your code here

// EXAMPLE 1:  Input: lastWordStr = "Hello World"    Output: 5
//   Explanation: the last word is "World", which has 5 letters.
// EXAMPLE 2:  Input: lastWordStr = "   fly me   "   Output: 2
//   Explanation: ignore trailing spaces; the last word is "me" (2 letters).
// EXAMPLE 3:  Input: lastWordStr = "a"              Output: 1
//   Explanation: the only word is "a", length 1.

// ----- E8. Valid Palindrome (lowercase, no spaces)  (LeetCode 125 lite) -----
// Given a string palinStr, log true if it reads the same forwards and backwards.
// Hint: two counters — left = 0, right = palinStr.length - 1 — move inward.
let palinStr = "racecar";
// your code here

// EXAMPLE 1:  Input: palinStr = "racecar"   Output: true
//   Explanation: reversed it is still "racecar".
// EXAMPLE 2:  Input: palinStr = "hello"     Output: false
//   Explanation: reversed it is "olleh", which differs from "hello".
// EXAMPLE 3:  Input: palinStr = "abba"      Output: true
//   Explanation: position 0 matches 3 (a/a) and 1 matches 2 (b/b).

// ----- E9. Climbing Stairs  (LeetCode 70) -----
// You can climb 1 or 2 steps at a time. Given stairsNum steps, log how many
// distinct ways to reach the top. (It is the Fibonacci pattern.)
let stairsNum = 5;
// your code here

// EXAMPLE 1:  Input: stairsNum = 2   Output: 2
//   Explanation: two ways — (1+1) or (2).
// EXAMPLE 2:  Input: stairsNum = 3   Output: 3
//   Explanation: three ways — (1+1+1), (1+2), (2+1).
// EXAMPLE 3:  Input: stairsNum = 5   Output: 8
//   Explanation: the counts follow Fibonacci: 1,2,3,5,8 for 1..5 steps.

// ----- E10. Sqrt(x)  (LeetCode 69) -----
// Given a non-negative integer sqrtNum, log the integer part of its square root
// (round down). Do NOT use Math.sqrt. Hint: loop i up while i * i <= sqrtNum.
let sqrtNum = 8;
// your code here

// EXAMPLE 1:  Input: sqrtNum = 8    Output: 2
//   Explanation: √8 ≈ 2.82; rounded down it is 2 (since 2×2=4 ≤ 8 < 3×3=9).
// EXAMPLE 2:  Input: sqrtNum = 16   Output: 4
//   Explanation: √16 = 4 exactly (4×4=16).
// EXAMPLE 3:  Input: sqrtNum = 1    Output: 1
//   Explanation: √1 = 1.

// ----- E11. Excel Sheet Column Number  (LeetCode 171) -----
// Columns go A=1, B=2, ... Z=26, AA=27, AB=28, ... Given an uppercase string
// excelStr, log its column number. Hint: alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// for each char, result = result * 26 + (alphabet.indexOf(char) + 1).
let excelStr = "AB";
// your code here

// EXAMPLE 1:  Input: excelStr = "A"    Output: 1
//   Explanation: A is the 1st column.
// EXAMPLE 2:  Input: excelStr = "AB"   Output: 28
//   Explanation: A=1 -> 1×26 + B(2) = 26 + 2 = 28.
// EXAMPLE 3:  Input: excelStr = "ZY"   Output: 701
//   Explanation: Z=26 -> 26×26 + Y(25) = 676 + 25 = 701.

// ----- E12. Ugly Number  (LeetCode 263) -----
// An ugly number is positive and its only prime factors are 2, 3, and 5.
// Given uglyNum, log true if ugly, else false. Hint: while divisible by 2 -> /2,
// then by 3, then by 5; ugly if you end at exactly 1.
let uglyNum = 6;
// your code here

// EXAMPLE 1:  Input: uglyNum = 6    Output: true
//   Explanation: 6 = 2 × 3; only the factors 2 and 3.
// EXAMPLE 2:  Input: uglyNum = 14   Output: false
//   Explanation: 14 = 2 × 7; the factor 7 is not allowed.
// EXAMPLE 3:  Input: uglyNum = 1    Output: true
//   Explanation: 1 has no prime factors, which counts as ugly.

// ----- E13. Factorial Trailing Zeroes  (LeetCode 172) -----
// Given zeroN, log how many trailing zeros are in zeroN! (zeroN factorial).
// Hint: it equals floor(zeroN/5) + floor(zeroN/25) + ... — loop dividing a
// counter by 5 each turn and summing.
let zeroN = 5;
// your code here

// EXAMPLE 1:  Input: zeroN = 5    Output: 1
//   Explanation: 5! = 120, which ends in one zero.
// EXAMPLE 2:  Input: zeroN = 3    Output: 0
//   Explanation: 3! = 6, which has no trailing zero.
// EXAMPLE 3:  Input: zeroN = 10   Output: 2
//   Explanation: 10! = 3628800, which ends in two zeros (floor(10/5)=2).

// ----- E14. Steps to Reduce a Number to Zero  (LeetCode 1342) -----
// While stepsNum > 0: if even -> stepsNum = stepsNum / 2, else -> stepsNum -= 1.
// Count the steps to reach 0. Log the count.
let stepsNum = 14;
// your code here

// EXAMPLE 1:  Input: stepsNum = 14    Output: 6
//   Explanation: 14->7->6->3->2->1->0 = 6 steps (/2, -1, /2, -1, /2, -1).
// EXAMPLE 2:  Input: stepsNum = 8     Output: 4
//   Explanation: 8->4->2->1->0 = 4 steps.
// EXAMPLE 3:  Input: stepsNum = 123   Output: 12
//   Explanation: it takes 12 even-halve / odd-subtract steps to reach 0.

// ----- E15. Subtract Product and Sum of Digits  (LeetCode 1281) -----
// Given prodSumN, compute (product of its digits) - (sum of its digits) and log it.
// Hint: product starts at 1, sum starts at 0; peel digits with % 10 and Math.floor(/10).
let prodSumN = 234;
// your code here

// EXAMPLE 1:  Input: prodSumN = 234    Output: 15
//   Explanation: product 2×3×4 = 24, sum 2+3+4 = 9, 24 - 9 = 15.
// EXAMPLE 2:  Input: prodSumN = 4421   Output: 21
//   Explanation: product 4×4×2×1 = 32, sum 4+4+2+1 = 11, 32 - 11 = 21.
// EXAMPLE 3:  Input: prodSumN = 9      Output: 0
//   Explanation: product 9, sum 9, 9 - 9 = 0.

/* ============================================================
   CHALLENGE (optional) — Star triangle (nested loops)
   ============================================================ */

// ----- Star triangle -----
// Loop row 1..starRows. Build a line of "*" with an inner loop, then log the line.
let starRows = 5;
// your code here

// TEST 1:  starRows = 5  ->  *
//                            **
//                            ***
//                            ****
//                            *****
// TEST 2:  starRows = 3  ->  *
//                            **
//                            ***
// TEST 3:  starRows = 1  ->  *

/* ============================================================
   All 3 tests match for an exercise = you got it right.
   Any mismatch = a bug to hunt. Happy looping!
   ============================================================ */
