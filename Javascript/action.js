function myfunction() {
    const username = document.querySelector('.username');
    const pass = document.querySelector('.password');
    const demo = document.querySelector('.demo');
    console.log(username.value);
    if (username.value == "") {
        demo.textContent = "Your Username is not being typed";
        demo.classList.add('error')
    }

    pass.value = "";
}

function usernameClick() {
    const hintUsername = document.querySelector('.hint-username');
    hintUsername.innerHTML = "<p>Username</p> <p>0/50</p>";

}