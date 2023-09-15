// thêm xóa sửa node trong Javascript
//1. Tạo ra Element trong Javascipt: document.createElement("tag")
const div = document.createElement("div");
// 2. selector.appendChild
// document.body -> thẻ body
// document.querySelector("body")
const body = document.body;
body.appendChild(div);
// 3. document.createTexNode
const text = document.createTextNode("Hello my name is Evondev");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);
// 4. element.cloneNode  tạo bản sao 
const h1Clone = h1.cloneNode(true);// copy hết bản gốc thì ndung true còn chỉ muốn lấy tab thì false
body.appendChild(h1Clone);
// 5. element.hasChildNodes kiểm tra element có phần tử con hay ko, có thì trả về true ko thì trả về false
console.log(h1.hasChildNodes()); // true 
console.log(document.querySelector("h3").hasChildNodes()); // false
