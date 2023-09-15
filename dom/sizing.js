// 1. offsetWidth, offsetHeight, offsetLeft, offsetParent, OffsetTop
function log(value) {
   console.log(value);
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth); // độ rộng của phần tử
log(boxed.offsetHeight); // chiều cao của phần tử
log(boxed.offsetLeft); // vị trí của nó so với bên trái
log(boxed.offsetTop); // vị trí của nó so với phía trên
log(boxed.offsetParent); // lấy ra phần tử cha để lấy giá trị của phần tử cha
// 2. clientWidth, clientHeight, clientLeft, clientTop
log(boxed.clientWidth); // độ rộng của phần tử trừ đi border
log(boxed.clientHeight); // chiều cao của phần tử trừ đi border
log(boxed.clientLeft); // vị trí của nó so với bên trái border
log(boxed.clientTop); // vị trí của nó so với phía trên border
// 3. window.innerWidth, window.outerWidth, window.innerHeight, window.outerHeight
log(window.innerHeight);
log(window.outerHeight);
log(window.innerWidth);
log(window.outerWidth);
// 4. selector.getBoundingClientrect() -> lấy ra tọa độ, kích thước của phần tử
log(boxed.getBoundingClientRect());
// left, x: vị trí của khối so với bên trái
// top: vị trí của khối so với phía trên
// bottom: chiều cao của khối + top
// right: độ rộng của khối + lèt
// width: dộ rộng
// height: chiều cao
// Sự khác nhau giữa Node List và HTML Collection
const li = document.getElementsByTagName("li"); // HTml Collection
const li2 = document.querySelectorAll("li"); // NodeList
log(li);
log(li2);
// Điểm giống: có thể truy cập bằng index, có độ dài (length), giống mảng nhg ko hẳn là mảng tức là ko sử dụng được những phương thức đã học như là pop, shift, push, map, filter
// HTML Collection: ko sử dựng được forEach
// NodeList: sử dụng được forEach
for (let i = 0; i < li.length; i++){
   log(li(i));
}
//Sự khác nhau giữa parentNode và parentElement
// parentElement có thể null
// document.documentElement -> lấy thẻ html
log(document.documentElement.parentElement); // null
log(document.documentElement.parentNode); // document



