/*
Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: 
All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

For example, 283 K converts to 10 °C which converts to 50 °F.

If you get stuck during this project or would like to see an experienced developer work through it, 
click “Get Unstuck“ to see a project walkthrough video. */


//This is constant variable//

const kelvin = 293;

// This is another constant variable - another//

const celsius = kelvin - 273;

// This variable can be changed //

let Fahrenheit = celsius * (9/5) + 32;

// rounding down if the variable above gives you a deicmal point //

Fahrenheit = Math.floor(Fahrenheit);

// This is bringing all previous code together //

console.log('The temperature is ' + Fahrenheit + ' degrees Fahrenheit.')

// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);

