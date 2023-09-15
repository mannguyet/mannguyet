// String(Chuoi)
"Hello word";
"My  name is Evondev";
`I am frontend developer`;
// double quotes, single quote, backticks (template literal)
const name = "N";
const job = "Designer";
//const name = "Evondev";
//console.log(name);
//console.log(typeof name);
const newStr = "MY name is Evondev and I am Frontend Developer";
const newStr2 = "MY name is " + name + " and I am  " + job;
//console.log(newStr2);
//${variable}
const newStr3 = `My name is ${name} and I am ${job}`;
console.log(newStr3); 
// .length
console.log(newStr3.length);
// index (tu 0) la vi tri cua tung ki tu bao gom ca khonag trang
const myStr = "   Frontend Developer D   ";
console.log (myStr.split(" ")); //tach ra 2 ki tu {"Frontend","Developer"}
console.log (myStr.split("")); //tach tung ki tu  {"F","o","n","t","e"}
console.log (myStr.split("/")); // ko tach giu nguyen {"Frontend Developer"}
console.log (myStr.toLowerCase()); // in thuong het frontend developer
console.log (myStr.toUpperCase());  // in hoa het  FRONTED DEVELOPER
//true
console.log (myStr.startsWith("fontend")); //  xem co bat dau bang fontend ko -> flase
//true
console.log (myStr.endsWith("Developer")); // co kthuc bang Developer ko => true
//true
console.log (myStr.includes("end")); // co chua chu end ko 
//flase
console.log (myStr.includes("abc")); 
console.log (myStr.indexOf("D")); // xem chu D nam ow vtri bn 9
console.log (myStr.lastIndexOf("D")); //xem chu D t2 nam ow vtri bn 19
console.log (myStr.replace("Developer", "Designer")); // thay doi chu Developer thanh Designer
console.log (myStr.repeat(5)); // chay lai 5 lan
//"Frontend Developer D"
// slice(start, end )
console.log(myStr.slice(0, 8)); //lay ki tu tu 0-8 -> frontend
console.log(myStr.slice(0));  // hien thi het Frontend Developer D
console.log(myStr.slice(-5));  //lay tu duoi len per D
console.log(myStr.trim()); // bo khoang trong 2 ben
console.log(myStr.trimStart()); // bo khoang trong ben trai
console.log(myStr.trimEnd()); // bo khoang trong ben phai
const myStr2 = "Frontend";
console.log(myStr2.charAt(0)); //lay ra ki tu dau tien
console.log(myStr2.charCodeAt(0));
// substr -> lay ra 1 phan cua chuoi (string)
// substr(index, length) -> index: vi tri , length : so luong  ki tu muon lay
console.log(myStr2.substr(1, 5));  // ronte
// substring -> lay ra cac ki tu cua chuoi (string)
// substring (start index , end index );
console.log(myStr2.substring(1, 5));  // ront
const myStr3 = "    Frontend Developer D   "
// Loại bỏ khoảng trống 2 bên, đưa tất cả về in hoa, thay chữ "Developer D " thành chữ "Developer and Designer" , sau đó repeat 2 lần;
console.log(myStr3.trim().replace("Developer D", "Developer and Designer").toUpperCase().repeat(2));
