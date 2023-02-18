// scripts;

let panel = document.querySelector('.panel');

function getUserData() {
    fetch("https://sabz-learn-default-rtdb.firebaseio.com/users.json")
    .then(res => res.json())
    .then(data => {
        let arr = Object.entries(data);
        arr.forEach(user => {
            createDonElem(user);
        })
    });
}

function createDonElem (user) {
    panel.insertAdjacentHTML('beforeend','<div class="admin1"><div class="left"><span class="bi bi-person-circle"></span></div><div class="main"><div class="top"><h3>'+user[1].username+'</h3></div><div class="pass"><p>pass: <span class="pass">'+user[1].password+'</span></p></div></div><div class="right"><div class="btn"><button class="btn"><span class="bi bi-trash"></span>Delete</button><br><button class="btn"><span class="bi bi-pencil-square"></span>Edit</button></div></div></div>');
}

window.addEventListener('load', getUserData);