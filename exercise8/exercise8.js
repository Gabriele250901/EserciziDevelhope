function multiplyByTwo(value) {
  let number = 2;
  function inner () {
    let multiply = value * number;
    return multiply;
  }
   return inner;
}

 console.log(multiplyByTwo(4)())
