// Vòng lặp
const numbers = [1,2,3,4,5,6,7,8,9,10];
/*
for (let i = 0 ; i < numbers.length; i++){
    body code
}
 */
// for (let i = 0; i < numbers.length; i++ ){
//     console.log(`The index is ${i}`);
// }
/*
length: 5
i = 0
i< 5 -> true
i++ -> 1
result: 0

i = 1;
i< 5 -> true
i++ -> 2
result: 1

i = 2;
i< 5 -> true
i++ -> 3
result: 2

i = 3;
i< 5 -> true
i++ -> 4
result: 3

i = 4;
i< 5 -> true
i++ -> 5
result: 4

i = 5;
i< 5 -> false
loop end
*/
// for (let i = 0; i < numbers.length; i= i+ 2 ){ // i+=2
//     console.log(`The index is ${i}`);
// }
// i++ -> i = i + 1
// numbers(0)
// numbers[numbers.length - 1]
for (let i = 0; i < numbers.length; i++ ){ 
    // console.log(`The index is ${i}`);
    // Nếu giá trị là 8 thì dừng vòng lặp
    
    // console.log(`The value ${numbers[i]}`); // chay den 8 se dung han
    // if (numbers[i] === 8){
    //     break; 
    //     }
    // Nếu giá trị là 8 thì bỏ qua giá trị đó
    if (numbers[i] === 8){
        continue; 
    }
    // console.log(`The value ${numbers[i]}`); // ko hien thi 8
}
// nested loop 
// [[1,2,3,4,5],[1,2,3,4,5]]
for (let i = numbers.length - 1; i >= 0 ; i-- ){ // chạy ngược lại
    console.log(`The value ${numbers[i]}`);
    for (let j = numbers.length -1 ; j >=0 ;j--){
        console.log(j);
    }
}  
// let i = numbers.length - 1 -> lấy ra vị trí cuối cùng của mảng
// i >= 0 -> điều kiện index lớn hơn hoặc bằng 0
// i-- -> i = i - 1
// 1. sao chép mảng dung vòng lặp for
let copyArr = [];
// 1 2 3 4
// push(value)
 for (let i = 0 ; i < numbers.length; i++){
     copyArr.push(numbers[i]);
 }
 console.log(copyArr);
// 2. Đảo ngược từ "i love" -> "evol i"
let str = "i love";
let result = "";
for (let i = str.length - 1; i >=0 ; i--){
    console.log(str[i]);
    result=result + str[i];
}
console.log(result);

// while và do while
// while(condition: điều kiện){ check điều kiện trước sau đó xử lý
// body code
// }
let number = 1;
while(number < 10){
    console.log("number is " + number);
    // điều kiện để dừng
    number = number + 1;
    // number += 1;
    // number++;
}
/*
do{

}while(condition: điều kiện)   do while xử lý trước sau đó mới check đkiện
*/
let number2 = 1;
do {
    console.log("number is " + number2);
    number2++;
}while (number2 < 10);

// for of
// for (value of array){}
let a =[];
for (let value of numbers){
    value += 10;
    // console.log(value);
    a.push(value);
}
 console.log(a);
 for (let c of "evodev"){
    console.log(c);
 }