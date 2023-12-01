function btn_login() {
    var login = document.getElementById("valor-usuario").value;
    var senha = document.getElementById("valor-senha").value;
    var msg_erro = document.getElementById("erro-login");

    if (login == '123' && senha == '123'){
        if (msg_erro) {
            msg_erro.remove();
        }
        window.location.href = "admin.html";
    }
    else{
        if(!msg_erro){
            var msg_erro = "<p id='erro-login'>Login ou senha incorretos.</p>";
            var campo_senha = document.getElementById("div-senha");

            campo_senha.insertAdjacentHTML('afterend', msg_erro);

            document.getElementById('erro-login').style.color = 'orange';
            document.getElementById('erro-login').style.marginTop = '10px';
            document.getElementById('erro-login').style.fontWeight = 'bold';
        }
    }
}

function btn_msg() {
    var email = document.getElementById("input-email");
    var nome = document.getElementById("input-nome");
    var mensagem = document.getElementById("mensagem");

    var dictMensagem = {email: email.value, nome: nome.value, mensagem: mensagem.value}
    
    alert("Mensagem enviada com sucesso.")

    email.value = ''
    nome.value = ''
    mensagem.value = ''
    
}