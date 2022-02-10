const { response } = require("express");

function efetuarLogin(){
    const usuario = document.getElementById("txtUsuarioLogin");
    const senha = document.getElementById("txtSenhaLogin");

    if (usuario.value.trim() == "" || senha.value == ""){
        alert("Usuário ou senha não podem ficar em branco");
        return;
    }

    //estabelecer a comunicação com a API
    fetch(`${server}/usuarios/login`,{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-trype":"application/json"
        },
        body:JSON.stringify({
           nomeusuario:usuario.value,
           senha:senha.value 
        })
    }).then((response)=>response.json())
    .then((dados)=>{
        console.log(dados);
    })
    .catch((erro)=> console.error(`Erro ao carregar a API->${erro}`));
    
}

function gravarUsuario(){
    var nome = document.getElementById("txtNome");
    var email = document.getElementById("txtEmail");
    var cpf = document.getElementById("txtCPF");
    var usuario = document.getElementById("txtUsuario");
    var senha = document.getElementById("txtSenha");
    var confirma = document.getElementById("txtConfirma");
    var foto = document.getElementById("txtFoto");


    if(
        nome.value.trim()=="" ||
        email.value.trim()=="" ||
        cpf.value.trim()=="" ||
        usuario.value.trim()=="" ||
        senha.value.trim()=="" ||
        confirma.value.trim()=="" ||
        foto.value.trim()=="" ){
            alert("Você deve preencher todos os campos");
            return;
        }

        if (senha.value != confirma.value){
            alert("Você deve confirmar a senha digitando a mesma");
            return;
        }
}