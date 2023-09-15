// const birthYear = document.getElementById("nam");
// const year = document.getElementById("namsinh");

// function getAge(nam){
//     //const A = parseInt(year.value);
//     const now = new Date();
//     const currentYear  = now.getFullYear(); 
//     return currentYear  - nam;
// }
// const yourAge = getAge(2001);
// console.log(`Năm nay bạn ${yourAge} tuổi`);
function getAge() {
    const birthYearInput = document.getElementById("birthYear");
    const resultElement = document.getElementById("result");

    const currentYear = new Date().getFullYear();
    const birthYear = parseInt(birthYearInput.value);

    if (isNaN(birthYear) || birthYear > currentYear || birthYear <= 0) {
        resultElement.textContent = "Vui lòng nhập năm sinh hợp lệ.";
    } else {
        const age = currentYear - birthYear;
        resultElement.textContent = `Số tuổi của bạn là ${age} tuổi.`;
    }
}