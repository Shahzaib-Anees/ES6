class User {
    constructor(username) {
        this.username = username
    }

    logUserName() {
        console.log(`UserName : ${this.username}`);
    }
}

//"Admon Class" Inheriting properties from "User Class" 
class Admin extends User {
    constructor(username, email, password) {
        super(username),
            this.email = email,
            this.password = password
    }

    logPassword() {
        console.log(this.password);
    }
}

const user1 = new User("Ayyan");
const userToAdmin = new Admin("Shahzaib", "shahzaib@gmail.com", "shahzaib123");

console.log(user1);
console.log(userToAdmin);

// Inheritance Note :-
// In Admin Class , we can access all methods of User Class
// But we can't access methods of Admin Class in UserClass 

user1.logUserName()//Using User Class method on "User Class"
userToAdmin.logUserName(); //Using User Class Method on 'Admin Class'
userToAdmin.logPassword();//Using Admin Class Method on 'Admin Class'

// ------------------------------------------------------------------------------------------------------
// But we can't use Admin Class Method on UserClass
// user1.logPassword()



// If we want to declare a method in Class but make it confidential as it can't be use by any Inherited Class or by Original Class

let teacherId = 1;
class Teacher {
    constructor(name, email, password, experience, qualification, teacherID) {
        this.name = name,
            this.email = email,
            this.password = password,
            this.experience = experience,
            this.qualification = qualification,
            this.teacherID = teacherID
    }

    static showTeacherId() {
        console.log(this.teacherID);
    }
}

const teacher1 = new Teacher("Nabeel Ahmed", "nabeel@edu.com", "nabeel1234", "5 years", "M-Phil in Physics", `${teacherId}`)


// teacher1.showTeacherId() //Unable to use "showTeacherId()" method on "teacher1" constructed by class 'Teacher' 

console.log(teacher1);