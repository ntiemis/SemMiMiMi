function fazerLogin() {
    let Email = document.querySelector("#email").value;
    let Senha = document.querySelector("#senha").value;

    console.log(Email, Senha);

    // Fetch para GET
    fetch("http://localhost:3000/usuario/email/" + Email).then(promessa => promessa.json()).then(dados => {
        // Digite aqui o que fazer com os dados.
        if(Senha === dados.senha) {
            window.location.assign ("/pais.html")
        }
        else{
            alert("Senha ou Email incorretos!")
        }
        console.log(dados);
    });
};