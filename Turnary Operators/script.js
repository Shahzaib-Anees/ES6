// Turnary Operator are used to assign the values to the variables on consitional bases
// It is use when we have constant variables and they should bbe assign at the time declaration on the conditional bases
// it is used to decrease code length 

const obj = {
    width: 20.75,
    height: 10,
}


const { width, height } = obj;

const literalWidth = width > 10 ? width : width < 10 ? "Width is less than 10" : "Width is unknown";
// it is the hardCoded copy of 

let conditinalWidth;
if (width > 10) {
    conditinalWidth = width;
} else if (width < 10) {
    conditinalWidth = "Width is less than 10";
} else {
    conditinalWidth = "Width is unknown";
}

console.log(literalWidth);
console.log(conditinalWidth);

// In turnary operator ,it is necessary to write else statement 