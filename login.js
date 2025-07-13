   if (!localStorage.getItem('name') || !localStorage.getItem('password')) {
    localStorage.setItem('name', 'Dinesh');
    localStorage.setItem('password', 'Julie@9390');
}
function submit(){
    let username1=document.getElementById('username').value;
    let password1=document.getElementById('password').value;
    let alert=document.getElementById('alert')

    let username2=localStorage.getItem('name');
    let password2=localStorage.getItem('password');

    if (username1==username2 && password1==password2) {
        window.location.href="Home.html";  
    } else {
        alert.innerText='Invalid Credentials'
        alert.style.color='red'
    }
}

let sub = document.getElementById('submit');
if (sub) {
    sub.addEventListener('click', function(event) {
        event.preventDefault();
        submit();
    });
}

function signin(){
    let login=document.getElementById('login');

    login.innerHTML = `
        <label>User name:</label>
        <input type="text" id="username" placeholder="eg:John"><br><br>
        <label>Password:</label>
        <input type="password" id="password" placeholder="eg:Ax6&8Uv5#2"><br><br>
        <input type="button" id="submit" value="Create">
        <h1 id="new_acc"></h1>
    `;

    document.getElementById('submit').addEventListener('click', function (){
        let newUsername=document.getElementById('username').value;
        let newPassword=document.getElementById('password').value;
        let new_acc=document.getElementById('new_acc')

        if (newUsername.trim() === '' || newPassword.trim() === '') {
            alert("Username or password cannot be empty.");
            return;
        }

        localStorage.setItem('name', newUsername);
        localStorage.setItem('password', newPassword);

        new_acc.innerText="Account Created"
        new_acc.style.color='blue'
        location.reload();
    });
}
