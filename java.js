var buttons = document.querySelectorAll(".button");
var equal = document.querySelectorAll(".btnSuccess");
var myDel = document.querySelectorAll(".btnDelete");
var result = document.querySelector("input");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.dataset.class === "operation") {
      result.value += e.target.dataset.value;
    }
  });
});

myDel.forEach((del) => {
  del.addEventListener("click", (x) => {
    if (x.target.dataset.class === "del") {
      result.value = "";
    }
  });
});

equal.forEach((equ) => {
  equ.addEventListener("click", (i) => {
    if (
      i.target.dataset.class === "equal" &&
      result.value !== "" &&
      isNaN(result.value[result.value.length - 1])
    ) {
      console.log(result.value.endsWith(!isNaN(result.value)));
      result.value = eval(result.value);
    }
  });
});
