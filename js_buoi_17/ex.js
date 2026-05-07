// Bài tập 1

function isEvenNumber(number) {
    if (number % 2 === 0) {
        return true; 
    } else {
        return false; 
    }
}

// Test thử
console.log(isEvenNumber(10)); // Kết quả: true
console.log(isEvenNumber(7));  // Kết quả: false

// Bài tập 2
function getElectricityBill(kwh) {
  let bill = 0;

  // Định nghĩa các mức giá
  const PRICE_1 = 1678; // 0 - 50
  const PRICE_2 = 1734; // 51 - 100
  const PRICE_3 = 2014; // 101 - 200
  const PRICE_4 = 2536; // 201 - 300
  const PRICE_5 = 2834; // 301 - 400
  const PRICE_6 = 2927; // Trên 400

  if (kwh <= 50) {
    bill = kwh * PRICE_1;
  } else if (kwh <= 100) {
    bill = (50 * PRICE_1) + ((kwh - 50) * PRICE_2);
  } else if (kwh <= 200) {
    bill = (50 * PRICE_1) + (50 * PRICE_2) + ((kwh - 100) * PRICE_3);
  } else if (kwh <= 300) {
    bill = (50 * PRICE_1) + (50 * PRICE_2) + (100 * PRICE_3) + ((kwh - 200) * PRICE_4);
  } else if (kwh <= 400) {
    bill = (50 * PRICE_1) + (50 * PRICE_2) + (100 * PRICE_3) + (100 * PRICE_4) + ((kwh - 300) * PRICE_5);
  } else {
    bill = (50 * PRICE_1) + (50 * PRICE_2) + (100 * PRICE_3) + (100 * PRICE_4) + (100 * PRICE_5) + ((kwh - 400) * PRICE_6);
  }

  return bill;
}

// Test thử
console.log(getElectricityBill(70));  // Kết quả: 118580
console.log(getElectricityBill(120)); // Kết quả: 210880

// Bài tập 3
function cleanName(name, keyword) {
  // 1. Dọn dẹp biến name: xóa khoảng trắng 2 đầu và chuyển về chữ thường
  const cleanedName = name.trim().toLowerCase();

  // 2. Chuyển từ khóa keyword về chữ thường để so sánh chính xác
  const cleanedKeyword = keyword.toLowerCase();

  // 3. Kiểm tra xem tên đã dọn dẹp có chứa từ khóa hay không
  const result = cleanedName.includes(cleanedKeyword);

  return result;
}

// Test thử
console.log(cleanName('   NGUYEN Van An   ', 'an')); // true
console.log(cleanName('   Tran Thi B ', 'hoang'));   // false