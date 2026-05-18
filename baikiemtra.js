// Dữ liệu mẫu
const employees = [
   { id: 1, name: "Alice", age: 23, status: 'working' },
   { id: 3, name: "Bob", age: 25, status: 'working' },
   { id: 6, name: "John", age: 27, status: 'working' },
   { id: 8, name: "David", age: 23, status: 'quit_job' },
   { id: 10, name: "Eve", age: 20, status: 'working' },
];


const products = [
   { id: 1, name: "Phone", price: 1200 },
   { id: 2, name: "Laptop", price: 3000  },
   { id: 3, name: "Tab", price: 2000  },
   { id: 4, name: "PC", price: 800  },
   { id: 5, name: "Monitor", price: 1500  },
]


const orders = [
   { id: 1, employeeId: 1, productId: 4, quantity: 1 },
   { id: 2, employeeId: 3, productId: 2, quantity: 4 },
   { id: 3, employeeId: 1, productId: 5, quantity: 1 },
   { id: 4, employeeId: 6, productId: 1, quantity: 2 },
   { id: 5, employeeId: 3, productId: 5, quantity: 3 },
   { id: 6, employeeId: 8, productId: 1, quantity: 1 },
   { id: 7, employeeId: 10, productId: 3, quantity: 2 },
];

// 1. Lấy ra danh sách nhân viên đang làm việc (status: 'working').

/**
 * Viết hàm:
 * 1. Lấy ra danh sách nhân viên đang làm việc (status: 'working').
 */
function getWorkingEmployees(employees) {
    // 1. Tạo một mảng rỗng để chứa kết quả
    let result = []; 

    // 2. Duyệt qua từng nhân viên bằng vòng lặp for
    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];

        // 3. Kiểm tra điều kiện status
        if (employee.status === 'working') {
            result.push(employee); // Nếu đúng thì thêm vào mảng kết quả
        }
    }

    // 4. Trả về mảng kết quả cuối cùng
    return result; 
}   
console.log("Bai 1: Danh sách nhân viên đang làm việc :");
console.log(getWorkingEmployees(employees));
console.log("--------------------------------------------------");

// 2. Lấy ra nhân viên lớn tuổi nhất
function getOldestEmployee(employees) {
    let oldestEmployee = employees[0]; // Giả sử nhân viên đầu tiên là lớn tuổi nhất
    for (let i = 1; i < employees.length; i++) {
        if (employees[i].age > oldestEmployee.age) { // So sánh tuổi của nhân viên hiện tại với nhân viên lớn tuổi nhất
            oldestEmployee = employees[i]; // Nếu nhân viên hiện tại lớn tuổi hơn, cập nhật oldestEmployee
        }
    }
    return oldestEmployee;
}
console.log("Bai 2: Nhân viên lớn tuổi nhất:");
console.log(getOldestEmployee(employees));
console.log("--------------------------------------------------");

// 3. Lấy ra sản phẩm giá rẻ nhất
function getCheapestProduct(products) {
    let cheapestProduct = products[0]; // Giả sử sản phẩm đầu tiên là rẻ nhất
    for (let i = 1; i < products.length; i++) {
        if (products[i].price < cheapestProduct.price) { // So sánh giá của sản phẩm hiện tại với sản phẩm rẻ nhất
            cheapestProduct = products[i]; // Nếu sản phẩm hiện tại rẻ hơn, cập nhật cheapestProduct
        }
    }   
    return cheapestProduct;
}
console.log("Bai 3: Sản phẩm giá rẻ nhất:");
console.log(getCheapestProduct(products));
console.log("--------------------------------------------------");

// 4. Tìm ra sản phẩm bán chạy nhất (bán nhiều nhất về mặt số lượng)
/**
 * Bài 4 có 2 giai đoạn:
 * 1. Tính tổng số lượng bán của từng sản phẩm dựa trên dữ liệu đơn hàng.
 * 2. So sánh tổng số lượng bán của từng sản phẩm để tìm ra sản phẩm bán chạy nhất.
 */
