/*
Dog Years
Dogs mature at a faster rate than human beings. 
We often say a dog’s age can be calculated in “dog years” to account for their growth 
compared to a human of the same age. 
In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life.
 How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, 
use JavaScript to convert your human age into dog years.

If you get stuck during this project or would like to see an experienced developer work through it, 
click “Get Unstuck“ to see a project walkthrough video.
*/

//  constant variable of my age //

const myAge = 34;

//a changable variable

let earlyYears = 2;

// this is the previous variable time by 10.5 //
earlyYears *= 10.5;

// We have taken the vairbale from line 3 and reasigned it to another //

let laterYears = myAge - 2;

// taken the vaiable lateryears and multiply by 4 //

laterYears *= 4;

// printing to console //
console.log(earlyYears);
console.log(laterYears);

// set a new variable //

let myAgeInDogYears = earlyYears + laterYears; 

// .tolowercase returns everything in the string to a lowercase character//

let myName = 'James '.toLowerCase();

console.log('My name is ' + myName + 'I am ' + myAge + ' years old in human years which is ' + myAgeInDogYears + ' years old in dog years. ' )


