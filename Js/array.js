// Mang
const a = "a";
const b = "b";
const c = "c";
const d = "d";
// 2 cach tao mang
// array literal
// const students1 = [];
// array constructor
const students2 = new Array();
// Vi du 1 mang 
// Mang phuc tap [0, false, underfined, null, "evondev", ["evondev", false, 1200,[]]]
// Mang don gian [0, false, underfined, null, "evondev"]
// [1,2,3,4,5]["a","b","c","d"][false, true, true]
// []: empty array -> mang rong
// const students1 = ["evondev", "tuan", "nam","thanh","trung"];
// 0 1 2 3 4
// index: vị trí của phần tử (giá trị) trong mảng và nó bắt đầu tu 0
// length: độ dài của mảng, nó đếm từ 1
// truy xuất trong mảng -> strudents1[index]
// console.log(students1[0]);
// Nếu ko có vị trí index thì trả về undefined
// console.log(students1[5]); // undefined
// lấy phần tử cuối cùng trong mảng = độ dài của mảng - 1 -> array.length - 1
// console.log(students1[students1.length - 1]); // trung
// students1.length = 0;
// console.log(students1);
// []: empty array, mang rong
// Phương thức hay dùng của mảng nên biết
const students1 = ["evondev", "tuan", "nam","thanh","trung", "tuan"];
// arrayName.method
// length -> trả về độ dài của mảng
console.log("-------array.length-------");
console.log(students1.length);
// reverse -> Đảo ngược giá trị trong mảng
console.log("-------array.reverse-------");
// console.log(students1.reverse());
// join -> nối các phần tử trong mảng thành chuỗi
console.log("-------array.join-------");
console.log(students1.join());
console.log(students1.join(""));
// includes -> Kiểm tra mảng đó có chứa phần tử nào đó ko
console.log("-------array.includes-------");
console.log(students1.includes("evondev"));  // true
console.log(students1.includes("abc"));  // false
// indexOf -> trả về vị trí của phần tử tìm thấy đầu tiên
console.log("-------array.indexOf-------");
console.log(students1.indexOf("tuan")); // 1
// lastIndexOf -> trả về vị trí của phần tử tìm thấy cuối cùng
console.log("-------array.lastIndexOf-------");
console.log(students1.lastIndexOf("tuan"));// 5
// push -> thêm phần tử vào cuối mảng
console.log("-------array.push-------");
console.log(students1.push("javascrip"));
console.log(students1);
// unshift -> thêm phần tử vào đầu mảng
console.log("-------array.unshift-------");
console.log(students1.unshift("Frontend"));
console.log(students1);
// pop -> xóa phần tử cuối cùng trong mảng
console.log(students1);
students1.pop();
console.log(students1);
// shift -> xóa phần tử đầu tiên trong mảng
console.log(students1);
students1.shift();
console.log(students1);
