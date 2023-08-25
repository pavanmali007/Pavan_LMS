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

    if(name === "pavan" && pass === "pavan"){
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
            //code
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
        default:
            alert("work in progress...");
    }
}

