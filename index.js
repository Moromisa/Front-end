function userIsCorrect(user, password) {
  return user.value == "vitor" && password.value == "umdoistres";
}

function login() {
  var user = document.getElementById("user");
  var password = document.getElementById("password");

  if (user.value === "" || password.value === "") {
    alert("Por favor preencha os campos.");
  }
  if (this.userIsCorrect(user, password)) {
    alert(
      "obrigado sr.(a) " +
        user.value +
        ".\n Em breve nosso sistema estará disponível para acesso do público"
    );
  } else {
    alert("email ou senha incorretos");
  }
}
