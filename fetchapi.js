//select element
document.querySelector('#getText').addEventListener('click', getText);
document.querySelector('#getUsers').addEventListener('click', getUsers);
document.querySelector('#getPosts').addEventListener('click', getPosts);
document.querySelector('#addPost').addEventListener('submit', addPost);

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
    let output = '<h2>Users</h2>';
    data.forEach(function(user){
      output += `
        <ul class="list-group mb-3">
          <li class="list-group-item">ID: ${user.id}</li>
          <li class="list-group-item">Name: ${user.name}</li>
          <li class="list-group-item">Email: ${user.email}</li>
        </ul>
      `;
    });
    document.querySelector('#output').innerHTML = output;
  })
}

//GETposts FROM External Api
function getPosts(){
  //fetch posts from external api
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())
  .then((data) => {
    let output = '<h2>Posts</h2>';
    data.forEach(function(post){
      output += `
        <div class="card card-body mb-3">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
    });
    document.querySelector('#output').innerHTML = output;
  })
}

//addPost function
function addPost(e){
  e.preventDefault();

  let title = document.querySelector('#title').value
  let body = document.querySelector('#body').value

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({title:title, body:body})
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
}