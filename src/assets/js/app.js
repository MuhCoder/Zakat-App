// let mainInput = document.querySelector("input");
// let submitButton = document.querySelector("button");
// let finalResult = document.querySelector("table");
// let amountNumber = document.getElementById("sendNumber");
// let finalAmount = document.getElementById("finalAmount");

// submitButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   finalResult.style.display = "block";
//   let inputValue = mainInput.value;
//   amountNumber.innerHTML = inputValue;
//   let userInput = parseFloat(mainInput.value);

//   if (!isNaN(userInput) && userInput > 0) {
//     let zakat = userInput * 0.025;
//     finalAmount.innerHTML = zakat.toFixed(2);
//   } else {
//     finalResult.textContent = `هذا العدد لا تجب فيه الزكاة.`;
//   }
// });

// window.onload = () => {
//   let allInputs = document.querySelectorAll("input");
//   allInputs.forEach((input) => {
//     input.value = "";
//   });
// };

let primaryInput = document.getElementById("mainInput");
let primaryButton = document.getElementById("mainButton");
let finalResult = document.getElementById("finalResult");
let wrongZakat = document.getElementById("wrong");
let sendNumber = document.getElementById("sendNumber");
let finalAmount = document.getElementById("finalAmount");

primaryButton.addEventListener("click", (def) => {
  def.preventDefault();
  sendNumber.innerText = primaryInput.value;
  finalResult.style.display = "block";

  let zakatNumber = primaryInput.value;
  if (!isNaN(zakatNumber) && zakatNumber > 0) {
    let finalPrice = zakatNumber * 0.025;
    finalAmount.innerText = finalPrice.toFixed(2);
  } else {
    finalResult.innerText = `Sorry there something not right`;
  }
});

window.onload = () => {
  let allInputs = document.querySelectorAll("input");

  allInputs.forEach((input) => {
    input.value = "";
  });
};
