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
let total = 0;
// your code here
while (sumDigitN > 0) {
  total += sumDigitN % 10;
  sumDigitN = Math.floor(sumDigitN / 10);
}
console.log(total);
// TEST 1:  sumDigitN = 1234  ->  10
// TEST 2:  sumDigitN = 999   ->  27
// TEST 3:  sumDigitN = 5     ->  5

// ----- 12. Guess limiter -----
// While guessNum !== secretNum, log "Trying " + guessNum, then guessNum++.
// After the loop log "Found it: " + secretNum.
let secretNum = 10;
let guessNum = 1;
// your code here
while (guessNum !== secretNum) {
  console.log("Trying " + guessNum);
  guessNum++;
}
console.log("Found it: " + secretNum);
// TEST 1:  secretNum = 4, guessNum = 1  ->  Trying 1 / Trying 2 / Trying 3, then  Found it: 4
// TEST 2:  secretNum = 2, guessNum = 1  ->  Trying 1, then  Found it: 2
// TEST 3:  secretNum = 1, guessNum = 1  ->  (no Trying), then  Found it: 1

/* ============================================================
   PART C — LOOPING OVER STRINGS
   ============================================================ */

// ----- 13. Spell it out -----
// Loop with spellWord[i] and log one letter per line.
let spellWord = "hello mf";
// your code here
// for(i=0; i <spellWord.length; i++){
//   console.log(spellWord[i])
// }
let ii = 0;
while (ii < spellWord.length) {
  console.log(spellWord[ii]);
  ii++;
}
// TEST 1:  spellWord = "hello"  ->  h e l l o
// TEST 2:  spellWord = "hi"     ->  h i
// TEST 3:  spellWord = "a"      ->  a

// ----- 14. Count a letter -----
// Count how many times "a" appears in letterWord (if letterWord[i] === "a"). Log the count.
let letterWord = "banana";
let count2 = 0;
// your code here
for (let i = 0; i <= letterWord.length; i++) {
  if (letterWord[i] === "a") {
    count2++;
  }
}
console.log(count2);

// TEST 1:  letterWord = "banana"  ->  3
// TEST 2:  letterWord = "aaa"     ->  3
// TEST 3:  letterWord = "dog"     ->  0

// ----- 15. Count the vowels -----
// For each char, if "aeiou".includes(vowelText[i]) add to a counter. Log the count.
let vowelText = "aeiou";
// your code here
let count3 = 0;
for (let i = 0; i <= vowelText.length; i++) {
  if ("aeiou".includes(vowelText[i])) {
    count3++;
  }
}
console.log(count3);
// TEST 1:  vowelText = "javascript"  ->  3
// TEST 2:  vowelText = "aeiou"       ->  5
// TEST 3:  vowelText = "xyz"         ->  0

// ----- 16. Reverse a string -----
// reversedText = "". Loop and build backwards: reversedText = reverseWord[i] + reversedText. Log it.
let reverseWord = "code";
// your code here
let reversedText = "";
for (let i = 0; i < reverseWord.length; i++) {
  reversedText = reverseWord[i] + reversedText;
}
console.log(reversedText);
// TEST 1:  reverseWord = "code"  ->  edoc
// TEST 2:  reverseWord = "abc"   ->  cba
// TEST 3:  reverseWord = "x"     ->  x

// ----- 17. Count the words -----
// wordCount = 1. Each space (wordSentence[i] === " ") -> wordCount++. Log the count.
let wordSentence = "hello world";
// your code here
wordcount = 1;
for (let i = 0; i <= wordSentence.length; i++) {
  if (wordSentence[i] === " ") {
    wordcount++;
  }
}
console.log(wordcount);
// TEST 1:  wordSentence = "the cat sat down"  ->  4
// TEST 2:  wordSentence = "hello world"       ->  2
// TEST 3:  wordSentence = "one"               ->  1

/* ============================================================
   PART D — COMBINE IT
   ============================================================ */

// ----- 18. Find first digit in text -----
// Loop digitText chars. When !isNaN(Number(digitText[i])) -> log "First digit: " + char and break.
// If none found, log "No digits".
let digitText = "abc9d444e5f";
// your code here
let found = false;
for (i = 0; i <= digitText.length; i++) {
  if (!isNaN(Number(digitText[i]))) {
    console.log("First digit: " + digitText[i]);
    found = true;
    break;
  }
}
if (found == false) {
  console.log("No digits");
}
// TEST 1:  digitText = "abc4def"  ->  First digit: 4
// TEST 2:  digitText = "a9b2"     ->  First digit: 9
// TEST 3:  digitText = "abc"      ->  No digits

