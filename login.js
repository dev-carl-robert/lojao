let isLogin = true;

function toggleForm() {
    isLogin = !isLogin;
    document.getElementById('form-title').innerText = isLogin ? 'Login' : 'Cadastro';
    document.querySelector('button').innerText = isLogin ? 'Entrar' : 'Cadastrar';
    document.querySelector('.toggle').innerText = isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Fazer login';

    // Mostrar ou esconder campos conforme login ou cadastro
    document.getElementById('nome').style.display = isLogin ? 'none' : 'block';
    document.getElementById('sobrenome').style.display = isLogin ? 'none' : 'block';
    document.getElementById('telefone').style.display = isLogin ? 'none' : 'block';
}

function handleSubmit() {
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (isLogin) {
        login(email, senha);
    } else {
        cadastro(nome, sobrenome, telefone, email, senha);
    }
}

function cadastro(nome, sobrenome, telefone, email, senha) {
    if (!nome || !sobrenome || !telefone || !email || !senha) {
        alert('Preencha todos os campos do cadastro.');
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const existe = usuarios.find(user => user.email === email);
    if (existe) {
        alert('Email já cadastrado!');
        return;
    }

    usuarios.push({ nome, sobrenome, telefone, email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso!');
    toggleForm();
}

function login(email, senha) {
    if (!email || !senha) {
        alert('Preencha todos os campos do login.');
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const user = usuarios.find(user => user.email === email && user.senha === senha);
    if (user) {
        localStorage.setItem('usuarioLogado', JSON.stringify(user));
        alert(`Bem-vindo(a), ${user.nome.split(' ')[0]}!`);
        window.location.href = 'index.html'; // Redireciona para a página inicial
    } else {
        alert('Email ou senha inválidos!');
    }
}

// Mostrar ou ocultar senha
function mostrarSenha() {
    const senha = document.getElementById('senha');
    senha.type = senha.type === 'password' ? 'text' : 'password';
}

// Código que executa na página index.html
const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

if (usuario) {
    const primeiroNome = usuario.nome.split(' ')[0]; // Pega o primeiro nome
    const loginBtn = document.getElementById('login');
    if (loginBtn) {
        loginBtn.innerHTML = `<span>${primeiroNome}</span>`;
        loginBtn.href = 'perfil.html'; // Redireciona para o perfil
    }
} else {
    const loginBtn = document.getElementById('login');
    if (loginBtn) {
        loginBtn.innerHTML = `<span>Login</span>`;
        loginBtn.href = 'login.html'; // Volta para página de login
    }
}