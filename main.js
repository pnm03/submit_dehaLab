let input = document.getElementById("input");
let button = document.getElementById("button");
let text = document.getElementById("text");
text.textContent = "Nhap so can doan"
let choilai = 0;

function start() {
  let random = parseInt(Math.random() * 100);
  console.log(random);
  let dem = 0;
  return function() {
    return {
      random,
      dem,
    }
  }
}

let random = start()().random;
let dem = start()().dem;

button.addEventListener("click", () => {
  if (choilai == 1) {
    choilai = 0;
    random = start()().random;
    dem = start()().dem;
    button.textContent = "Doan So";
    text.textContent = "Nhap so can doan";
  }
  else {
    let value = input.value;
    if (value == "") {
      text.textContent = "Vui long nhap so ban doan";
      text.style.color = "red";
      input.style.border = "solid 1px red";
    }
    else if (value > random) {
      text.textContent = "So ban doan lon hon";
      text.style.color = "rgb(240, 143, 160)";
      input.style.border = "solid 1px rgb(240, 143, 160)";
      ++dem;
      input.value = "";
    }
    else if (value < random) {
      text.textContent = "So ban doan nho hon";
      text.style.color = "rgb(32, 206, 125)";
      input.style.border = "solid 1px rgb(32, 206, 125)";
      ++dem;
      input.value = "";
    }
    else if (value == random) {
      ++dem;
      text.textContent = "Chuc mung! Ban da thang sau " + dem + " lan dem";
      text.style.color = "rgb(87, 87, 87)";
      input.style.border = "solid 1px rgb(87, 87, 87)";
      input.value = "";
      choilai = 1;
      button.textContent = "Choi Lai";
      input.textContent = "";
    }
  }
})
