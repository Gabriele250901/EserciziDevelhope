function printAsyncName(callBack,name){
   setTimeout(()=>{
    callBack()
   },1000)
   setTimeout(()=>{
    console.log(name)
   },2000)
}

function hello(){
    console.log("Hello");
}

printAsyncName(hello,"Gabriele");
/* qui ero un po` confuso a riguardo , perche` la consegna del sito suggeriva 
di usare setTimeout mentre qui dice di usare Interval, tra le due, ho preferito usare 
setTimeout perche` mi trovo meglio .*/