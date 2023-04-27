const isLogged = true;

function firstPromise(isLogged){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(isLogged === true){
            resolve(Math.random());
        }else{
            reject(new Error("User is not logged!"))
        }
    },500)
})
}
function secondPromise(isLogged){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isLogged > 0.5){
                resolve(`{name: "John", age: 24}`)
            }else{
                reject(new Error("something went wrong!"))
            }
        },500)
    })
}

firstPromise(isLogged)
.then(secondPromise)
.then((val)=> console.log(val))
.catch((err)=> console.error(err))
.finally(()=> console.log("Spero ti piaccia Jeremy!!!"))