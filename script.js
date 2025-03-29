let value = 0; // Initialize the counter

const valueDisplay = document.querySelector("#value");

const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

decrease.addEventListener("click", function () {
  value--;
  valueDisplay.textContent = value;
  console.log(value);
  if (value < 0) {
    valueDisplay.style.color = "red";
    decrease.style.color = "white";
    decrease.style.backgroundColor = "red";
    decrease.style.borderColor = "red";
  }
});

reset.addEventListener("click", function () {
  value = 0;
  console.log(value);
  valueDisplay.textContent = value;
  valueDisplay.style.color = "blue";
  reset.style.color = "blue";
  reset.style.borderColor = "blue";
  document.querySelectorAll("button").forEach((btn) => {
    btn.style.color = "";
    btn.style.backgroundColor = "";
    btn.style.borderColor = "";
  });
});

increase.addEventListener("click", function () {
  value++;
  valueDisplay.textContent = value;
  console.log(value);
  if (value > 0) {
    valueDisplay.style.color = "green";
    increase.style.backgroundColor = "green";
    increase.style.color = "white";
    increase.style.borderColor = "green";
  }

  console.log(value);
});
