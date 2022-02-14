// TESTANDO JAVASCRIPT COM "SCR"


const MissionsArray = [
    "Eyes",
    "GET",
    "POST",
    "DELETE",
    "ENVIAR DADOS DE LOGIN PARA API"
    ]

    

// TESTANDO CONSOLE

console.log ("Hello world")
console.log (MissionsArray)



// FUNÇÃO PARA API (teste)


function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Conten-type", "application/json")
    request.send(JSON,stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastraUsuario () {
    event.preventDefault ()
    let url = "http://127.0.0.1:5500/index.html"
    let email = document.getElementById ("email").value
    let password = document.getElementById ("password").value
    console.log(email)
    console.log(password)

    body = {
        "email": email, 
        "password": password
    }

}



// Comando "Hide/Show Passoword"

function myFunction() {
    var x = document.getElementById("myInput");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

    if(x.type === 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}