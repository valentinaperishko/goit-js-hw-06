const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (!email.value.trim() || !password.value.trim()) {
    alert("Fill all the fields!");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
    evt.currentTarget.reset();
  }
}
