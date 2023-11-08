const loginForm = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Please enter correct login criteria.");
    }
  }
};

const signupForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#emailNew").value.trim();
  const password = document.querySelector("#passwordNew").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Please enter correct signup criteria.");
    }
  }
};

document.querySelector(".login-form").addEventListener("submit", loginForm);
document.querySelector(".signup-form").addEventListener("submit", signupForm);
