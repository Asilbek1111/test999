var btn = document.getElementById("btn");
var back = document.getElementById("back");
var yes = document.querySelector(".yes");
var alertbtn = document.querySelector(".alert");
var loading = document.querySelector("#loading");

alertbtn.style.display = "none";
loading.style.display = "none";

btn.addEventListener("click", function () {
  window.location = "../Main/main.html";
});

//Input amount

var myInput = document.getElementById("sum");
myInput.value = 0;
var infos = JSON.parse(localStorage.getItem("infos"))
  ? JSON.parse(localStorage.getItem("infos"))
  : [];

//SetItem Localstorage
function setT() {
  localStorage.setItem("infos", JSON.stringify(infos));
}

//Backslash
back.addEventListener("click", () => {
  window.location = "../Main/main.html";
});

//Transfer amount
yes.addEventListener("click", () => {
  if (myInput.value > 0) {
    loading.style.display = "block";
    loading.innerHTML = "Widthdrawing...";
    setTimeout(() => {
      alertbtn.style.display = "block";
      loading.style.display = "none";
      infos.push({
        time: new Date().toLocaleString(),
        out: myInput.value,
        overall: myInput.value,
      });
      setT();
    }, 1800);
  } else if (myInput.value.length === 0) {
    loading.style.display = "block";
    loading.innerHTML = "Please enter valid amount";
    setTimeout(() => {
      loading.textContent = "";
    }, 3000);
  }
});
