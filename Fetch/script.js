// Fetch is a build in Method of JavaScript which is used to call "API" via "API URL";

// Fetch returns two promises if get resolved 
// It always returns Encrypted data Object which should have to be decrypted for Further Uses
fetch("https://dummyjson.com/products").then((res) => {
    return res.json() // Decrypting Encrypted Data
}).then((data)=>{
    console.log(data);
})