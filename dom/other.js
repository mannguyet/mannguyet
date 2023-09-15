// document.title
// document.head
console.log(document.title); // Document
document.title = "Welcome to Javascript course"; // đổi title
// document.head
console.log(document.head);
//<meta name="viewport" content="width=device-width, initial-scale=1.0">
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width= device-width, initial-scale = 1.0");
//  c1 document.head.appendChild(meta);
const head = document.getElementsByTagName("head");
head[0].appendChild(meta);
console.log(head);
// insertBefore
// parentNode.insertBefore(newnode, existingnode)
const ul = document.querySelector("ul");
 document.body.insertBefore(ul,document.querySelector("h3")); // cho <ul> lên trước h3
// insertAdjacentElement
// document.querySelector("h3").insertAdjacentElement("beforebegin",ul);
// replaceChild
// node.replaceChild(newnode, oldnode)
const span = document.createElement("span");
span.textContent = "abc";
document.body.replaceChild(span, document.querySelector(".boxed"));
// convert HTML collection, NodeList to Array
const li = document.getElementsByTagName("li");
console.log(li);
//li.forEach((item) => item);
// Array.from(HTML collection or NodeList)
// [...HTMLCOLLECT], [...NodeList]
[...li].filter((item) => item);
console.log(li);
// html body head title
// html: document.body
// head: document.head
// title: deocument.title