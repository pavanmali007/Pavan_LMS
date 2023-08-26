function log(){
    window.location.href="login.html";
    return false;
}

function reg(){
    window.location.href="register.html";
    return false;
}

function logCheck(){
    let name = document.getElementById('name').value;
    let pass = document.getElementById('password').value;

    if(name === "admin" && pass === "admin" || name === "user" && pass === "user"){
        window.location.href="dashboard.html";
    }else{
        alert("Username or password invalid");
    }
    return false;
}

function regiCheck(){
    let rname = document.getElementById('name').value;
    let rpass = document.getElementById('password').value;
    let conf_pass = document.getElementById('confirm-password').value;

    if(rname === "" || rpass === "" || conf_pass === ""){
        alert("fields cannot be empty");
    }else{
        alert("registration successfull");
        window.location.href="login.html";
    }
    return false;
}

function AdminJoin(){
    window.location.href="register.html";
    return false;
}

function navCheck(param){
    switch(param){
        case 'users':
            window.location.href="mana_user.html"
            break;
        case 'books':
            window.location.href="mana_book.html"
            break;
        
            
    }
}

function homeNavCheck(param){
    switch(param){
        case 'about':
            window.location.href="about.html";
            break;
        case 'contact':
            window.location.href="contact.html";
            break;
        case 'home':
            window.location.href="index.html";
            break;
        case 'book':
            window.location.href="books.html";
            break;
        default:
            alert("work in progress...");
    }
}

