const now = new Date();
// built-in object
console.log(now)
//Fri Aug 04 2023 16:33:14 GMT+0900
// Timezone: GMT+0900 (日本標準時)
// Second(秒): 14
// Minute(分): 33
// Hour(時): 16
// Year(年): 2023
// Month(月): Aug
// Day(日): 04
// Day of the week(曜日): Fri
// Timestamp & Epoch time
// Unix Time
// timestamp tinh ra ket qua la miliseconds
console.log(now.getTime()); // print timestamp
console.log(new Date(0));
// 4 cach su dung new Date
// new Date() -> in ra ngay gio hien tai
// new Date(timestamp) -> dua vao timestamp de in ra ngay gio
// new Date(date string)
// new Date(year, month, day, hours, minutes, seconds, miliseconds)
console.log(new Date(1691326103699));
console.log(new Date("Sun Aug 06 2023 21:48:23 GMT+0900 (日本標準時)"));
console.log(new Date(2021, 6, 1, 23, 23, 23,23));
// Cac ham get trong Date
const birthday = new Date(1994, 3, 3);
//in ra nam
console.log(birthday.getFullYear()); // 1994 in ra nam
// in ra thang
// getMonth(): 0~11
// 0 thang 1(Jan) 11 Thang 12(Dec)
console.log(birthday.getMonth()); // 3
// in ra ngay cua thang: 1~31
console.log(birthday.getDate()); //3
// in ra thu cua tuan 
// 0~6: 0: chu nhat, &: thu bay
console.log(birthday.getDay()); //0
//in ra gio
console.log(birthday.getHours()); 
//in ra phut
console.log(birthday.getMinutes()); 
//in ra giay
console.log(birthday.getSeconds()); 
// in ra mili giay
console.log(birthday.getMilliseconds()); 
// in ra timestamp
console.log(birthday.getTime()); // 765298800000
// Cac ham set trong Date
console.log(`My birthday:${birthday}`);
birthday.setFullYear(1993);
birthday.setMonth(10);
birthday.setDate(30);
birthday.setHours(23);
birthday.setMinutes(23);
birthday.setSeconds(23);
console.log(`My birthday after update: ${birthday}`);
// UTC gio quoc te
// https://en.wikipedia.org/wiki/Coordinated_Universal_Time
// in ra nam 
console.log(birthday.getUTCFullYear()); // 1994 in ra nam
// in ra thang
// getMonth(): 0~11
// 0 thang 1(Jan) 11 Thang 12(Dec)
console.log(birthday.getUTCMonth()); 
// in ra ngay cua thang: 1~31
console.log(birthday.getUTCDate()); 
// in ra thu cua tuan 
// 0~6: 0: chu nhat, &: thu bay
console.log(birthday.getUTCDay()); 
//in ra gio
console.log(birthday.getUTCHours()); 
//in ra phut
console.log(birthday.getUTCMinutes()); 
//in ra giay
console.log(birthday.getUTCSeconds()); 
// in ra mili giay
console.log(birthday.getUTCMilliseconds()); 
// date string
console.log(now.toDateString()); //Sun Aug 06 2023
console.log(now.toTimeString()); //22:36:20 GMT+0900 (日本標準時)
console.log(now.toLocaleDateString()); // m/dd/yyyy -> 6/8/2023
// 8/6/2023
console.log(now.toLocaleTimeString("vi-VI")); // VI vietnam 8/6/2023
console.log(now.toISOString()); // 2023-08-06T13:42:03.746Z
// 8/06/2023
// input: Thu Jan 8 2023 09:00:00 GMT+0900 (日本標準時)
const myTime = (new Date("Thu May 8 2023 09:00:00 GMT+0900 (日本標準時)"));
const myYear = myTime.getFullYear(); // 2023
const myMonth = myTime.getMonth()+1;// 6
const myDate = myTime.getDate(); // 8
const prefixMonth = myMonth < 10 ? "0" : "" ;
console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`);
// setTimeout vs setInterval
// const timer1 = setTimeout(function(){
//     alert ("call me after 3 seconds");
// }, 3000);
const timer = setInterval(function(){
    console.log("call me");
},1000);
clearInterval(timer);

