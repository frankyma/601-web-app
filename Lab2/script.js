document.addEventListener("DOMContentLoaded", (event) => {
  function onAdd() {
    const val1 = document.getElementById("first").value;
    const val2 = document.getElementById("second").value;
    addResult = Number(val1) + Number(val2);
    document.getElementById("output").innerHTML = addResult;
  }

  addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", onAdd);

  function onReset() {
    document.getElementById("first").value = undefined;
    document.getElementById("second").value = undefined;
    document.getElementById("output").innerHTML = "";
  }

  addBtn = document.getElementById("reset-btn");
  addBtn.addEventListener("click", onReset);
});
