// số nguyên 
// số thập phân 3,4 5,8 -> 3.4 5.8
console.log(5 + 7);
console.log(typeof 10);
const number1 = "5"; //string
const number2 = "4.8";
console.log(parseInt(number1)); //5 doi strinh thanh so nguuyen
console.log(parseFloat(number2)); //4.8 so thap phan
const number3 = -10;
// Math.abs(value)
console.log(Math.abs(number3)); //10 chuyen ve gtri tuyet doi
// Math.floor(value) -> lam tron xg vi du: 4.3 -> 4
console.log(Math.floor(4.3));
// Math.ceil(value) -> lam tron len vi du: 4.3 -> 5
console.log(Math.ceil(4.3)); //5
// Math.round(value) -> lam tron gan nhat
console.log(Math.round(4.5)); //4.5 -> 5, dưới 4.5 -> 4
// toFixed(number) vi du: 0.33333 -> 0.33
// toFixed(2)  bien thanh tring con muon thanh so gán
console.log(parseFloat((1/3).toFixed(2)));
console.log(Math.ceil(Math.random() * 10));
// Math.max (1.3, -5, 100); -> tra ra con so lon nhat
console.log(`Max: ${Math.max(1, 2, 3)}`);
// Math.min (1.3, -5, 100); -> tra ra con so nho nhat
console.log(`Min: ${Math.min(1, 2, 3)}`);
// Math.pow(number1, number2); Math.pow(3, 2) -> 3^2 -> 9
console.log(Math.pow(3,2));
//isNaN(value) vs Numbeer.isNaN(value)
// NaN -> ko phai so
console.log(isNaN("this is string")); // la string -> true
console.log(isNaN(" 12345 ")); // so ->false
console.log(Number.isNaN("12345")); // false
console.log(isNaN(NaN)); // true
