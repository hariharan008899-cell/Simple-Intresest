const form = document.getElementById("interest-form");
const principalInput = document.getElementById("principal");
const rateInput = document.getElementById("rate");
const timeInput = document.getElementById("time");
const results = document.getElementById("results");
const interestOutput = document.getElementById("interest");
const totalOutput = document.getElementById("total");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const principal = Number(principalInput.value);
  const rate = Number(rateInput.value);
  const time = Number(timeInput.value);

  if (![principal, rate, time].every((value) => value >= 0)) {
    return;
  }

  const interest = (principal * rate * time) / 100;
  const total = principal + interest;

  interestOutput.textContent = interest.toFixed(2);
  totalOutput.textContent = total.toFixed(2);
  results.hidden = false;
});
