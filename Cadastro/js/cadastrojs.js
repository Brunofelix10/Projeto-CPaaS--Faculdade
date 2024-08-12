function validateForm() {
  var errorMessage = document.getElementById("errorMessage");
  var successMessage = document.getElementById("successMessage");
  var name = document.getElementById("name").value;
  var date = document.getElementById("date").value;
  var materno = document.getElementById("materno").value;
  var cpf = document.getElementById("cpf").value;
  var celular = document.getElementById("celular").value;
  var telfixo = document.getElementById("telfixo").value;
  var adress = document.getElementById("adress").value;
  var login = document.getElementById("login").value;
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;
  var login = document.getElementById("login").value;
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;

  if (
    name === '' || date === '' || materno === '' ||
    cpf === '' || celular === '' || telfixo === '' ||
    adress === '' || login === '' || password === ''
) {
    document.getElementById("errorMessage").innerHTML = "Por favor, preencha todos os campos de cadastro corretamente.";
    return false;
} else {
    document.getElementById("errorMessage").innerHTML = "";

  if (login === '') {
    errorMessage.innerHTML = "Por favor, preencha o campo de login.";
    return false;
    }

  if (localStorage.getItem(login)) {
      errorMessage.innerHTML = "Login já cadastrado. Por favor, escolha outro login.";
      return false;
  } else {
      errorMessage.innerHTML = "";
}

  if (/\d/.test(name) || /\d/.test(materno)) {
    errorMessage.innerHTML = "Por favor, Preencha corretamente os campos!";
    return false;
} else {
    errorMessage.innerHTML = "";
}

  if (cpf.length !== 14) {
    errorMessage.innerHTML = "O CPF deve possuir 11 dígitos.";
    return false;
}

      if (password === confirm) {
          errorMessage.innerHTML = "";
          successMessage.innerHTML = "Cadastro realizado com sucesso!";
          setTimeout(function () {
            successMessage.innerHTML = "";

            localStorage.setItem(login, JSON.stringify({
                name: name,
                date: date,
                materno: materno,
                cpf: cpf,
                celular: celular,
                telfixo: telfixo,
                adress: adress,
                login: login,
                password: password
            }));

            document.getElementById("form").submit();
        }, 2500);
        return false;
      } else {
          errorMessage.innerHTML = "As senhas não coincidem. Por favor, digite novamente.";
          return false;
      }
  }
}

document.getElementById("name").addEventListener("input", function() {
    limitInput(this, 15, 60, 'nameError') ? validateAlphabeticInput(this, 15, 60) : null;
});

document.getElementById("materno").addEventListener("input", function() {
    limitInput(this, 15, 60, 'maternoError') ? validateAlphabeticInput(this, 15, 60) : null;
});

const inputCPF = document.getElementById('cpf');

inputCPF.addEventListener('input', formatCPF);

function formatCPF() {
    let value = inputCPF.value.replace(/\D/g, ''); 
    
    if (value.length > 3) {
        value = value.replace(/^(\d{3})/, '$1.'); 
    }
    if (value.length > 6) {
        value = value.replace(/^(\d{3})\.(\d{3})/, '$1.$2.'); 
    }
    if (value.length > 9) {
        value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})/, '$1.$2.$3-'); 
    }
    
    inputCPF.value = value; }

    function mascaraTelefone(event) {
        let tecla = event.key;
        let telefone = event.target.value.replace(/\D+/g, "");

        if (/^[0-9]$/i.test(tecla)) {
            telefone = telefone + tecla;
            let tamanho = telefone.length;

            if (tamanho >= 12) {
                return false;
            }
            
            if (tamanho > 10) {
                telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
            } else if (tamanho > 5) {
                telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
            } else if (tamanho > 2) {
                telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
            } else {
                telefone = telefone.replace(/^(\d*)/, "($1");
            }

            event.target.value = telefone;
        }

        if (!["Backspace", "Delete"].includes(tecla)) {
            return false;
        }
    }

    function validateAlphabeticInput(element, minLength, maxLength) {
        var inputValue = element.value;
        var errorMessageElement = element.parentElement.querySelector(".errorMessage");
    
        // Verifique se o campo contém números
        if (/\d/.test(inputValue)) {
            errorMessageElement.innerHTML = "Este campo não deve conter números.";
            errorMessageElement.style.display = "block"; // Exibir a mensagem de erro
            element.parentElement.classList.add("error"); // Adicionar classe de erro ao elemento pai
        } else if (inputValue.length < minLength) {
            errorMessageElement.innerHTML = "Insira pelo menos " + minLength + " caracteres.";
            errorMessageElement.style.display = "block"; // Exibir a mensagem de erro
            element.parentElement.classList.add("error"); // Adicionar classe de erro ao elemento pai
        } else if (inputValue.length > maxLength) {
            errorMessageElement.innerHTML = "Insira no máximo " + maxLength + " caracteres.";
            errorMessageElement.style.display = "block"; // Exibir a mensagem de erro
            element.parentElement.classList.add("error"); // Adicionar classe de erro ao elemento pai
        } else {
            errorMessageElement.innerHTML = ""; // Limpar a mensagem de erro
            errorMessageElement.style.display = "none"; // Ocultar a mensagem de erro
            element.parentElement.classList.remove("error"); // Remover classe de erro do elemento pai
        }
    }
    
    function showError(errorId) {
        var errorMessage = document.getElementById(errorId).innerText;
        alert(errorMessage);
    }
    
    document.getElementById("name").addEventListener("input", function() {
        validateAlphabeticInput(this, 15, 60);
    });
    
    document.getElementById("materno").addEventListener("input", function() {
        validateAlphabeticInput(this, 15, 60); 
    });

      document.getElementById("continueButton").addEventListener("click", function() {
    validateForm();
  });
  
  
  
  var inputs = document.querySelectorAll('input');
  var valid = true;

  inputs.forEach(function(input) {
      var fieldName = input.id;
      var value = input.value.trim();

      if (value === '') {
          addErrorClass(fieldName);
          valid = false;
      } else {
          removeErrorClass(fieldName);
      }
  });

  if (valid) {
  }

function addErrorClass(fieldName) {
  document.getElementById(fieldName).classList.add("error");
}

function removeErrorClass(fieldName) {
  document.getElementById(fieldName).classList.remove("error");
}
