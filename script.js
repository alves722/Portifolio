document.getElementById("toggleTheme").addEventListener("click", function() {
    document.body.classList.toggle("light-theme");
});

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function(event) {
    event.stopPropagation(); 
    navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";
});

document.addEventListener("click", function(event) {
    const isClickInsideMenu = navbar.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInsideMenu) {
        navbar.style.display = "none";
    }
});

// Função para validar o formulário
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Expressões regulares para validação de email e telefone
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;

    // Verificar se todos os campos obrigatórios estão preenchidos e válidos
    if (!name || !email || !message || !emailPattern.test(email)) {
        errorMessage.innerText = "Por favor, preencha todos os campos obrigatórios corretamente.";
        errorMessage.style.display = "block";
        return false;
    }

    // Validar o número de telefone, se fornecido
    if (phone && !phonePattern.test(phone)) {
        errorMessage.innerText = "Por favor, insira um número de telefone válido (formato: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX).";
        errorMessage.style.display = "block";
        return false;
    }

    errorMessage.style.display = "none";
    alert("Formulário enviado com sucesso!");
    return true;
}

// Função para formatar o campo de telefone no formato brasileiro
document.getElementById("phone").addEventListener("input", function (event) {
    const input = event.target;
    const value = input.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    // Aplica o formato de telefone baseado no número de dígitos
    if (value.length > 10) {
        input.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    } else if (value.length > 6) {
        input.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6, 10)}`;
    } else if (value.length > 2) {
        input.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else {
        input.value = `(${value}`;
    }
});


