function fazerLogin() {
    let Email = document.querySelector("#email").value;
    let Senha = document.querySelector("#senha").value;

    console.log(Email, Senha);

    // Fetch para GET
    fetch("https://localhost:3000/usuario/email/" + encodeURIComponent(Email)).then(promessa => promessa.json()).then(dados => {
        // Digite aqui o que fazer com os dados.

        alert (dados);
    });
};