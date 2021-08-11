$(document).ready(function(){
  $("#loginAluno").submit(function(event){
    if($("#inputUsuario").val() == "root" && $("#inputSenha").val() == "1234"){
      $("#mensagem").addClass("alert alert-success alert-dismissible fade show")
      // apresente mensagem para o usuario por 3 segundos
      // remove a classe alert-warning caso ela exista
      $("#mensagem").removeClass("alert-danger")
      $("#mensagem").text("Usuário logado").show().fadeOut(5000)
    } else {
      $("#mensagem").addClass("alert alert-danger alert-dismissible fade show")
      // remove a classe alert-success
      $("#mensagem").removeClass("alert-success")
      $("#mensagem").text("Usuário ou senha inválido(a)").show().fadeOut(5000)
      // bloqueia o evento de submit. Só estamos vendo o lado do cliente
      event.preventDefault()
    }
  })
})