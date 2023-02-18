// scripts;

let username = document.querySelector('.username');
let password = document.querySelector('.password');
let form = document.querySelector('.form');


function addUserApi(e) {
    e.preventDefault();

    let userItemObj = {
        username: username.value,
        password: password.value
    }

    // fetch;

    fetch("https://sabz-learn-default-rtdb.firebaseio.com/users.json", {
        method: 'POST',
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify(userItemObj)
    })
    .then(res => console.log(res))
}

form.addEventListener('submit',addUserApi);