function repeatHello(callback){
    let repeat = setInterval(()=>{
        callback()
     },1000)
     setTimeout(()=>{
         clearInterval(repeat)
     },5000);
   }
  
   let hello = () => console.log("hello");
   
   repeatHello(hello)