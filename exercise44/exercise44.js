const user = {
    id: 1,
    name: "John",
    age: 25,
  };
  
  function local(user){
     let json = JSON.stringify(user)
  return  localStorage.setItem("user", json);
  }
  
  local(user);

  function printLocal(){
  const localStorageItem = localStorage.getItem("user");
  const stuff = JSON.parse(localStorageItem);
  console.log(stuff);
}
  printLocal()