function getBestSellingProduct(orders, products) {
    let productSales = {}; // Tạo một đối tượng để lưu trữ số lượng bán của từng sản phẩm
    for (let order of orders) {
        let productId = order.productId; // Lấy ID sản phẩm từ đơn hàng
        let quantity = order.quantity; // Lấy số lượng bán từ đơn hàng
        if (!productSales[productId]) { // Nếu sản phẩm chưa có trong productSales, khởi tạo số lượng bán là 0
            productSales[productId] = 0; // Khởi tạo số lượng bán cho sản phẩm
        }
        productSales[productId] += quantity; // Cộng dồn số lượng bán cho sản phẩm
    }

    let bestSellingProduct = products[0]; // Giả sử sản phẩm đầu tiên là bán chạy nhất
    for (let product of products) { 
        if ((productSales[product.id ] || 0) > (productSales[bestSellingProduct.id] || 0)) { // So sánh số lượng bán của sản phẩm hiện tại với sản phẩm bán chạy nhất
            bestSellingProduct = product; // Nếu sản phẩm hiện tại bán chạy hơn, cập nhật bestSellingProduct
        }
    }
    return bestSellingProduct; // Trả về sản phẩm bán chạy nhất
}
console.log("Bai 4: Sản phẩm bán chạy nhất:");
console.log(getBestSellingProduct(orders, products));
console.log("--------------------------------------------------");

// 5. Tìm ra sản phẩm doanh thu cao nhất (nhiều tiền nhất)
function getHighestRevenueProduct(orders, products) {
    let productRevenue = {}; // Tạo một đối tượng để lưu trữ doanh thu của từng sản phẩm
    for (let order of orders) {
        let productId = order.productId; // Lấy ID sản phẩm từ đơn hàng
        let quantity = order.quantity; // Lấy số lượng bán từ đơn hàng
        let product = products.find(p => p.id === productId); // Tìm sản phẩm tương ứng
        if (product) {
            if (!productRevenue[productId]) {
                productRevenue[productId] = 0;
            }
            productRevenue[productId] += product.price * quantity; // Tính doanh thu cho sản phẩm
        }
    }

    let highestRevenueProduct = products[0]; // Giả sử sản phẩm đầu tiên là doanh thu cao nhất
    for (let product of products) {
        if ((productRevenue[product.id] || 0) > (productRevenue[highestRevenueProduct.id] || 0)) {
            highestRevenueProduct = product;
        }
    }
    return highestRevenueProduct;
}
console.log("Bai 5: Sản phẩm doanh thu cao nhất:");
console.log(getHighestRevenueProduct(orders, products));
console.log("--------------------------------------------------");

// 6. Tìm ra nhân viên bán nhiều hàng nhất (tính theo số lượng sản phẩm đã bán)
function getTopSellingEmployee(orders, employees) {
    let employeeSales = {}; // Tạo một đối tượng để lưu trữ số lượng bán của từng nhân viên
    for (let order of orders) {
        let employeeId = order.employeeId; // Lấy ID nhân viên từ đơn hàng
        let quantity = order.quantity; // Lấy số lượng bán từ đơn hàng
        if (!employeeSales[employeeId]) { // Nếu nhân viên chưa có trong employeeSales, khởi tạo số lượng bán là 0
            employeeSales[employeeId] = 0; // Khởi tạo số lượng bán cho nhân viên
        }
        employeeSales[employeeId] += quantity; // Cộng dồn số lượng bán cho nhân viên
    }

    let topSellingEmployee = employees[0]; // Giả sử nhân viên đầu tiên là bán nhiều nhất
    for (let employee of employees) {
        if ((employeeSales[employee.id] || 0) > (employeeSales[topSellingEmployee.id] || 0)) { // So sánh số lượng bán của nhân viên hiện tại với nhân viên bán nhiều nhất
            topSellingEmployee = employee; // Nếu nhân viên hiện tại bán nhiều hơn, cập nhật topSellingEmployee
        }
    }
    return topSellingEmployee; // Trả về nhân viên bán nhiều nhất
}
console.log("Bai 6: Nhân viên bán nhiều hàng nhất:");
console.log(getTopSellingEmployee(orders, employees));
console.log("--------------------------------------------------");

// 7. Tìm ra nhân viên có doanh thu cao nhất
function getTopRevenueEmployee(orders, products, employees) {
    let employeeRevenue = {}; // Tạo một đối tượng để lưu trữ doanh thu của từng nhân viên
    for (let order of orders) {
        let employeeId = order.employeeId; // Lấy ID nhân viên từ đơn hàng
        let quantity = order.quantity; // Lấy số lượng bán từ đơn hàng
        let product = products.find(p => p.id === order.productId); // Tìm sản phẩm tương ứng
        if (product) {
            if (!employeeRevenue[employeeId]) {
                employeeRevenue[employeeId] = 0;
            }
            employeeRevenue[employeeId] += product.price * quantity; // Tính doanh thu cho nhân viên
        }
    }

    let topRevenueEmployee = employees[0]; // Giả sử nhân viên đầu tiên là doanh thu cao nhất
    for (let employee of employees) {
        if ((employeeRevenue[employee.id] || 0) > (employeeRevenue[topRevenueEmployee.id] || 0)) {
            topRevenueEmployee = employee;
        }
    }
    return topRevenueEmployee; // Trả về nhân viên có doanh thu cao nhất
}
console.log("Bai 7: Nhân viên có doanh thu cao nhất:");
console.log(getTopRevenueEmployee(orders, products, employees));
console.log("--------------------------------------------------");

