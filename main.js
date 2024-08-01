let c = document.getElementById("container");

let top1 = document.getElementById("top");
let down1 = document.getElementById("down");
let left1 = document.getElementById("left");
let right1 = document.getElementById("right");


let vitri_nguoichoi;
let vitri_vatchoi;
let diem = 0;
let o_vatchoi;
let o_nguoichoi;
function start () {
  diem = 0;
  vitri_nguoichoi = {
    x: Math.floor(Math.random() * (6 - 1)) + 1,
    y: Math.floor(Math.random() * (6 - 1)) + 1,
  }
  vitri_vatchoi = {
    x: Math.floor(Math.random() * (6 - 1)) + 1,
    y: Math.floor(Math.random() * (6 - 1)) + 1,
  }
  while (vitri_vatchoi.x == vitri_nguoichoi.x && vitri_vatchoi.y == vitri_nguoichoi.y) {
    vitri_vatchoi = {
      x: Math.floor(Math.random() * (6 - 1)) + 1,
      y: Math.floor(Math.random() * (6 - 1)) + 1,
    }
  }
  let a = String(vitri_nguoichoi.x) + String(vitri_nguoichoi.y);
  let b = String(vitri_vatchoi.x) + String(vitri_vatchoi.y);
  o_nguoichoi = document.getElementById(a);
  o_vatchoi = document.getElementById(b);
  o_nguoichoi.style.backgroundColor = "green";
  o_vatchoi.style.backgroundColor = "red";
}

start();
top1.addEventListener("click", () => {
  if (vitri_nguoichoi.x != 1) {
    o_nguoichoi.style.backgroundColor = "white";
    let a = String(vitri_nguoichoi.x-1) + String(vitri_nguoichoi.y);
    vitri_nguoichoi.x--;
    o_nguoichoi = document.getElementById(a);
    o_nguoichoi.style.backgroundColor = "green";
  }
})

down1.addEventListener("click", () => {
  if (vitri_nguoichoi.x != 5) {
    o_nguoichoi.style.backgroundColor = "white";
    let a = String(vitri_nguoichoi.x+1) + String(vitri_nguoichoi.y);
    vitri_nguoichoi.x++;
    o_nguoichoi = document.getElementById(a);
    o_nguoichoi.style.backgroundColor = "green";
  }
})

left1.addEventListener("click", () => {
  if (vitri_nguoichoi.y != 1) {
    o_nguoichoi.style.backgroundColor = "white";
    let a = String(vitri_nguoichoi.x) + String(vitri_nguoichoi.y-1);
    vitri_nguoichoi.y--;
    o_nguoichoi = document.getElementById(a);
    o_nguoichoi.style.backgroundColor = "green";
  }
})

right1.addEventListener("click", () => {
  if (vitri_nguoichoi.y != 5) {
    o_nguoichoi.style.backgroundColor = "white";
    let a = String(vitri_nguoichoi.x) + String(vitri_nguoichoi.y+1);
    vitri_nguoichoi.y++;
    o_nguoichoi = document.getElementById(a);
    o_nguoichoi.style.backgroundColor = "green";
  }
})

