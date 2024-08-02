let c = document.getElementById("container");

let khung_choi = document.getElementById("khung_choi");
let vat_roi = document.getElementById("vat_roi");
let nguoi_choi = document.getElementById("nguoi_choi");
let diem_so = document.getElementById("diem_so");
let b_play = document.getElementById("b_play");

// ham random vi tri cua vat_choi
function random_rong () {
  return Math.floor(Math.random() * (5 - 0)) + 0;
}

// ham tra ve vi tri cua nguoi_choi
function r_left (phantu, value = 0) {
  if (value == 0) {
    let a = phantu.style.left;
    let num = a.indexOf("p");
    a = a.slice(0, num);
    return Number(a);
  }
  else {
    let a = phantu.style.left;
    let num = a.indexOf("p");
    a = Number(a.slice(0, num));
    a += value;
    phantu.style.left = String(a) + "px";
  }
}
function r_bot (phantu, value = 0) {
  if (value == 0) {
    let a = phantu.style.bottom;
    let num = a.indexOf("p");
    a = a.slice(0, num);
    return Number(a);
  }
  else {
    let a = phantu.style.bottom;
    let num = a.indexOf("p");
    a = Number(a.slice(0, num));
    a += value;
    phantu.style.bottom = String(a) + "px";
  }
}

function start_game () {
  khung_choi.style.color = "black";
  b_play.style.display = "none";
  let diem_game = 0;
  const o_vuong = 50;
  vat_roi.style.left = String(random_rong() * o_vuong) + "px";

  let lv = 10; // toc do roi
  let auto_roi = setInterval (() => {
    if (r_bot(vat_roi) >= 0) {
      if (r_bot(nguoi_choi) - r_bot(vat_roi) > 10) {
        let a = setInterval (() => {
          if (r_bot(vat_roi) > 0) {
            r_bot(vat_roi, -1);
          }
          else {
            khung_choi.style.color = "red";
            b_play.style.display = "";
            bd();
          }
        }, 1);
      }
      if (r_bot(vat_roi) <= r_bot(nguoi_choi) && r_left(vat_roi) == r_left(nguoi_choi)) {
        vat_roi.style.left = String(random_rong() * o_vuong) + "px";
        vat_roi.style.bottom = "375px";
        diem_game++;
        diem_so.textContent = "Diem: " + diem_game;
        if (diem_game > 10) {
          lv = 8;
        }
        else if (diem_game > 20) {
          lv = 6;
        }
        else if (diem_game > 35) {
          lv = 4;
        }
        else if (diem_game > 55) {
          lv = 2;
        }
        else if (diem_game > 80) {
          lv = 1;
        }
      } 
      r_bot(vat_roi, -1);
    }
    else {
      khung_choi.style.color = "red";
      b_play.style.display = "";
      bd();
    }
  }, lv);

  // dichuyen 
  document.addEventListener('keydown', function(event) {
    if (event.key === 'w' || event.key === 'W') {
      // di len
      if (r_bot(nguoi_choi) <= 100) {
        r_bot(nguoi_choi, 20);
      }
    }
    if (event.key === 's' || event.key === 'S') {
      // di xuong
      if (r_bot(nguoi_choi) > 0) {
        r_bot(nguoi_choi, -20);
      }
    }
    if (event.key === 'a' || event.key === 'A') {
      // di sang trai
      if (r_left(nguoi_choi) > 0) {
        r_left(nguoi_choi, -o_vuong);
      }
    }
    if (event.key === 'd' || event.key === 'D') {
      // di sang phai
      if (r_left(nguoi_choi) < 200) {
        r_left(nguoi_choi, o_vuong);
      }
    }
  });
}

function bd () {
  location.reload();
}

b_play.addEventListener("click", () => {
  start_game();
})
