//Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

//created 3 prompts for the user
let firstNum = Number(prompt(`Enter a number`));
let operator = prompt(`Please pick an operator +, -, * or /`);
let SecNum = Number(prompt(`Enter a number`));

//created if statement for each operator and the result
if (operator == `+`) {
    let result = firstNum + SecNum;
    console.log(`${firstNum} ${operator} ${SecNum} = ${result}`)
}

else if (operator == `-`) {
    let result = firstNum + SecNum;
    console.log(`${firstNum} ${operator} ${SecNum} = ${result}`)
}

else if (operator == `*`) {
    let result = firstNum + SecNum;
    console.log(`${firstNum} ${operator} ${SecNum} = ${result}`)
}

else if (operator == `/`) {
    let result = firstNum + SecNum;
    console.log(`${firstNum} ${operator} ${SecNum} = ${result}`)
} else {
    console.log(`Please select valid operator`)
}


