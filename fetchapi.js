//select element
document.querySelector('#getText').addEventListener('click', getText);
document.querySelector('#getUsers').addEventListener('click', getUsers);

function getText(){

  //es5 syntax
  /*fetch('sampletext.txt')
  .then((res)=>{
    return res.text();
  })
  .then(function(data){
    console.log(data);
  })*/

  //es6 syntax
  fetch('sampletext.txt')
  .then((res)=> res.text())
  .then((data)=>{
    document.querySelector('#output').innerHTML = data;
  })
  .catch((err) => console.log(err))
}

//GETUSERS FROM USERS.JSON FILE
function getUsers(){
  //fetch users
  fetch('users.json')
  .then((res) => res.json())
  .then((data) => {
    let output = '<h2>Ussers</h2>';
    console.log(data);
  })
}