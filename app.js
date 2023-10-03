
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const signUpForm = document.querySelector('.sign-up-form');

signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = signUpForm.querySelector('input[name="username"]').value;
  const email = signUpForm.querySelector('input[name="email"]').value;
  const password = signUpForm.querySelector('input[name="password"]').value;

  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.status === 201) {
      // User created successfully, handle redirection or other actions
    } else {
      // Handle registration failure
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