// 8. Tìm ra sản phẩm bán có doanh thu cao nhất của mỗi nhân viên
/**
 * 
 * Bài 8 có 3 giai đoạn:
 * 1. TÍNH TIỀN CHO TỪNG ĐƠN HÀNG
 * 2. TẠO MỘT DANH SÁCH DOANH THU PHẲNG (DỄ NHÌN)
 * 3. TÌM SẢN PHẨM CAO NHẤT CỦA TỪNG NGƯỜI
 */
function getTopRevenueProductByEmployee(orders, products, employees) {
    // BƯỚC 1: TÍNH TIỀN CHO TỪNG ĐƠN HÀNG
    for (let order of orders) {
        let product = products.find(p => p.id === order.productId);
        if (product) { // Nếu tìm thấy sản phẩm tương ứng
            order.revenue = product.price * order.quantity; // Thêm hẳn 1 thuộc tính revenue vào đơn hàng
        } else {
            order.revenue = 0;// Nếu không tìm thấy sản phẩm, gán doanh thu là 0 để tránh lỗi
        }
    }
    // BƯỚC 2: TẠO MỘT DANH SÁCH DOANH THU PHẲNG (DỄ NHÌN)
    let employeeSalesList = {}; 

    for (let order of orders) {
        let empId = order.employeeId; // Lấy ID nhân viên từ đơn hàng
        
        // Nếu nhân viên này chưa có trong danh sách, tạo cho họ một mảng rỗng
        if (!employeeSalesList[empId]) {
            employeeSalesList[empId] = [];
        }
        
        // Kiểm tra xem sản phẩm này đã được nhân viên này bán trước đó chưa
        let existingProd = employeeSalesList[empId].find(p => p.productId === order.productId);
        
        if (existingProd) {
            existingProd.totalRevenue += order.revenue; // Nếu bán rồi thì cộng dồn tiền vào
        } else {
            // Nếu chưa bán, thêm một đối tượng sản phẩm phẳng gọn gàng vào mảng
            employeeSalesList[empId].push({
                productId: order.productId,
                totalRevenue: order.revenue
            });
        }
    } 
    // BƯỚC 3: TÌM SẢN PHẨM CAO NHẤT CỦA TỪNG NGƯỜI
    let finalResult = {};

    for (let empId in employeeSalesList) {
        let salesArray = employeeSalesList[empId]; // Mảng các sản phẩm của nhân viên hiện tại
        
        let bestProduct = salesArray[0].productId;  // Tạm giữ sản phẩm đầu tiên làm quán quân
        let maxRevenue = salesArray[0].totalRevenue; // Doanh thu của sản phẩm đầu tiên
        
        // Duyệt qua mảng sản phẩm của riêng người đó để tìm người cao hơn
        for (let item of salesArray) {
            if (item.totalRevenue > maxRevenue) {
                maxRevenue = item.totalRevenue;
                bestProduct = item.productId;
            }
        }    
        // Lưu kết quả cuối cùng
        finalResult[empId] = bestProduct;
    }
    return finalResult;
}
console.log("Bai 8: Sản phẩm bán có doanh thu cao nhất của mỗi nhân viên:");
console.log(getTopRevenueProductByEmployee(orders, products, employees));
console.log("--------------------------------------------------");

// 9. Giả sử nhân viên sẽ nhận được hoa hồng là 3%. Tìm hoa hồng cho mọi nhân viên
/**
 * Chia làm 3 giai đoạn:
 * 1. Tính tổng số tiền của từng đơn hàng
 * 2. Gom tiền về cho từng nhân viên để biết tổng doanh thu của mỗi người
 * 3. Lấy tổng doanh thu của mỗi người nhân với 3% (0.03) để ra hoa hồng
 */
