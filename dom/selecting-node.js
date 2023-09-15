// 1.Dom là gì
// Document Object Model
// DOM attribute
// DOM node
//2. Selecting  nodes
// 2.1 document.querySelector("selector") -> trả về 1 node nếu tồn tại selectors đó, ngược lại nó sẽ trả về null
// selectors: .header, p, body, #heading,
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
const singleNode4 = document.querySelector(".container.heading");
console.log(singleNode4);
// 2.2 document.querySelectorAll("selector") -> trả về 1 NodeList chứa danh sách các node, nếu ko có thì trả về empty
// nó có thể loop và sử dụng forEach
// nó giống array là có thể loop ng ko sử dụng được các phương thuecs như push, pop shift,
const multiNodes = document.querySelector(".item");
console.log(multiNodes);
const multiNodes2 = document.querySelectorAll(".item");
for (let i = 0 ; i < multiNodes2.length; i++){
    console.log(multiNodes[i]);
}
console.log(multiNodes2);
// 2.3 document.getElementsByClassName("className") -> trả về 1 HTMLCollection chứa danh sách các node, nếu ko có thì trả về empty[]
const classNodes = document.getElementsByClassName("item") ;
console.log(classNodes);
// 2.4 document.getElementsByTagName("tagName") -> trả về 1 HTMLCollection chứa danh sách các node, nếu ko có thì trả về empty[]
// console.log(classNodes);
const tagNodes = document.getElementsByTagName("li");
console.log(tagNodes);
// 2.5 document.getElementById("id")  chỉ trả về 1 id
//const idNode = document.getElementById("spinners"); // null
 const idNode = document.querySelector("#spinner");
 // hay dùng nhất document.querySelector(tag, class, id),document.querySelectorAll(tag, class)
console.log(idNode);
