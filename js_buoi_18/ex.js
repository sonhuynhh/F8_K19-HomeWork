/**
 * Câu 1:
 */

const student = {
  name: 'hoang',
  parent: {
    name: 'bo hoang'
  }
}

const mentor = { ...student }

mentor.name = 'bang'
mentor.parent.name = 'bo bang'

console.log(student)
console.log(mentor)

/**
 * - student.name Không thây đổi | vì đây là một dòng độc lập nên việc thay dổi mentor.name sẽ không ảnh hưởng đến student.name
 * - student.parent.name Thay đổi (bị đổi thành 'bo bang') | vì student.parent và mentor.parent đều tham chiếu đến cùng một đối tượng trong bộ nhớ, nên khi thay đổi thuộc tính name của parent thông qua mentor sẽ ảnh hưởng đến student.parent.name
 * */

//-------------------------------------------------------------------

/** * Câu 2:
 */
const student = {
  name: 'hoang',
  parent: {
    name: 'bo hoang'
  }
}

const mentor = JSON.parse(JSON.stringify(student))

mentor.parent.name = 'bo bang'

console.log(student)
console.log(mentor)

/**
 * 
 * - student.parent.name Không thay đổi 
 * - JSON.parse(JSON.stringify(student)) tạo ra một đối tượng mới nên khi thay đổi mentor.parent.name sẽ không ảnh hưởng đến student.parent.name
 * */


//=====================================================================
/** * Câu 3:
 */
const students = [
  { name: 'a' },
  { name: 'b' }
]

const newStudents = [...students]

newStudents[0].name = 'z'

console.log(students)
console.log(newStudents)

/**
 * - mảng không thay đổi (vẫn chứa 2 phần tử)
 * - phần tử bên trong có thay đổi (tên của phần tử đầu tiên bị đổi thành 'z') 
 * */

// =====================================================================
/** * Câu 4:
 */
const user = {
  name: 'hoang',
  address: {
    city: 'HN',
    location: {
      lat: 123
    }
  }
}

const newUser = { ...user }

newUser.address.location.lat = 999

console.log(user.address.location.lat)
/**
 * kết quả là 999 | vì newUser.address và user.address đều tham chiếu đến cùng một đối tượng trong bộ nhớ, nên khi thay đổi thuộc tính lat của location thông qua newUser sẽ ảnh hưởng đến user.address.location.lat
 * */