/**                               [Bài 1] tính tiền lương nhân viên:
 *Lương 1 ngày 100.000. Cho người dùng nhập vào số ngày làm 
 Công thức lương: Lương 1 ngày * số ngày làm
 */
// -----------------Mô hình 3 khối -----------------------------
/**
 * Input
 *  - Tạo biến soNgayLam bằng prompt cho người dùng nhập từ bằng phím
 *  - Tạo biến luongMotNgay = 100000
 * Process
 * - Tạo biến tongTienLuong =  soNgayLam*luongMotNgay
 * Output
 * - console.log(tongTienLuong)
 */
let soNgayLam = prompt("Nhập vào số ngày làm của nhân viên: ");
number = Number(soNgayLam);
let luongMotNgay = 100.0;
let tongTienLuong = soNgayLam * luongMotNgay;
console.log("Tiền lương của nhân viên là: " + tongTienLuong + "VNĐ");
// ====================================================================
/**                             [Bài 2] Tính giá trị trung bình
 *Viết chương trình nhập vào 5 số thực.Tính giá trị trung bình của 5 số này và xuất ra màn hình.
 */
// -----------------Mô hình 3 khối -----------------------------
/**
 * Input
 * - Tạo biến number1 có giá trị do người dùng nhập
 * - Tạo biến number2 có giá trị do người dùng nhập
 * - Tạo biến number3 có giá trị do người dùng nhập
 * - Tạo biến number4 có giá trị do người dùng nhập
 * - Tạo biến number5 có giá trị do người dùng nhập
 * Process
 * - Tạo biên trungBinh để tính
 * - trungBinh = (number1 + number2 + number3 + number4 + number5 )/5
 * Output
 * - console.log(trungBinh)
 */
let number1 = prompt("Nhập sô thứ nhất:");
let number2 = prompt("Nhập sô thứ hai:");
let number3 = prompt("Nhập sô thứ ba:");
let number4 = prompt("Nhập sô thứ tư:");
let number5 = prompt("Nhập sô thứ năm:");
let trungBinh = (number1 + number2 + number3 + number4 + number5) / 5;
console.log("Trung bình của 5 số trên là: " + trungBinh);
// ====================================================================
/**                             [Bài 3] Quy đổi tiền
 *Giá USD hiện nay đang là 23.500 VNĐ
 Viết chương trình quy đổi từ USD sang VNĐ.
 Cho người dùng nhập vào số tiền USD.
 Tính và xuất ra số tiền sau khi quy đổi
 */
// -----------------Mô hình 3 khối -----------------------------
/**
 * Input
 * - Tạo biến USD được người dùng nhập từ bàn phím
 * - Tạo biến VND có giá trị 23.500
 * Process
 * - Tạo biến quyDoi và tính bằng công thức quyDoi = USD * VND
 * Output
 * - console.log(quyDoi)
 */
let USD = prompt("Nhập số lượng USD cần quy đổi: ");
let VND = 23500;
let quyDoi = USD * VND;
console.log(
  "Sau khi qui đổi sang tiền Việt Nam có giá trị là: " + quyDoi + "VNĐ"
);
// ====================================================================
/**                             [Bài 4] Tính diện tích và chu vi hình chữ nhật
 *Viết chương trình nhập vào 2 chiều dài và chiều rộng của HCN (hình chữ nhật)
 Tính và xuất ra diện tích, chu vi của hình đó
 */
// -----------------Mô hình 3 khối -----------------------------
/**
 * Input
 * - Tạo biến chieuDai giá trị được người dùng nhập
 * - Tạo biến chieuRong giá trị được người dùng nhập
 * Process
 * - Tạo biến dienTich = chieuDai * chieuRong
 * - Tạo biến chuVi = (chieuDai + chieuRong) * 2
 * Output
 * - console.log(chieuDai,chieuRong)
 */
let chieuDai = prompt("Nhập chiều dài: ");
let chieuRong = prompt("Nhập chiều rộng: ");
let dienTich = chieuDai * chieuRong;
let chuVi = (chieuDai + chieuRong) * 2;
console.log(
  "Chiều dài là: " +
    chieuDai +
    "(cm2)" +
    "," +
    "Chiều rộng là: " +
    chieuRong +
    "(cm2)"
);
// ====================================================================
/**                             [Bài 5] Tính tổng ký 2 só
 *Viết chương trình nhập vào 1 sô có 2 chữ só (9 < so < 100)
 Tính tổng 2 só ký vừa nhập
 */
// -----------------Mô hình 3 khối -----------------------------
/**
 * Input
 * - Tạo biến so có giá trị cho người dùng nhập
 * - Tạo biến hangChuc
 * - Tạo biến hangDonVi
 * - Tạo biến tongHaiSo
 * Process
 * - hangChuc = Math.floor(so / 10);
 * - hangDonVi = so%10;
 * - tongHaiSo = hangChuc + hangDonVi
 * Output
 * - console.log(tongHaiSo)
 */
let so = prompt("Nhập một số tự nhiên >9 và <100: ");
let hangChuc = Math.floor(so / 10);
let hangDonVi = so % 10;
let tongHaiSo = hangChuc + hangDonVi;
console.log("Tổng của 2 số là: " + tongHaiSo);
