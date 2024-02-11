/* remove buttons */

document.querySelector("#el_1706212191243_363").remove();
document.querySelector("#el_1706212266174_558").remove();
document.querySelector("#el_1706212215410_439 > a").remove();

/* change main button */
let btn = document.querySelector("#el_1706212215410_439");

let up = document.querySelector("#el_1706212215410_439");
let div = document.querySelector("#el_1706212215410_439");

let newBtn = document.createElement("button");
newBtn.textContent = "Pay Now";
newBtn.style.height = "40px";
newBtn.style.width = "150px";
newBtn.style.backgroundColor = "#5b53a5";
newBtn.style.borderRadius = "10px";
newBtn.style.marginTop = "32px";
newBtn.style.fontSize = "26px";
newBtn.style.cursor = "pointer";
newBtn.style.color = "white";

let priceP = document.createElement("p");
priceP.textContent = "Course Price: ₹27,499.00";
priceP.style.fontSize = "1.80rem";
priceP.style.color = "white";
priceP.style.fontWeight = "bold";
priceP.style.fontFamily = "inter";
priceP.style.marginTop = "20px";

let acountNumber = document.createElement("p");
acountNumber.textContent = "Acount Number:000";
acountNumber.style.fontSize = "1.80rem";
acountNumber.style.color = "white";
acountNumber.style.fontWeight = "bold";
acountNumber.style.fontFamily = "inter";
acountNumber.style.marginTop = "20px";

let ifcCode = document.createElement("p");
ifcCode.textContent = "Acount IFSC Coder:123";
ifcCode.style.fontSize = "1.80rem";
ifcCode.style.color = "white";
ifcCode.style.fontWeight = "bold";
ifcCode.style.fontFamily = "inter";
ifcCode.style.marginTop = "20px";

let holderName = document.createElement("p");
holderName.textContent = "Bank Name: bob";
holderName.style.fontSize = "1.80rem";
holderName.style.color = "white";
holderName.style.fontWeight = "bold";
holderName.style.fontFamily = "inter";
holderName.style.marginTop = "20px";

let input = document.createElement("input");
input.type = "text";
input.placeholder = "enter your utr here";
input.style.marginTop = "20px";
input.style.marginRight = "20px";
input.style.color = "grey";
input.style.fontSize = "1.80rem";
input.style.position = "absolute";
input.style.top = "305px";
input.style.right = "410px";
input.style.borderRadius = "10px";
input.style.width = "250px";
input.style.height = "25px";
input.style.borderColor = "transparent";

let pTag = document.createElement("p");
pTag.textContent = "";

pTag.style.height = "25px";
pTag.style.width = "full";
pTag.style.fontSize = "1.80rem";
pTag.style.color = "white";
pTag.style.fontWeight = "bold";
pTag.style.fontFamily = "inter";
pTag.style.marginTop = "20px";
pTag.style.position = "absolute";
pTag.style.right = "284px";

up.parentNode.insertBefore(acountNumber, up);
up.parentNode.insertBefore(ifcCode, up);
up.parentNode.insertBefore(holderName, up);
up.parentNode.insertBefore(priceP, up);
up.parentNode.insertBefore(input, up);

div.appendChild(newBtn);
div.appendChild(pTag);

newBtn.addEventListener("click", () => {
  pTag.textContent = "Please Wait Your Request is Under Process";

  setTimeout(() => {
    console.log("waiting");
  }, 5000);

  setTimeout(() => {
    pTag.textContent = "Congratulations You Have Bought The Cours Successfully";
  }, 1000);

  setTimeout(() => {
    console.log("waiting");
    window.location =
      "https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12638830#overview";
    r;
  }, 5000);
});
