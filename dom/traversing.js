// 1. parentNode, parentElement, removeChild
// parentNode vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement.parentElement);
// selector.parentNode hoac selector.parentElement.removeChild(selector)
// span.parentNode.removeChild(span); // xóa span có trong h3
//span.remove();
// 2. nextElementSibing: tìm tới phần tử kế tiếp vs previousElementSibing: tìm tới phần tử đứng sau nó 
const nextSpan = span.nextElementSibling;
console.log(nextSpan);
const previousLink = span.previousElementSibling;
console.log(previousLink);
// 3. childNode: trả về hết các node bên trong bao gồm textNodes vs children: trả về các node ko bao gồm textNodes
console.log(span.childNodes); // text <strong> text
console.log(span.children);
// 4. firstChild vs firstElementChild
console.log(span.firstChild);// text
console.log(span.firstElementChild);// <strong>
// 5. lastChild vs lastElementChild
console.log(span.lastChild);// text
console.log(span.lastElementChild);// <strong>
// 6. nextSibing vs previousSibing
console.log(span.nextSibling);
console.log(span.previousSibling);