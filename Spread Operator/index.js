// Spread Operator 
//  Spread Operator is used to make of copy of non-premitive data in JavaScript such as Objects and Arrays .
// Spread Operator only makes Shallow Copy not deep copy of specified object or array

// Spread Operator for Objects :=

const obj = {
    name: "Shahzaib",
    rollNo: 172765,
    email: "mohammadshahzaib@gmail.com",
    courses: ["Web and App Development", "JavaScript", "Web 3.0 & Metaverse"]
}

const objCopy = { ...obj };//Makng new Refreance of Object in the Memory
console.log(objCopy);
objCopy.student = false; //Not effecting Original Object
console.log(objCopy);
console.log(obj);
// We can also make Object Copy by ;
const obj_copy = obj;
obj_copy.student = true;//Effecting Original Object
console.log(obj_copy);
console.log(obj);
// But in line 14 we make a copy of Object {obj} with new reference , but on line 16 we are making copy of Object {obj} with the same reference of Object {obj} . Therefore , a single change on Object {obj_copy} will also effect the Originbal Object {obj};
// That's why we use Spread Operator in JavaScript to make copy of non-premitive data of JS (i.e. array or Object). 



// Spread Operator for Array :-

const arr = ["apple", "mango", "orange", "strawberry", "grapes"];
const arrCopy = [...arr];//Makng new Refreance of Array in the Memory
console.log(arr);
console.log(arrCopy);

arrCopy.push("Banana");  //Not Effecting Original Object
console.log(arrCopy);


// Shallow Copy 
const studentsDetails = {
    student1: {
        name: "Ayyan",
        rollNo: "21264",
        email: "ayyan@gmail.com",
        phone: "03242247960"
    },
    student2: {
        name: "Ali",
        rollNo: "21265",
        email: "ali@gmail.com",
        phone: "03243244960"
    }
}

const studentsDetailsCopy = { ...studentsDetails };
console.log(studentsDetailsCopy);

studentsDetailsCopy.student1.result = "Good";//Also Effecting Original Object due to Shallow Copy
console.log(studentsDetailsCopy);
console.log(studentsDetails);


const usersArr = [
    {
        name: "Shahrukh",
        age: 32,
        height: 5.8,
    },
    {
        name: "Saad",
        age: 22,
        height: 5.9,
    },
    {
        name: "Abdul Moid",
        age: 20,
        height: 6.0,
    }
]

const usersArrCopy = [...usersArr];
console.log("Original Array", usersArr);
for (var elements of usersArrCopy) {  //Affecting Orginal Array due to Shallow Copy
    elements.married = false;
}
console.log("Copy Array", usersArrCopy);

