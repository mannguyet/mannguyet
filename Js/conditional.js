// Điều kiện 条件
// if (condition){
// su dung code
// }
const isRich = false;
const myMoney = 1000000000;
if (isRich){
    console.log("giau toi se mua xe");
}else if(myMoney > 1000){
    console.log("toi se tiet kiem tien")
}
// prompt, confirm, alert
// alert ("Your website has been hackwd");
// const yourName = prompt("Vui long nhap vao ten cua ban", "");
// console.log(yourName);
// const isYouMoney = confirm("Day co phai la tien cua ban hay ko");
// console.log(isYouMoney);
// switch case
// Bai 1: Nhap vao so tuoi va kiem tra neu so tuoi lon hon hoac bang 18 thi duoc coi phim rap nguoc laij thi ko duoc vao
// const yourAge = prompt("Vui long nhap vao so tuoi cua ban", "");
// console.log(typeof yourAge); // check typeof variable
// let message = "すみません、入れないです。"; //  let mac dinh 
// if(Number(yourAge)>= 18){
//     message = "入れる";
// }
// // }else{
// //     message = "すみません、入れないです。";
// //     }
// // console.log(message);
// alert(message);
// Bai 2: Cho 2 so a va b , tim ra so lon hon
const a = 5;
const b = 10;
if(a>b){
    alert(`So lon hon la so ${a}`);
}else if (a<b){
    alert(`So lon hon la so ${b}`);
}else{
    alert("Khong co so nao lon hown so nao ca");
}
