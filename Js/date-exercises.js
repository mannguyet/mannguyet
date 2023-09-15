// 1. Viết chương trình nhập vào năm sinh và in ra số tuổi 
// 2. Viết chương trình đếm ngược thời gian theo từng giây (countdown) dựa vào thời gian dầu vào. Ví dụ thời gian làm bài là 30 ph nếu chạy về 0 thì thông báo hết thời gian 
// 3. Viết chuong trình có tên là timeSince, đàu vào là thời gian và tính thời gian đầu vào so với thờ gian hiện tại. 
//ví dụ bạn đang chat với 1 bạn A, sau đó bạn a offline và sau đó vài phút thì hiển thị bạn A vừa online 3 phut trước , 3 ngày trước , 2 tháng trước, 30 giây trước  1 năm trước...
// 1
function getAge(year){
    // currentyear - year
    const now = new Date();
    const currentYear = now.getFullYear(); // 2023
 currentYear - year;
}
const yourAge = getAge(1999);
// console.log(`Năm nay bạn ${yourAge} tuổi`);
// 2
function countdown(minutes = 1 ){
    let seconds = minutes * 60 ;// 60
    let counter = 0;
    const timer = setInterval(function() {
      counter = counter + 1;
    //   console.log(counter);
      //counter += 1;
      if( counter === seconds){
        clearInterval(timer);
        console.log("Your time is end!");
      }
    },1000);
}
countdown(1);
// 3 
function timeSince(date){
    // current Time - date
    const now = new Date();
    const yourDate = new Date(date);
    const seconds = Math.floor((now.getTime() - yourDate.getTime()) /1000); // in ra so giay
    if (seconds < 0){
       alert("your time is invalid");
       return;
    }
    let timer = seconds / 31536000;
    if(timer > 1 ){
       console.log(`${Math.floor(timer)}nam truoc `);
       return;
    }
     timer = seconds / 2678400;
    if(timer > 1 ){
        console.log(`${Math.floor(timer)} thang truoc `);
        return;
    }
    timer = seconds / 604800;
    if(timer > 1 ){
        console.log(`${Math.floor(timer)} tuan truoc `);
        return;
    }
    timer = seconds / 86400;
    if(timer > 1 ){
         console.log(`${Math.floor(timer)} ngay truoc `);
         return;
    }
    timer = seconds / 3600;
    if(timer > 1 ){
         console.log(`${Math.floor(timer)} gio truoc `);
         return;
    }
    timer = seconds / 60;
    if(timer > 1 ){
         console.log(`${Math.floor(timer)} phut truoc `);
         return;
    }
    timer = seconds;
    if (timer > 1 ){
        console.log(`${Math.floor(timer)}giay truoc`);
    }
    return;
}
// 3 phut trước , 3 ngày trước , 2 tháng trước, 30 giây trước  1 năm trước
// 1 nam = 365 * 24 * 60 * 60 = 31536000
// 1 thang = 31 * 24 * 60 * 60 = 2678400
// 1 tuan = 7 * 24 * 60 * 60 = 604800
// 1 ngay = 1 * 24 * 60 * 60 = 86400
// 1 gio =  1 * 60 * 60 = 3600
// 1 phut = 1 * 60 = 60
timeSince("Sun Aug 06 2023 00:01:01 GMT+0900 (日本標準時)");