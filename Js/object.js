// cách khai báo object
// object literal
const objectLiteral = {};
// object constructor
const objectConstructor = new Object();
const student = {
    name: "evondev",
    age: 27,
    male : true,
    "last-name": " N",
    hi: function(){
        console.log("hello evondev");
    },
};
// properties
// method
// 2 cach truy xuat gtri cua object
// 2.1 Dot notation.
console.log(student.name);
// 2.2 Bracket notation ["key"]
console.log(student["age"]);
console.log(student["last-name"]);
// thay doi gia tri cuar object
student.age = 20;
student.male = "male";
student.isDeveloper = true;
student["is-developer"] = false;
student.hello = function(){
    console.log("hello");
}
// is-developer
// isDeveloper
console.log(student);
// Cach xoa gtri trong Object
delete student["last-name"];
// for in 
for (let key in student){
    if (key === "name"){
        console.log("hello name");
    }
    // console.log(key);
    // console.log(student[key]);
    const value = student[key];
    console.log(`${key}: ${value}`);
}
// Object.keys() -> trả về 1 mảng chứa tất cả các keys của object
const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);
// Object.value(object) -> trả về 1 mảng chứa tất cả các giá trị của object
const values = Object.values(student);
console.log(values);
// Object.entries(object) -> trả về 1 mảng nested [["name","evondev"],["age", 20]]gồm có key và value
const entries = Object.entries(student);
console.log(entries);
// Object.assign() gop object
const a = {
    firstName : "M",
};
const b ={
    lassName: " N",
};
const c = Object.assign(a,b);
console.log(c);
const d = {...a,...b};
console.log(d);
// Object.freeze(object) -> ngan chan chinh sua key va value cua object
const car = {
    brand: "BMW"
};
const newCar = Object.freeze(car);
newCar.brand = "audi";
console.log(newCar);
// Object.seal(object) -> Cho phep chinh sua key value nhg ko duoc them key value moi
const user ={
    userName: "evondev",
    school:{
        name: "Cao Thang",
        room :{
            name : "IT",
        
        },
    },
};
// const newUser = Object.seal(user);
// newUser.userName = "MTN";
// newUser.lassName = "Join";
// console.log(newUser);
// [...array]{...object} -> sao chep 1 Object
const newUser = {...user};
newUser.userName = "MTN";
console.log(user);
console.log(newUser);
// Object.assign
console.log(newUser);
const newUser2 = Object.assign({},user);
// newUser2.school.name= "Designer";
console.log(newUser2);
// clone nested object danh cho cua truc phuc tap
const newUser3 = JSON.parse(JSON.stringify(user));
newUser3.school.name= "Designer";
console.log("New User3");
console.log(newUser3);
// this keyword
// this nó sẽ đề cập tới object gần nhất
const student2 = {
    name: "evondev",
    age: 27,
    male : true,
    "last-name": " N",
    hi: function(){
        console.log(`My name is ${this.name} and i am ${this.age} years old`);
    },
    fullname:{
        name : " Tran Anh Tuan",
    },
};
student2.hi();
// optional chaining
console.log(student2.fullname); // undefined
//console.log(student2.full.name); // undefined.name -> Cannot read property 'name' of undefiened
if(student2.fullname) {
    if (student2.fullname.name){
        console.log(student2.fullname.name);
    }
}
// student2.fullname?.name?
console.log(student2.fullname?.name);
// destructuring object
 const {name, age, male,...rest} = student2;
 console.log(rest);
// const name = student2.name;
// const age = student2.age;
// const male = student2.male;
// NORMAL function
// function whatYouInfo(name, age, school){
//     console.log(neme,age, school);
// }
//whatYouInfo("evondev",27, "Cao Thang");
// function with object parameter
function whatYouInfo(obj){
    console.log(obj.name, obj.age, obj.school);
}
const newObj = {
    age : 27,
    school: "Cao Thang",
    name : "evondev",
};
whatYouInfo(newObj);
// object destructuring parameter
function whatYouInfo2({name, age , school}){
    console.log(name, age, school);
}
whatYouInfo2({
    name: " Cao Thang",
    age: 27,
    school: "Tuan",

});
