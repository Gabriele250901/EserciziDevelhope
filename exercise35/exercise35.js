  function repeatHello(callback){
   let repeat = setInterval(()=>{
       callback()
    },1000)
  }
 
  let hello = () => console.log("hello");
  
  repeatHello(hello)


  /* non so il motivo per la quale bisogna utilizzare un arrow function, odio il 
  setInterval con tutto il mio cuore. :( */



  

