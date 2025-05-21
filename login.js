window.onload = function () {
    google.accounts.id.initialize({
      client_id: "880791004660-naimhaiumr5dasov4gcdap6jdqgf2h7c.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("loginDiv"),
      { theme: "outline", size: "large" }
    );

    google.accounts.id.prompt(); // Para mostrar o pop-up automático
  };

  function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    localStorage.setItem("nome", data.given_name);
    localStorage.setItem("sobrenome", data.family_name);
    localStorage.setItem("email", data.email);
    alert(`Olá, ${data.given_name}! Você foi logado com sucesso.`);
  }