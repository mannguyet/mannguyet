// 1. Đảo ngược 1 chuỗi. Ví dụ: "My name is evodev" -> "evondev is name My";
function reverseString(str){
    if(!str) return null;
    //split(" ")
    // ["My", "name"," is", "evondev"]
    // const arrStr = str.split(" ");
    // const reverseStr = arrStr.split(" ").reverse().join(" ");
    // chaining methods
    // console.log(reverseStr);
    // return reverseStr;
}
console.log(reverseString("My name is evodev"));
// [1,2,3,4,5].reverse{} -> [5,4,3,2,1]
// 2. Đảo ngược 1 chuỗi bao gồm các kí tự. Ví dụ: "I love" -> "evol i";
function reverseWord(str){
    if(!str) return null;
    const arrStr = str.split(" ").map(item => item.split("").reverse().join("")); // ["i", "love"]
 // ["l","o", "v", "e"] -> ["e","v","o","l"] -> evol
 const result = arrStr.reverse().join(" ");
 console.log(result);
}
reverseWord("i love");
// 3. In hoa chữ cái đầu trong chuỗi ví dụ: " MY name is evodev" -> "My Name Is Evodev"
function capitalizeWord(word = ""){
    if (word.length === 0)
    return null;
    let newWord = word.toLowerCase().charAt(0).toUpperCase();
    console.log(newWord);
    let otherWord = word.toLowerCase().slice(1);
    return `${newWord}${otherWord}`;
}
function capitalizeStr(str) {
    if (!str) return null;
   // str.split(" ").map(item => capitalizeWord(item)).join(" ")
   const result = str
   .split(" ")
   .map((item) => capitalizeWord(item))
   .join(" ");
console.log(result);
}
capitalizeStr("my name is evondev");
