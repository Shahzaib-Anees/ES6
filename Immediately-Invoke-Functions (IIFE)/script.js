//In JavaScript , some functions has to be called at the time of function declaration . In this scenerio an expression is formed which is known as "Immediate invoke function expression"

// The syntax of Immediately Invoke Functions is

// For Normal Function 
(
    function addNumbers(num1, num2) {
        console.log(num1 + num2);
    }
)(14, 22);//=> Invoked at the same time of declaration



// for Arrows function
const sum = ((num1, num2) => {
    console.log(num1 + num2);
})(14 , 16); //=>Invoked at the same time of declaration



// Note :-
// It is necessary to add terminator after invoking function immediately in JavaScript

