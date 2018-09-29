//select element
document.querySelector('#getText').addEventListener('click', getText);

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
  .then((res)=> res.text);
}