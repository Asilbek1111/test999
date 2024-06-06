var back = document.getElementById("btn");
var overallH2 = document.getElementById("overallh2");
var overall = JSON.parse(localStorage.getItem("infos"));
var score = 2000;
var ArrOverall = [2000];

var localOverall = localStorage.getItem("overall")
  ? localStorage.getItem("overall")
  : [];

//all table

var infos = JSON.parse(localStorage.getItem("infos"))
  ? JSON.parse(localStorage.getItem("infos"))
  : [];

var list = document.getElementById("list");
var all = [2000];
// console.log(all[all.length - 1]);
infos.map((e) => {
  var info =
    (list.innerHTML += `<li class="list-group-item d-flex justify-content-between">
  <p class="col-6">${e.time}</p>
  <p class="col-2">${e.in === undefined ? 0 : e.in}</p>
  <p class="col-2">${e.out === undefined ? 0 : e.out}</p>
  <p class="col-2">${Number(all[all.length - 1]) + Number(e.overall - 0)}</p>
      </li>`);
  all.push(all[all.length - 1] + Number(e.overall - 0));
  overallH2.textContent = `Your current balance is ${all[all.length - 1]}`;
});
//Backslash
back.addEventListener("click", () => {
  window.location.href = "../Main/main.html";
});
