let c = document.getElementById("container");

let top1 = document.getElementById("top");
let down1 = document.getElementById("down");
let left1 = document.getElementById("left");
let right1 = document.getElementById("right");
let diem1 = document.getElementById("diem");
let bo_button = document.getElementById("bo_button");
let reset = document.getElementById("reset");


function start () {
  let start1 = 0; // 0 = chua ket thuc, 1 = ket thuc
  let vitri_nguoichoi = 0;
  let vitri_vatchoi = 0;
  let diem = 0;
  let o_vatchoi;
  let o_nguoichoi;
  bo_button.style.display = "";
  reset.style.display = "none";
  diem = 0;
  vitri_nguoichoi = {
    x: 4,
    y: 1,
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
  function andiem() {
    if (vitri_vatchoi.x == vitri_nguoichoi.x && vitri_vatchoi.y == vitri_nguoichoi.y) {
      diem++;
      diem1.textContent = "Diem: " + diem;
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
      let b = String(vitri_vatchoi.x) + String(vitri_vatchoi.y);
      o_vatchoi = document.getElementById(b);
      o_vatchoi.style.backgroundColor = "red";
    }
  }
  
  function dilen() {
    check1 = 2;
    if (start1 == 0) {
      if (vitri_nguoichoi.x == 1) {
        start1 = 1;
      }
      if (vitri_nguoichoi.x > 1) {
        o_nguoichoi.style.backgroundColor = "white";
        let a = String(vitri_nguoichoi.x-1) + String(vitri_nguoichoi.y);
        vitri_nguoichoi.x--;
        o_nguoichoi = document.getElementById(a);
        o_nguoichoi.style.backgroundColor = "green";
        andiem();
      }
    }
  }
  
  function dixuong () {
    check1 = 3;
    if (start1 == 0) {
      if (vitri_nguoichoi.x == 5) {
        start1 = 1;
      }
      if (vitri_nguoichoi.x < 5) {
        o_nguoichoi.style.backgroundColor = "white";
        let a = String(vitri_nguoichoi.x+1) + String(vitri_nguoichoi.y);
        vitri_nguoichoi.x++;
        o_nguoichoi = document.getElementById(a);
        o_nguoichoi.style.backgroundColor = "green";
        andiem();
      }
    }
  }
  
  function disangtrai () {
    check1 = 1;
    if (start1 == 0) {
      if (vitri_nguoichoi.y == 1) {
        start1 = 1;
      }
      if (vitri_nguoichoi.y > 1) {
        o_nguoichoi.style.backgroundColor = "white";
        let a = String(vitri_nguoichoi.x) + String(vitri_nguoichoi.y-1);
        vitri_nguoichoi.y--;
        o_nguoichoi = document.getElementById(a);
        o_nguoichoi.style.backgroundColor = "green";
        andiem();
      }
    }
  }
  
  function disangphia () {
    check1 = 0;
    if (start1 == 0) {
      if (vitri_nguoichoi.y == 5) {
        start1 = 1;
      }
      if (vitri_nguoichoi.y < 5) {
        o_nguoichoi.style.backgroundColor = "white";
        let a = String(vitri_nguoichoi.x) + String(vitri_nguoichoi.y+1);
        vitri_nguoichoi.y++;
        o_nguoichoi = document.getElementById(a);
        o_nguoichoi.style.backgroundColor = "green";
        andiem();
      }
    }
  }
  
  
  let check1 = 0;
  // 0 -> ; 1 <- ; 2 ^ ; 3 v ;
  let g = setInterval(() => {
    if (check1 == 0) disangphia();
    else if (check1 == 1) disangtrai();
    else if (check1 == 2) dilen();
    else if (check1 == 3) dixuong();
    if (start1 == 1) {
      diem1.textContent = "Tro choi ket thuc. ban duoc " + diem + " diem";
      clearInterval(g);
      bo_button.style.display = "none";
      reset.style.display = "";
      o_nguoichoi.style.backgroundColor = "white";
      o_vatchoi.style.backgroundColor = "white";
    }
  }, 1000)
  
  top1.addEventListener("click", () => {
    if (check1 != 2) dilen();
  })
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'w' || event.key === 'W') {
      if (check1 != 2) dilen();
    }
  });
  
  down1.addEventListener("click", () => {
    if (check1 != 3) dixuong();
  })
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 's' || event.key === 'S') {
      if (check1 != 3) dixuong();
    }
  });
  
  left1.addEventListener("click", () => {
    if (check1 != 1) disangtrai();
  })
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
      if (check1 != 1) disangtrai();
    }
  });
  
  right1.addEventListener("click", () => {
    if (check1 != 0) disangphia();
  })
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'd' || event.key === 'D') {
      if (check1 != 0) disangphia();
    }
  });
  
  reset.addEventListener("click", () => {
    location.reload();
    c.style.display = "none";
  })
}

start()
