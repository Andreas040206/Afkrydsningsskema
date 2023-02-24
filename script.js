const content = document.createElement("div");
content.classList.add("content");

class SkemaCon {
  constructor(num) {
    this.num = num;
  }
  get SkemaElement() {
    let e = document.createElement("div");
    e.classList.add("skemaElement");

    let numEl = document.createElement("div");
    numEl.classList.add("skemaNum");
    numEl.textContent = this.num;

    e.appendChild(numEl);

    let jaMulighed = document.createElement("div");
    jaMulighed.classList.add("JaNejText");
    jaMulighed.textContent = "Ja";

    let nejMulighed = document.createElement("div");
    nejMulighed.classList.add("JaNejText");
    nejMulighed.textContent = "Nej";

    for (let j = 0; j < 3; j++) {
      let el = document.createElement("div");
      e.appendChild(el);
    }

    e.appendChild(jaMulighed);
    e.appendChild(nejMulighed);

    for (let i = 1; i < 5; i++) {
      let sideNum = document.createElement("div");
      sideNum.classList.add("sideNum");
      sideNum.textContent = i + ".";

      let jaBtn = document.createElement("button");
      jaBtn.classList.add("krydsBtn");
      jaBtn.classList.add("krydsBtnJa");

      let nejBtn = document.createElement("button");
      nejBtn.classList.add("krydsBtn");

      jaBtn.addEventListener("click", function () {
        if (jaBtn.textContent === "") {
          jaBtn.textContent = "X";
          if ((nejBtn.textContent = "X")) {
            nejBtn.textContent = "";
          }
        } else {
          jaBtn.textContent = "";
        }
      });
      nejBtn.addEventListener("click", function () {
        if (nejBtn.textContent === "") {
          nejBtn.textContent = "X";
          if ((jaBtn.textContent = "X")) {
            jaBtn.textContent = "";
          }
        } else {
          nejBtn.textContent = "";
        }
      });

      e.appendChild(sideNum);
      e.appendChild(jaBtn);
      e.appendChild(nejBtn);
    }

    return e;
  }
}

function appenAllSkema() {
  for (let i = 1; i <= 25; i++) {
    let e = new SkemaCon(i);
    content.appendChild(e.SkemaElement);
  }
}

appenAllSkema();

document.body.appendChild(content);
