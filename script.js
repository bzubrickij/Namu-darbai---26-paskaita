"use strict";

let inputVardas = document.getElementById("vardas-input");
let inputPavarde = document.getElementById("pavarde-input");
let inputAmzius = document.getElementById("amzius-input");
let buttonAdd = document.getElementById("button-1");
let buttonRemoveLast = document.getElementById("button-2");
let buttonRemoveFirst = document.getElementById("button-3");
let buttonRemoveFirstAndLast = document.getElementById("button-4");
let table = document.getElementById("table");
let allButtons = document.querySelectorAll("button");
let allInputs = document.querySelectorAll("input");
let rowOne = document.querySelectorAll("#th");

//----------------------Disable Default Event----------------------
for (let x of allButtons) {
  x.addEventListener("click", function (event) {
    event.preventDefault();
  });
}

//-------------------------Button ADD------------------------------
buttonAdd.addEventListener("click", function () {
  if (
    inputVardas.value.length == 0 &&
    inputPavarde.value.length == 0 &&
    inputAmzius.value.length == 0
  ) {
    alert(`PO PARALIAIS!!!Visi laukialiai tusti, RIMTAI....!?`);
    for (let x of allInputs) {
      x.classList.toggle("blink");
    }

    setTimeout(function () {
      for (let x of allInputs) {
        x.classList.remove("blink");
      }
    }, 3000);
  } else if (inputAmzius.value == 0) {
    alert("Metus prasom parasyt normaliai ir kad ne 0, ok!?");
    for (let x of allInputs) {
      x.classList.toggle("blink");
    }

    setTimeout(function () {
      for (let x of allInputs) {
        x.classList.remove("blink");
      }
    }, 3000);
  } else if (inputAmzius.value < 0) {
    for (let x of allInputs) {
      x.classList.toggle("blink");
    }
    alert(
      "Rimtai!? Dv nereikia...Gimk, uzaug - tada galesi pildit kiek nori formu 😊"
    );
    setTimeout(function () {
      for (let x of allInputs) {
        x.classList.remove("blink");
      }
    }, 3000);
  } else {
    var row = table.insertRow(table.rows.length);
    row.classList.add("tr");

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.classList.add("td");
    cell2.classList.add("td");
    cell3.classList.add("td");

    cell1.textContent = inputVardas.value;
    cell2.textContent = inputPavarde.value;
    cell3.textContent = inputAmzius.value;
    inputVardas.value = "";
    inputPavarde.value = "";
    inputAmzius.value = "";
  }
});
//----------------------Remove Last-------------------------------
buttonRemoveLast.addEventListener("click", function () {
  if (table.rows.length > 1) {
    var removeRowLast = table.deleteRow(table.rows.length - 1);
    console.log(removeRowLast);
  } else {
    alert("Na ir ka tu cia dabar trint ruoses?!");
    for (let x of rowOne) {
      x.classList.toggle("blink");
    }
    setTimeout(function () {
      for (let x of rowOne) {
        x.classList.remove("blink");
      }
    }, 3000);
  }
});
//----------------------Remove First-------------------------------
buttonRemoveFirst.addEventListener("click", function () {
  if (table.rows.length > 1) {
    var removeRowFirst = table.deleteRow(1);
    console.log(removeRowFirst);
  } else {
    alert("Na ir ka tu cia dabar trint ruoses?!");
    for (let x of rowOne) {
      x.classList.toggle("blink");
    }
    setTimeout(function () {
      for (let x of rowOne) {
        x.classList.remove("blink");
      }
    }, 3000);
  }
});
//----------------------Remove First & Last-------------------------------
buttonRemoveFirstAndLast.addEventListener("click", function () {
  if (table.rows.length > 2) {
    var removeRowFirst = table.deleteRow(1);
    var removeRowLast = table.deleteRow(table.rows.length - 1);
    console.log(removeRowFirst);
    console.log(removeRowLast);
  } else {
    alert("Na ir ka tu cia dabar trint ruoses?!");
    for (let x of rowOne) {
      x.classList.toggle("blink");
    }

    setTimeout(function () {
      for (let x of rowOne) {
        x.classList.remove("blink");
      }
    }, 3000);
  }
});
