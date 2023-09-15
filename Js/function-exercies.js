//1. viết function so sánh 2 số a, b tìm ra số lớn hơn
function compare(a = 0, b= 0){
    if (typeof a !== "number" || typeof b !== "number")
    console.log("Please enter a valid number");
    return 0;
    return Math.max(a, b);
}
// console.log(compare(100,"1000"));
// 2. In hoa chữ cái dầu trong chữ ví dụ: vui -> Vui, NAM -> Nam
// capitalize
function capitalize(word = ""){
    if (word.length == 0)
    return null;
    let newWord = word.toLowerCase().charAt(0).toUpperCase();
    // charAt(index)
    // name -> N am
    // hello -> slice(0, 3); -> hel
    // hello -> slice(1); -> ello
    // slice(startIndex, endIndex -1)
    console.log(newWord);
    let otherWord = word.toLowerCase().slice(1);
    return `${newWord}${otherWord}`;
}
// console.log(capitalize("Nam"));
//3. Viết hàm có sử dụng callback (function là parameter của function khác) in ra kết quả của hàm compare đã viết pử trên
function useCallback(a, b, callback){
    let max = compare(a, b);
    callback(max);
}
function printMax(number){
    console.log("Max number is " + number);
}
console.log(useCallback(500, 1000, printMax));