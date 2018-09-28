//select element
document.querySelector('#getText').addEventListener('click', getText);

function getText(){
  fetch('sampletext.txt')
  .then((res)=>{
    return res.text();
  })
  .then(function(data){
    console.log(data);
  })
}