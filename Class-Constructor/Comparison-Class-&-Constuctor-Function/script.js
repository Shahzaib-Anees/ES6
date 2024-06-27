// ES6 has introduce a new feature for constructor functions called "Classes" from which we can make objects as in Constructor Functions 

class User {
    constructor(username, email, password) {
        this.username = username,
            this.email = email,
            this.password = password
    }
}

const user1 = new User("Shahzaib", "shahzaib@gmail.com", "shahzaib12");
console.log(user1);


// Making Methods in Classes 
class Admin {
    constructor(username, password) {
        this.username = username,
            this.password = password
    }

    //Methods are declared outside the constructor because it always mange methods in Prototype by default
    logUserName() {
        console.log(`UserName : ${this.username}`);
    }
}

const adminNew = new Admin("Ayyan", "ayyan123");
// Accessing Method from Class 
adminNew.logUserName();




// Behind the Scenes 


function UserDetail(username, email, password) {
        this.username = username,
        this.email = email,
        this.password = password
    //  Declaring Methods in Constructor Function
    this.logName = function(){
        console.log(`Name in Constructor Function : ${this.username}`);
    }
}

// The above method declare in above Constructor function is not a prototype by default . It refers as method

const newUserDetails = new UserDetail("Ahmed" , "ahmed@gmail.com" , "ahmed12345");
// Accessing Method in Constructor Function 
newUserDetails.logName();