// ----- 19. Is it prime? -----
// Loop i from 2 to primeN-1. If primeN % i === 0 -> not prime, break. Log "Prime"/"Not prime".
let primeN = 13;
// your code here
let prime = true;

for (let i = 2; i < primeN; i++) {
  if (primeN % i === 0) {
    prime = false;
    break;
  }
}

if (primeN > 1 && prime) {
  console.log("Prime");
} else {
  console.log("Not prime");
}

// TEST 1:  primeN = 13  ->  Prime
// TEST 2:  primeN = 15  ->  Not prime
// TEST 3:  primeN = 2   ->  Prime

// ----- 20. Multiplication grid (nested) -----
// Loop row 1..gridRows, inside it loop col 1..gridCols. Log row + " x " + col + " = " + (row * col).
let gridRows = 4;
let gridCols = 4;
// your code here
let row = "";
let col = "";
for (let r = 1; r <= gridRows; r++) {
  let row = r;
  for (let i = 1; i <= gridCols; i++) {
    let col = i;
    if (gridCols === i && gridRows === r) {
      console.log(
        row * col +
          " lines, " +
          "last is " +
          (row + " x " + col + " = " + row * col),
      );
    }
  }
}
// TEST 1:  gridRows = 3, gridCols = 3  ->  9 lines, last is  3 x 3 = 9
// TEST 2:  gridRows = 2, gridCols = 2  ->  4 lines, last is  2 x 2 = 4
// TEST 3:  gridRows = 1, gridCols = 3  ->  1 x 1 = 1 / 1 x 2 = 2 / 1 x 3 = 3

/* ============================================================
   PART F — EXTRA PRACTICE  (not LeetCode — plain loop drills)
   ============================================================ */
// ----- 21. Sum of squares -----
// Add up 1² + 2² + ... + sqSumMax² (i * i each turn). Log the total.
let sqSumMax = 5;
let sqSum = 0;
for (i = 0; i <= sqSumMax; i++) {
  sqSum = sqSum + i * i;
}
console.log(sqSum);

// your code here
// TEST 1:  sqSumMax = 3  ->  14    (1 + 4 + 9)
// TEST 2:  sqSumMax = 1  ->  1
// TEST 3:  sqSumMax = 5  ->  55    (1 + 4 + 9 + 16 + 25)
// ----- 22. Sum of odd numbers -----
// Add every ODD number from 1 to oddSumMax. Log the total.
let oddSumMax = 5;
let oodSum = 0;
for (i = 1; i <= oddSumMax; i = i + 2) {
  oodSum += i;
}
console.log(oodSum);
// your code here
// TEST 1:  oddSumMax = 10  ->  25   (1 + 3 + 5 + 7 + 9)
// TEST 2:  oddSumMax = 5   ->  9    (1 + 3 + 5)
// TEST 3:  oddSumMax = 1   ->  1
// ----- 23. First five multiples -----
// Log the first 5 multiples of multBase, one per line (multBase x 1 .. x 5).
let multBase = 10;
// your code here
let multSum = 0;
for (i = 0; i <= 5; i++) {
  multSum = multBase * i;
  console.log(multSum);
}
// TEST 1:  multBase = 3   ->  3 6 9 12 15
// TEST 2:  multBase = 10  ->  10 20 30 40 50
// TEST 3:  multBase = 1   ->  1 2 3 4 5
// ----- 24. Count uppercase letters -----
// Count how many UPPERCASE letters are in upWord. Log the count.
// Hint: a letter is uppercase when upWord[i] === upWord[i].toUpperCase() (and it is a letter).
let upWord = "HeLLo";
// your code here
let countUp = 0;
for (i = 0; i < upWord.length; i++) {
  if (upWord[i] === upWord[i].toUpperCase()) {
    countUp++
  }
}
console.log(countUp);

