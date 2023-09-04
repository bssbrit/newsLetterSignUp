let container = document.getElementById("container");
let subscribeBtn = document.getElementById("subscribeBtn");
let emailInput = document.getElementById("emailInput");
let body = document.getElementById("body");
let success = ` <div class="succesContainer">
<div>
  <img
    src="./assets/images/icon-success.svg"
    alt="succes Icon"
    id="succesIcon"
  />
</div>
<h1 class="succesH1">Thanks for subscribing!</h1>
<p>
  A confirmation email has been sent to <span>ash@loremcompany.com</span>.
  Please open it and click the button inside to confirm your subscription
</p>
<button type="button" id="dismissBtn" class="dismissBtn">Dismiss message</button>
</div>`;
let dismissBtn;

subscribeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (emailInput.value == "" || !emailCheck(emailInput.value)) msgErro(true);
  else {
    msgErro(false);
    document.body.removeChild(container);
    body.innerHTML = success;
    dismissBtn = document.getElementById("dismissBtn");
    dismissBtn.addEventListener("click", function () {
      body.innerHTML = "";
      body.appendChild(container);
    });
  }
  //  document.body.removeChild(container);
});

/* document.body.removeChild(container); */
const emailCheck = (email) => {
  const emailPattern = /^[^@]+@[^@]+\.(com)$/i;
  if (emailPattern.test(email)) {
    //console.log("email Valido");
    return true;
  } else {
    //console.log("email invalido");
    return false;
  }
};

emailCheck("11122fase@gail.com");

const msgErro = (confirmation) => {
  let msg = document.getElementById("errorText");
  msg.style.color = "red";
  if (confirmation) {
    emailInput.style.borderColor = "red";
    msg.textContent = "Valid Email required";
  } else {
    msg.textContent = "";
    emailInput.style.borderColor = "black";
  }
};
