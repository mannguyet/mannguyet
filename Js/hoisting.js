{
//     // Temporat Dead Zone :TDZ  nghia la ko the truy cap vao bien den khi bien do duoc khoi tao gtri
//  let teacher = 'evondev';
const teacheer = "evondev";
 const teacherLearning = function(){
     console. log(teacher);
     const teacher = 'evondev';
 };
// teacherLearning();

/**Process code
 * const teacher
 * const teacherLearning
 * teacher = "evonder"
 * teacherLearning = f
 * invobe function teacherLearning
 * const teacher : TDZ
 * console.log(teacher) uncaught reference error
 * teacher = "evonder"
 */

// TDZ is existed here

// console.log(library);

// TDZ is existed here

 const library = "react"; // TDZ end here

 // TDZ is not existed here
  console.log(library);
// declaration priority


// TDZ start and end here (var bat dau va kthuc ngay lap tuc)

console.log(hobbies)  // TDZ is not existed here 

// TDZ is not existed here
 var hobbies = "Badminton";
 /**
  * var hobbies; // undefined
  * console.log(hobbies);
  * hobbies = "Badminton";
  */

}