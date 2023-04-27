const number = 8;

let promise = new Promise((resolve,reject) =>{
    if(number >10){
        resolve(number);
    }else{
        reject(new Error("Number less then 10!!"));
    }

})

promise
.then(console.log)
.catch((err)=> console.error(err));