// TEST 1:  upWord = "HeLLo"  ->  3   (H, L, L)
// TEST 2:  upWord = "abc"    ->  0
// TEST 3:  upWord = "ABC"    ->  3
// ----- 25. Repeat a string -----
// Build a new string that is repWord repeated repTimes times. Log it.
// Hint: result = ""; loop repTimes -> result = result + repWord.
let repWord = "ab";
let repTimes = 3;
let result1 = ""
// your code here
for(i=0; i<repTimes;i++){
  result1 = repWord ;
}
console.log(result1)
// TEST 1:  repWord = "ab", repTimes = 3  ->  ababab
// TEST 2:  repWord = "x",  repTimes = 5  ->  xxxxx
// TEST 3:  repWord = "hi", repTimes = 1  ->  hi
// ----- 26. Replace spaces with dashes -----
// Build a new string from dashSentence where every space becomes "-". Log it.
// Hint: result = ""; if char is " " add "-", else add the char.
let dashSentence = "a b c";
// your code here
// TEST 1:  dashSentence = "a b c"        ->  a-b-c
// TEST 2:  dashSentence = "hello world"  ->  hello-world
// TEST 3:  dashSentence = "one"          ->  one
// ----- 27. Count consonants -----
// Count the letters in conText that are NOT vowels (not in "aeiou"). Log the count.
let conText = "hello";
// your code here
// TEST 1:  conText = "hello"  ->  3   (h, l, l)
// TEST 2:  conText = "aeiou"  ->  0
// TEST 3:  conText = "xyz"    ->  3
// ----- 28. Average of 1 to max -----
// Add 1..avgMax, then divide by avgMax to get the average. Log the average.
let avgMax = 10;
// your code here
// TEST 1:  avgMax = 10  ->  5.5
// TEST 2:  avgMax = 5   ->  3
// TEST 3:  avgMax = 1   ->  1
// ----- 29. Count even digits -----
// Count how many digits of evenDigCountN are even. Log the count.
// Hint: peel digits with % 10 and Math.floor(/10); a digit d is even when d % 2 === 0.
let evenDigCountN = 2468;
// your code here
// TEST 1:  evenDigCountN = 2468  ->  4
// TEST 2:  evenDigCountN = 1357  ->  0
// TEST 3:  evenDigCountN = 1234  ->  2   (2 and 4)
// ----- 30. Number triangle (nested) -----
// For each row r from 1 to numTriRows, build the string "1 2 ... r" with no spaces
// (just the digits joined) and log one line per row.
let numTriRows = 3;
// your code here
// TEST 1:  numTriRows = 3  ->  1 / 12 / 123
// TEST 2:  numTriRows = 1  ->  1
// TEST 3:  numTriRows = 4  ->  1 / 12 / 123 / 1234
/* ============================================================
   PART E — LEETCODE-STYLE (EASY)  (same tools only: loops, if,
   % , Math.floor, strings — NO arrays, NO functions)
   Gentle versions: peel digits, simple divide-down checks, and
   short string walks. No sign handling, no base-26, no DP.
   ============================================================ */
