let userFirstDigit = +prompt("Enter the fist digit");

let userSecondDigit = +prompt("Enter the second digit");

userFirstDigit = Number(userFirstDigit);

userSecondDigit = Number(userSecondDigit);


let add = userFirstDigit + userSecondDigit;
let sub = userFirstDigit - userSecondDigit;
let mult = userFirstDigit * userSecondDigit;
let div = userFirstDigit / userSecondDigit;

alert(` ${userFirstDigit} + ${userSecondDigit} = ${add} \n ${userFirstDigit} - ${userSecondDigit} = ${sub} \n ${userFirstDigit} * ${userSecondDigit} = ${mult} \n ${userFirstDigit} / ${userSecondDigit} = ${div}` )


