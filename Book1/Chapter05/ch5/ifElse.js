if(country === 'United States' || country === 'Liberia') {
    temperature += 'F';
} else {
    temperature = (temperature - 32) * 5 / 9 + 'C';
}


if(coffeeMakerIsOff) {
    turnOnCoffeeMaker();
}

if(pet === 'cat') {
    greeting = 'Good Kitty';
} else if (pet === 'dog'){
    greeting = 'Who\'s a good boy or girl';
} else if (pet === 'parrot') {
    greeting = 'Wanna cracker?';
} else {
    greeting = 'Hi.';
}

//ternary operator/conditional operator
const dt = Date();
const hours = dt.getHours();
let msg;
msg = hours < 12 ? ('Good morning!') : ('Welcome');
console.log(msg);


