const A = document.getElementById("number");
const B = document.getElementById("number1");
const ketka = document.getElementById("ketka");

function sum(){
//    lay gia tri cua a,b
// A = prompt("number");
// B = prompt("b");
// chuyen gia tri do ve kieu so
const ANumber = parseInt(A.value);
const BNumber = parseInt(B.value);
// neu la so thi tinh tong
if(!isNaN(ANumber) && !isNaN(BNumber)){
        ketka.textContent= ( ANumber + BNumber);
}else{
// khong phai so thi tra ve loi
ketka.textContent=("khong phai so thi tra ve loi");
}

}