function calculateEmployeeCommission(orders, products, employees) {

    // BƯỚC 1: TÍNH TIỀN CHO TỪNG ĐƠN HÀNG (Doanh thu = Giá * Số lượng)
    // =================================================================
    for (let order of orders) {
        let product = products.find(p => p.id === order.productId);
        
        if (product) {
            order.revenue = product.price * order.quantity; // Thêm thuộc tính revenue vào đơn hàng để lưu doanh thu của đơn đó
        } else {
            order.revenue = 0; // Nếu không tìm thấy sản phẩm, gán doanh thu là 0 để tránh lỗi
        }
    }

    // =================================================================
    // BƯỚC 2: TÍNH TỔNG DOANH THU CỦA TỪNG NHÂN VIÊN
    // =================================================================
    let employeeTotalRevenue = {};

    for (let order of orders) {
        let empId = order.employeeId;

        // Nếu nhân viên này lần đầu tiên xuất hiện , đặt số tiền ban đầu là 0
        if (!employeeTotalRevenue[empId]) {
            employeeTotalRevenue[empId] = 0;
        }

        // Cộng dồn tiền của đơn hàng hiện tại vào tổng tiền của nhân viên đó
        employeeTotalRevenue[empId] += order.revenue;
    }

    // =================================================================
    // BƯỚC 3: TÍNH HOA HỒNG (3%) CHO TẤT CẢ NHÂN VIÊN TRONG CÔNG TY
    // =================================================================
    let commissionResult = {};

    for (let employee of employees) {
        let empId = employee.id;

        // Lấy tổng doanh thu của nhân viên này ra (nếu không có đơn nào thì tự tính là 0)
        let totalRevenue = employeeTotalRevenue[empId] || 0;

        // Hoa hồng = Tổng doanh thu * 3% (3 / 100 = 0.03)
        let commission = totalRevenue * 0.03;

        // Lưu số tiền hoa hồng kèm theo tên của nhân viên cho dễ đọc kết quả
        commissionResult[employee.name] = commission;
    }

    return commissionResult;
}
console.log("Bai 9: Hoa hồng của mọi nhân viên:");
console.log(calculateEmployeeCommission(orders, products, employees));
console.log("--------------------------------------------------");

// 10. Sắp xếp nhân viên theo thứ tự giảm dần theo doanh thu
function sortEmployeesByRevenue(orders, products, employees) {
    
    // =================================================================
    // BƯỚC 1: TÍNH TỔNG DOANH THU CỦA TỪNG NHÂN VIÊN
    // =================================================================
    let employeeTotalRevenue = {};

    for (let order of orders) {
        let product = products.find(p => p.id === order.productId);
        if (product) {
            let orderRevenue = product.price * order.quantity; // Tiền của 1 đơn hàng
            let empId = order.employeeId;
            // Nếu nhân viên này lần đầu tiên xuất hiện , đặt số tiền ban đầu là 0
            if (!employeeTotalRevenue[empId]) {
                employeeTotalRevenue[empId] = 0;
            }
            employeeTotalRevenue[empId] += orderRevenue; // Cộng dồn tiền của đơn hàng hiện tại vào tổng tiền của nhân viên đó
        }
    }

    

    // =================================================================
    // BƯỚC 2: SẮP XẾP NHÂN VIÊN GIẢM DẦN THEO DOANH THU
    // =================================================================
    
    // Hàm .sort() sẽ đi so sánh từng cặp nhân viên với nhau để đổi chỗ
    // Ta gọi tạm 2 nhân viên bất kỳ đang được so sánh là employeeA và employeeB
    employees.sort((employeeA, employeeB) => {
        
        // Lấy doanh thu của nhân viên A (nếu không bán được gì thì coi là 0)
        let revenueA = employeeTotalRevenue[employeeA.id] || 0;
        
        // Lấy doanh thu của nhân viên B (nếu không bán được gì thì coi là 0)
        let revenueB = employeeTotalRevenue[employeeB.id] || 0;

        // Quy tắc của hàm .sort() để sắp xếp GIẢM DẦN (Từ lớn đến bé):
        // Ta lấy giá trị của người đứng SAU (B) trừ đi giá trị của người đứng TRƯỚC (A)
        return revenueB - revenueA; 
    });

    return employees; // Trả về danh sách nhân viên đã được sắp xếp xong xuôi
}
console.log("Bai 10: Nhân viên sắp xếp theo doanh thu giảm dần:");
console.log(sortEmployeesByRevenue(orders, products, employees));
console.log("--------------------------------------------------");