// ----- E1. Sum of Digits -----
// Given a non-negative integer sumDigN, add up its digits ONCE and log the total.
// Hint: while sumDigN > 0 -> add (sumDigN % 10) to a total, then sumDigN = Math.floor(sumDigN / 10).
let sumDigN = 234;
// your code here
// EXAMPLE 1:  Input: sumDigN = 234   Output: 9
//   Explanation: 2 + 3 + 4 = 9.
// EXAMPLE 2:  Input: sumDigN = 99    Output: 18
//   Explanation: 9 + 9 = 18.
// EXAMPLE 3:  Input: sumDigN = 7     Output: 7
//   Explanation: a single digit is its own sum.
// ----- E2. Count the Digits -----
// Given a non-negative integer countDigN, log how many digits it has.
// Hint: while countDigN > 0 -> count++ and countDigN = Math.floor(countDigN / 10).
let countDigN = 7384;
// your code here
// EXAMPLE 1:  Input: countDigN = 7384   Output: 4
//   Explanation: the digits are 7, 3, 8, 4 — four of them.
// EXAMPLE 2:  Input: countDigN = 50     Output: 2
//   Explanation: the digits are 5 and 0.
// EXAMPLE 3:  Input: countDigN = 9      Output: 1
//   Explanation: one digit.
// ----- E3. Subtract Product and Sum of Digits  (LeetCode 1281) -----
// Compute (product of digits) - (sum of digits) for prodSumN and log it.
// Hint: product starts at 1, sum starts at 0; peel digits with % 10 and Math.floor(/10).
let prodSumN = 234;
// your code here
// EXAMPLE 1:  Input: prodSumN = 234    Output: 15
//   Explanation: product 2×3×4 = 24, sum 2+3+4 = 9, 24 - 9 = 15.
// EXAMPLE 2:  Input: prodSumN = 4421   Output: 21
//   Explanation: product 4×4×2×1 = 32, sum 4+4+2+1 = 11, 32 - 11 = 21.
// EXAMPLE 3:  Input: prodSumN = 9      Output: 0
//   Explanation: product 9, sum 9, 9 - 9 = 0.
// ----- E4. Reverse a Number (positive only) -----
// Given a positive integer revPosN, log its digits reversed (no sign to worry about).
// Hint: revResult = 0; while revPosN > 0 -> revResult = revResult * 10 + (revPosN % 10),
// then revPosN = Math.floor(revPosN / 10).
let revPosN = 123;
// your code here
// EXAMPLE 1:  Input: revPosN = 123   Output: 321
//   Explanation: digits 1-2-3 reversed are 3-2-1.
// EXAMPLE 2:  Input: revPosN = 120   Output: 21
//   Explanation: 120 reversed is 021; the leading zero drops, leaving 21.
// EXAMPLE 3:  Input: revPosN = 5     Output: 5
//   Explanation: one digit reversed is itself.
// ----- E5. Largest Digit -----
// Given a non-negative integer maxDigN, log its biggest single digit.
// Hint: biggest = 0; peel each digit with % 10; if a digit is bigger, update biggest.
let maxDigN = 49072;
// your code here
// EXAMPLE 1:  Input: maxDigN = 49072   Output: 9
//   Explanation: the digits are 4,9,0,7,2 — the largest is 9.
// EXAMPLE 2:  Input: maxDigN = 1111    Output: 1
//   Explanation: every digit is 1.
// EXAMPLE 3:  Input: maxDigN = 5       Output: 5
//   Explanation: the only digit is 5.
// ----- E6. Power of Two  (LeetCode 231) -----
// Given a positive integer powTwoN, log true if it is a power of 2 (1,2,4,8,...), else false.
// Hint: while powTwoN % 2 === 0 -> powTwoN = powTwoN / 2; it is a power of 2 if it ends at exactly 1.
let powTwoN = 16;
// your code here
// EXAMPLE 1:  Input: powTwoN = 16   Output: true
//   Explanation: 16 = 2×2×2×2 = 2⁴.
// EXAMPLE 2:  Input: powTwoN = 1    Output: true
//   Explanation: 2⁰ = 1.
// EXAMPLE 3:  Input: powTwoN = 6    Output: false
//   Explanation: 6 = 2×3; the factor 3 means it is not a power of 2.
// ----- E7. Number of 1 Bits  (LeetCode 191) -----
// Given a non-negative integer oneBitsN, log how many 1s are in its binary form.
// Hint: while oneBitsN > 0 -> add (oneBitsN % 2) to a count, then Math.floor(/2).
let oneBitsN = 11;
// your code here
// EXAMPLE 1:  Input: oneBitsN = 11   Output: 3
//   Explanation: 11 in binary is 1011, which has three 1s.
// EXAMPLE 2:  Input: oneBitsN = 8    Output: 1
//   Explanation: 8 in binary is 1000, which has one 1.
// EXAMPLE 3:  Input: oneBitsN = 7    Output: 3
//   Explanation: 7 in binary is 111, which has three 1s.
// ----- E8. Sqrt(x) — integer part  (LeetCode 69) -----
// Given a non-negative integer rootFloorN, log the integer part of its square root.
// Hint: loop i = 1 upward while i * i <= rootFloorN; the answer is the last i that fit.
let rootFloorN = 8;
// your code here
// EXAMPLE 1:  Input: rootFloorN = 8    Output: 2
//   Explanation: 2×2=4 ≤ 8 but 3×3=9 > 8, so the floor is 2.
// EXAMPLE 2:  Input: rootFloorN = 16   Output: 4
//   Explanation: 4×4 = 16 exactly.
// EXAMPLE 3:  Input: rootFloorN = 1    Output: 1
//   Explanation: 1×1 = 1.
// ----- E9. Valid Perfect Square  (LeetCode 367) -----
// Given a positive integer perfSqN, log true if it is a perfect square, else false.
// Hint: loop i = 1 upward; if i * i === perfSqN -> true; if i * i > perfSqN -> false, stop.
let perfSqN = 16;
// your code here
// EXAMPLE 1:  Input: perfSqN = 16   Output: true
//   Explanation: 4×4 = 16.
// EXAMPLE 2:  Input: perfSqN = 14   Output: false
//   Explanation: 3×3=9 and 4×4=16; nothing squared equals 14.
// EXAMPLE 3:  Input: perfSqN = 1    Output: true
//   Explanation: 1×1 = 1.
// ----- E10. Ugly Number  (LeetCode 263) -----
// An ugly number is positive and its only prime factors are 2, 3, and 5.
// Given uglyN, log true if ugly, else false.
// Hint: while divisible by 2 -> /2, then by 3, then by 5; ugly if you end at exactly 1.
let uglyN = 6;
// your code here
// EXAMPLE 1:  Input: uglyN = 6    Output: true
//   Explanation: 6 = 2 × 3; only the factors 2 and 3.
// EXAMPLE 2:  Input: uglyN = 14   Output: false
//   Explanation: 14 = 2 × 7; the factor 7 is not allowed.
// EXAMPLE 3:  Input: uglyN = 1    Output: true
//   Explanation: 1 has no prime factors, which counts as ugly.
// ----- E11. Steps to Reduce a Number to Zero  (LeetCode 1342) -----
// While stepsN > 0: if even -> stepsN = stepsN / 2, else -> stepsN -= 1. Count steps to reach 0.
let stepsN = 14;
// your code here
// EXAMPLE 1:  Input: stepsN = 14    Output: 6
//   Explanation: 14->7->6->3->2->1->0 = 6 steps.
// EXAMPLE 2:  Input: stepsN = 8     Output: 4
//   Explanation: 8->4->2->1->0 = 4 steps.
// EXAMPLE 3:  Input: stepsN = 123   Output: 12
//   Explanation: it takes 12 even-halve / odd-subtract steps to reach 0.
// ----- E12. Fizz Buzz  (LeetCode 412) -----
// Loop 1..fizzN. Multiple of 3 -> "Fizz", of 5 -> "Buzz", both -> "FizzBuzz", else the number.
let fizzN = 5;
// your code here
// EXAMPLE 1:  Input: fizzN = 5    Output: 1 2 Fizz 4 Buzz
//   Explanation: 3 -> Fizz, 5 -> Buzz, the rest are themselves.
// EXAMPLE 2:  Input: fizzN = 3    Output: 1 2 Fizz
//   Explanation: only 3 is a multiple of 3.
// EXAMPLE 3:  Input: fizzN = 15   Output: ... 14 FizzBuzz
//   Explanation: 15 is a multiple of both 3 and 5, so "FizzBuzz".
// ----- E13. Self Dividing Number  (LeetCode 728 lite) -----
// A self-dividing number has NO zero digit and every digit divides the number evenly.
// Given selfDivN, log true if self-dividing, else false.
// Hint: peel each digit d; if d === 0 -> false; if selfDivN % d !== 0 -> false.
let selfDivN = 128;
// your code here
// EXAMPLE 1:  Input: selfDivN = 128   Output: true
//   Explanation: 128 % 1 = 0, 128 % 2 = 0, 128 % 8 = 0 — all divide evenly.
// EXAMPLE 2:  Input: selfDivN = 10    Output: false
//   Explanation: it contains a 0 digit, so it cannot be self-dividing.
// EXAMPLE 3:  Input: selfDivN = 12    Output: true
//   Explanation: 12 % 1 = 0 and 12 % 2 = 0.
// ----- E14. Count Vowels in a String -----
// Given a lowercase string vowelStr, log how many vowels (a, e, i, o, u) it has.
// Hint: for each char, if "aeiou".includes(vowelStr[i]) -> count++.
let vowelStr = "hello";
// your code here
// EXAMPLE 1:  Input: vowelStr = "hello"        Output: 2
//   Explanation: the vowels are e and o.
// EXAMPLE 2:  Input: vowelStr = "javascript"   Output: 3
//   Explanation: the vowels are a, a, i.
// EXAMPLE 3:  Input: vowelStr = "xyz"          Output: 0
//   Explanation: no vowels.
// ----- E15. Palindrome Number  (LeetCode 9) -----
// Given a non-negative integer palN, log true if it reads the same forwards and backwards.
// Hint: reverse it (revResult = revResult * 10 + palN % 10 while peeling), then compare to the original.
let palN = 121;
// your code here
// EXAMPLE 1:  Input: palN = 121   Output: true
//   Explanation: 121 reversed is 121.
// EXAMPLE 2:  Input: palN = 123   Output: false
//   Explanation: 123 reversed is 321, which differs.
// EXAMPLE 3:  Input: palN = 7     Output: true
//   Explanation: a single digit reads the same both ways.
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
