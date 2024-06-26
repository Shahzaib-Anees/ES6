// Destructing Objects 
        
// In objects , there should be the same variable declaration as the property name inside the Object at the time of Destructing;   

// 1
const studentDetails = {
    student1: {
        name: "Shahzaib",
        rollNo: 172765,
        course: ["Web and Mobile Application Development"],
        qualification: ["Matriculation", "Intermediate"]
    },
    student2: {
        name: "Ahmed",
        rollNo: 172765,
        course: ["Web and Mobile Application Development"],
        qualification: ["Matriculation", "Intermediate"]
    }
}

const { student1 : {name : Student1Name , qualification : [firstQualification]} , student2 : {name : Student2Name , rollNo}} = studentDetails ;

console.log(Student1Name, firstQualification); //First Student Details
console.log(Student2Name, rollNo); //Second Student Details

// 2
const itemObj = {
     type : "clothes" ,
     brandName : "J.",
     brandType : "Shalwar Qameez",
     sizes : ["Small" , "Large" , "Medium"]
}

const {type : itemType , brandName , sizes : [Large] , brandType} = itemObj ;
console.log(itemType , brandName , Large , brandType );



// Destructing Arrays 

// In the arrays , there is no preRequesite to have same name variable declaration as inside the array's element at the time of Destructuring, Because Array Element Destructure Accroding to their index number 
// i.e. like in the first variable first Element of an array is stored 

const arr = ["Apple" , "Mango" , "Orange" , "Banana"];
const [ a , b , c , d ] = arr;
console.log(a , c , d , b);

// if there is an Array of Object 
const arrOfObj  = [
    {
        firstName : "Ayyan",
        lastName : "Anees",
        profession : "Engineering",
        student : true,
    },
    {
        firstName : "Sawaira",
        lastName : "Anees",
        profession : "Medical",
        student : true,
    },
    {
        firstName : "Bushra",
        lastName : "Mumtaz",
        profession : "Medical",
        student : true,
    },
]

const [{ firstName , lastName , profession , student } , ,{firstName : userName , lastName : userLastName , profession : userProfession , student : userStudent}] = arrOfObj;
console.log(firstName , lastName , student , profession);
console.log(userName , userLastName , userProfession , userStudent);
