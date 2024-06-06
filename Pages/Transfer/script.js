var myInput = document.getElementById("demo");
var back = document.getElementById("back");
var btn = document.getElementById("btn");
var yes = document.querySelector(".yes");
var alertbtn = document.querySelector(".alert");
var loading = document.querySelector("#loading");

alertbtn.style.display = "none";
loading.style.display = "none";
//Delete button
document.querySelector(".delete").addEventListener("click", function () {
  myInput.value = myInput.value.substring(0, myInput.value.length - 1);
});

//Get item localstorage
var infos = JSON.parse(localStorage.getItem("infos"))
  ? JSON.parse(localStorage.getItem("infos"))
  : [];

//Set item localstorage
function setT() {
  localStorage.setItem("infos", JSON.stringify(infos));
}

//Backslash
back.addEventListener("click", () => {
  window.location.href = "../Main/main.html";
});

//global condition modal if not valid sum
//Transfer amount
yes.addEventListener("click", () => {
  if (myInput.value > 0) {
    loading.style.display = "block";
    loading.innerHTML = "Transfering...";
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