// Tạo ra 1 mảng copy của mảng ban đầu
console.log("-----array.slice-----");
const animals = ["tiger", "lion", " horse", "elephant"];
// slice(): Tạo ra mảng mới y hệt mảng ban đầu
const animals2 = animals.slice();
// ['tiger', 'lion', ' horse', 'elephant']
console.log(animals2);
// slice(start).start ->  copy vị trí index ở trong mảng
const animals3 = animals.slice(1);
// ['lion', ' horse', 'elephant']
console.log(animals3);
// slice(start, end). start là vị trí bắt đầu, end là vị trí kết thúc
// nó sẽ sap chép từ vị trí start tới vị trí end - 1
const animals4 = animals.slice(1, 3);
// ['lion', ' horse']
console.log(animals4);
const animals5 = animals.slice(-2);
// [' horse', 'elephant']
console.log(animals5);
console.log("-----array.splice-----");
// Nó sẽ xóa phần tử trong mảng hoặc thay thế phần tử trong mảng
const pets = ["dogs", "cat", " bỉd", "dragon"];
// splice(start)
// const pets2 = pets.splice(2); // [' bỉd', 'dragon']
// console.log(pets2);
// splice(start, deleteCount): deleteCount là số lượng phần tử muốn xóa haowcj thay thế
// const pets3 = pets.splice(0, 1);
// console.log(pets3); //['dogs']
// splice(start, deleteCount, item1, item2, itemN): deleteCount là số lượng phần tử muốn xóa haowcj thay thế
const pets3 = pets.splice(0, 1, "dinasour",false, 100);
// ['dinasour', false, 100, 'cat', ' bỉd', 'dragon']
console.log(pets); //['dogs']
console.log("-----array.sort-----");
// Sắp xếp cac phần tử trong mảng theo chuẩn unicode-16
const radom = [1, 999, 10, 5, 9];
// [1, 10, 5, 9, 999]
console.log(radom.sort());
// sort(function(a, b))
// function(callback)
const radom2 = radom.sort(function(a, b){
    if ( a> b) return 1; // Sắp xếp theo tăng dần
    if(a < b) return -1; // Sắp xếp theo giảm dần
        
    } );
    const ramdom3 = radom.sort((a,b) => (a > b ? 1 : -1));
    // condition ? something : something slse
    console.log(ramdom3);
console.log("-----array.find-----");
// nó sẽ trả về phần tử (element) tìm thấy đầu tiên trong mảng thỏa mãn đk nào đó
const numbers = [1,999, 100000, 5, 9];
// Tìm phần tử đầu tiên trong mảng lớn hơn 10
const findYourNumber = numbers.find((element) => element > 10);
// Nếu ko tìm thấy thì nó sẽ trả ra kq là undefined
console.log(findYourNumber); //999
console.log("-----array.findIndex-----");
// nó sẽ trả về vị trí index tìm thấy đầu tiên trong mảng thỏa mãn đk nào đó
const findYourIndex = numbers.findIndex((element) => element > 10);
// Nếu ko tìm thấy thì sẽ trả ra kqua là -1
console.log(findYourIndex);  // 1
// Sort bổ sung
//const radom = [1, 999, 10, 5, 9];

const ramdom4 = radom.sort((a,b) => (a > b ? -1 : 1));
console.log(ramdom4);
console.log("-----array.map-----");
// Duyệt qua từng phần tử trong mảng và trả ra 1 mảng mới mà ko thay đổi mảng ban đầu
const listNumber = [1,2,3,4,5];
// trả ra 1 mảng mới mà các số(giá trị) trong mảng cũ nhân 2
// .map(callback(vakue, index, aray))
const listNumberDouble = listNumber.map(function(value, index, array){
    return value * 2;
});
// [2, 4, 6, 8, 10]
console.log(listNumberDouble)
console.log("-----array.forEach-----");
// .forEach(callback(vakue, index, aray))
const listNumberTripple = listNumber.forEach((value, index, array)=> {
    return value * 3
});
console.log(listNumberTripple);
// Hãy cho biết sự khác nhau giữa forEach và map ? forEach ko return được luôn trả ra undefined
console.log("-----array.filter-----");
// Dùng để filter(sàng lọc) các phần tử trong mảng thỏa nẫm ddkien nào đó
// filter(callback(vakue, index, aray))
// const listNumber = [1,2,3,4,5];
const greaterThanThree = listNumber.filter((item)=> item > 3 );
console.log(greaterThanThree);
console.log("-----array.some-----");
// trả về true khi thỏa 1 đkiện và ngược lại trả về false khi ko thỏa đkiện nào cả
const someNumber = listNumber.some(value => value > 3);
console.log(someNumber);
console.log("-----array.every-----");
//  Chỉ trả về true khi tất cả đkiện đều đúng, ngược lại chỉ cần 1 cái sai nó sez return false
const everyNumber = listNumber.every(value => value > 0); // true nếu >3  false vì 1,2 ko lớn hơn 3
console.log(everyNumber);
// true of false
console.log("-----array.reduce-----");
// gom các phần tử trong mảng lại thành 1
// .reduce((a, b) => {}, initialize value);
const totalNumber = listNumber.reduce(function(a, b){ // a: previousValue b: currentValue
    console.log(a, b);
   return a + b;
}, 0);
console.log(totalNumber);
