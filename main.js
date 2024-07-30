let c = document.getElementById("container");

let class_add = document.getElementById("class_add");
let class_hienthi = document.getElementById("class_hienthi");
let class_chitiet = document.getElementById("class_chitiet");
let class_add_1 = document.getElementById("class_add_1");

let check = false;
let b_addphone = document.getElementById("b_addphone");
b_addphone.addEventListener("click", () => {
     if (check == false) {
          b_addphone.textContent = "BACK";
          check = true;
          class_add_1.style.display = "";
          class_chitiet.style.display = "none";
          class_hienthi.style.display = "none";
     }
     else {
          b_addphone.textContent = "ADD PHONE";
          check = false;
          class_add_1.style.display = "none";
          class_hienthi.style.display = "";
     }
});

let arrPhone = [];

let b_save = document.getElementById("b_save");
b_save.addEventListener("click", () => {
     let i1 = document.getElementById("i1");
     let i2 = document.getElementById("i2");
     let i3 = document.getElementById("i3");
     let i4 = document.getElementById("i4");
     if (i1.value === "" || i2.value === "") {
          alert("Vui long nhap thong tin");
     }
     else {
          let tam = {
               ten: i1.value,
               sdt: i2.value,
               diachi: i3.value,
               email: i4.value,
          }
          arrPhone.push(tam);
          b_addphone.textContent = "ADD PHONE";
          check = false;
          class_add_1.style.display = "none";
          class_hienthi.style.display = "";
          hienthi1();
          i1.value = "";
          i2.value = "";
          i3.value = "";
          i4.value = "";
     }
})

function hienthi1 () {
     let p = document.createElement("p");
     p.id = arrPhone.length-1;
     let img = document.createElement("img");
     img.src = "https://cdn-icons-png.flaticon.com/128/17279/17279910.png";
     img.style.height = "20px";
     img.style.width = "20px";
     let span = document.createElement("span");
     span.textContent =  arrPhone[arrPhone.length-1].ten;
     span.style.paddingLeft = "10px";
     span.style.fontSize = "22px"
     p.appendChild(img);
     p.appendChild(span);
     class_hienthi.appendChild(p);

     p.addEventListener("click", () => {
          class_chitiet.style.display = "";
          class_add.style.display = "none";
          class_hienthi.style.display = "none";
          let p1 = document.createElement("p");
          let p2 = document.createElement("p");
          let p3 = document.createElement("p");
          let p4 = document.createElement("p");
          p1.textContent = "Name: " + arrPhone[Number(p.id)].ten;
          p2.textContent = "Phone number: " + arrPhone[Number(p.id)].sdt;
          p3.textContent = "Address: " + arrPhone[Number(p.id)].diachi;
          p4.textContent = "Email: " + arrPhone[Number(p.id)].email;
          class_chitiet.appendChild(p1);
          class_chitiet.appendChild(p2);
          class_chitiet.appendChild(p3);
          class_chitiet.appendChild(p4);


          let ct_back = document.getElementById("ct_back");
          ct_back.addEventListener("click", () => {
               class_chitiet.style.display = "none";
               class_add.style.display = "";
               class_hienthi.style.display = "";
               class_chitiet.removeChild(p1);
               class_chitiet.removeChild(p2);
               class_chitiet.removeChild(p3);
               class_chitiet.removeChild(p4);
          })
     })
}
