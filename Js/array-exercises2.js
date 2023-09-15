// 1. Cho 1 mảng gồm nhiều giá trị [1, 1000, false, null, "evondev","", undefined, "javascript",[1,2,3], NaN].Viết chương trình loại bỏ các 
// giá trị là falsy ra khỏi mảng chỉ giữ lại giá trị là falsy ra khỏi mảng chỉ giữ lại giá tri truthy. Gợi ý giá trị falsy là 0 null undefined false "" NaN
// 2. Cho 1 mảng phức tạp [[1,2,3,[false,null]], [1,5,6,["javascript"]],[888,666,[90]]].Và kết quả mong muốn là [1,2,3,false,null,1,5,6,"javascript",888,666,90]
//1.
const array = [1,1000,false,null, "evondev","", undefined, "javascript",[1,2,3], NaN];
// new Boolean
// Boolean
const filterFalsy = array.filter(item => Boolean(item));
console.log(filterFalsy);

// 2.
const complexArray = [
    [1,2,3,[false,null]],
    [1,5,6,["javascript"]],
    [888,666,[90]],
];
// flat(number)
const result = complexArray.flat(1);
console.log(result); 
// 3. Đảo ngược số nguyên. Ví dụ 1234 -> 4321 , -567 -> -765
// Math.sign(123) -> 1
// Math.sign(-123) -> -1
function reverseNumber(number){
    // convert to String
    // split("") -> [value]
    // reverse()
    // join("")
    const value =
     parseInt(number.toString().split("").reverse().join(""))*
    Math.sign(number);
    console.log(value);
}
reverseNumber(-1234);
// 4.Viết chương trình có tên là fizzBUzz với đầu vao là 1 số nguyên, và cho chạy từ 1 cho tới số nguyên đó rồi kiểm tra nếu số chia hết cho 2 thì in ra chữ "Fizz", nếu chia hết cho 3 thì ini ra chữ " Buzz" ,nếu chia hết cho 2 và 3 thì in ra "FizzBuzz"
function FizzBuzz(number){
    for (let i = 1;i <= number; i++){
        if (i % 2 === 0 && i % 3 === 0){
            console.log("FizzBuzz");
        }else if (i % 2 === 0){
            console.log("Fizz");
        }else if (i % 3 === 0){
            console.log("Buzz");
        }
    }
}
FizzBuzz(15);
// + = * / %
// 6 % 2 = 3 du 0
// 6 % 4 = 1 du 2
// 5. Cho 1 chuỗi bất kỳ, đếm só lượng kí tự 'vowels' có trong chuỗi.
// vowels là các kí tự u e o a i
// Ví dụ "evondev" -> 3
function countVowels(String){
    let count = 0;
    const characters = "ueoai";
    for (let c of String.toLowerCase()){
        if (characters.includes(c)) count = count + 1;
   }
    return count;
}
console.log(countVowels("EVONDEV"));
// "evondev" -> e v o n d e v
// 6. Cho 1 mảng các giá trị số [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]. Viết 1 function trả về 1 mảng với cá giá trị unique. kết quả ở trên sẽ là [1,2,3,5,7,6]
function unique(arr){
    let result = [];
    if(!Array.isArray(arr)) return result;
    // Boolean
    // Array.isArray(array) -> true nguoc lai thi tra false (ktra xem co phai la mang hay ko)
    // [1,2,3,5,7,6]
    for ( let i = 0; i < arr.length; i++){
        if ( !result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(unique([1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]));
console.log(unique("abc")); // []
// 7. Viết 1 function xử lý từ 1 mảng lớn thành nhiều mảng con dựa vào 1 số nguyên đầu vào. Ví dụ ([1,2,3,4,5],2) -> [[1,2],[3,4],[5]]
// ([1,2,3,4,5,6], 3) -> [[1,2,3],[4,5,6]]
function splitArray(array, number){
   let result = [];
   // slice(start,end)
   let index = 0;
   while(index < array.length){
    result.push(array.slice(index, number + index));
    index = index + number;
   }
   console.log(result);
   return result;
}
splitArray([1,2,3,4,5,6], 2);