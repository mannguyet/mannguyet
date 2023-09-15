//1. selector.getAttribute("attribute") -> lấy ra giá trị của attribute selector
// selector: 1 cái
// attibute -> thuộc tính: href, id, class, src, style
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
// li.getAttribute("class");
li.forEach(item => {
    console.log(item.getAttribute("class"));

});
console.log(li);
// 2. selector.setAttribute("attribute",value) -> set giá trị cho attribute nào đó của selector
link.setAttribute("target","_blank");
const listLinks = document.querySelectorAll("a.link");
listLinks.forEach((item) => item.setAttribute("target","_blank"));
// 3. selector.removeAttribute("attribute") xoa attribute cuar selector
const p = document.getElementById("spinner");
p.removeAttribute("style");
// 4. hasAttribute("attribute") -> kiểm tra selecter có attribute bào đó hay ko, nếu có -> true ngược ko có trả về false
console.log(p.hasAttribute("class")); // flase
console.log(p.hasAttribute("id")); // true
if (p.hasAttribute("id")){
    // do something here
}