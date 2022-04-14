//MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

//created a variable equal to a string 
let tone = prompt("How are you feeling?");
console.log(tone);
// console.log(typeof tone);

if (tone === tone.toUpperCase) {
    console.log(`User is Shouting`);
} else if (tone === tone.toLowerCase()) {
    console.log(`User is whispering`)
} else {
    console.log(`User is speaking normally`)
}








