/*
Magic Eight Ball
You’ve learned a powerful tool in JavaScript: control flow! 
It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project we will build a Magic Eight Ball using 
control flow in JavaScript.

The user will be able to input a question, 
then our program will output a random fortune.
*/

// assigned a variable to an empty string //

let userName = 'James'

// This is a ternary expression - if the variable above has a name is will print there name if not it will just say hello //

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// This is a constant string variable //

const userQuestion = 'Will i have a puppy soon? '

// This will print the users question//

console.log(userQuestion);

// assigned another vairbale - math.floor allows for only whole numbers to be returned and Math.random chooses a random number between 0 and 8, thats why we are using 8//

let randomNumber = Math.floor(Math.random() * 8)

console.log(randomNumber);

// This is a changable vairable//
let eightBall =  ''

//switch statement//

switch (randomNumber) {
case 0:  
    eightBall = 'It is certain';
  break;
case 1:  
    eightBall = 'It is decidedly so';
  break;
case 2:  
    eightBall = 'Reply hazy try again';
  break;
case 3:  
    eightBall = 'Cannot predict now';
  break;
case 4:  
    eightBall = 'Do not count on it';
  break;
case 5:  
    eightBall = 'My sources say no';
  break;
case 6:  
    eightBall = 'Outlook not so good';
  break;
case 7:  
    eightBall = 'Signs point to yes';
  break;
}

console.log(`The magic eightball says ' ${eightBall}`)