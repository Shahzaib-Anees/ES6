const arrowFunc = (name)=>{
    setTimeout(console.log(`Hello ${name}`) , 2000);
    return new Promise((resolve , reject)=>{
        if(name === "Shahzaib"){
            resolve("Promise Resolved");
        }else{
            reject("Promise Reject");
        }
    })
}

arrowFunc("Shahzaib").then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})