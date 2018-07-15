function fazerCadastro() {
    let Nome = document.querySelector("#nome").value;
    let Nascimento = document.querySelector("#nascimento").value;
    let Email = document.querySelector("#email").value;
    let Senha = document.querySelector("#senha").value;

    console.log(Nome, Nascimento, Email, Senha);

    // Fetch para POST
    fetch("http://localhost:3000/cadastro", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify( {nome: Nome,
            email: Email,
            senha: Senha,
            nascimento: Nascimento})
    }).then(dados => {
        // Digite aqui o que fazer com os dados.
        alert("Cadastrou");
        window.location.assign ("file:///C:/Users/carol/Desktop/SemMiMiMi/Site/pais.html")
    }).catch (() => {
        alert ("Não cadastrou")
    });

};