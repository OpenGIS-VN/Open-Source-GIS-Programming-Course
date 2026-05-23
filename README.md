# Open-Source-GIS-Programming
Open Source GIS Programming

Tên biến, tên tệp tin, tên cột, tên bảng, tên database
- Viết thường
- Không dấu
- Không khoảng trắng
- Không ký tự đặc việt
- Không bắt đầu bằng số

Các nội dung lưu ý khi tìm hiểu một ngôn ngữ lập trình mới
- Khai báo biến
- Nối chuỗi
- Toán tử
- Cấu trúc điều khiển (điều kiện, vòng lặp)
- Mảng
- Hàm

Các thông tin cần note lại khi tạo connection đến Database
- Server: Dia chi server (IP/Domain)
- Port: 5432
- Username: postgres
- Password: *******
- Database: Ten db

Cấu trúc 1 database
Database -> Schema -> Table -> Column

Bổ sung postgis cho database
Create extension postgis;

4 chức năng/lệnh cơ bản khi nói đến quản trị dữ liệu
- Xem dữ liệu: Select
- Thêm dữ liệu: Insert
- Sửa dữ liệu: Update
- Xóa dữ liệu: Delete

Các thông tin mặc định khi cài geoserver
Vị trí deploy
C:\xampp\tomcat\webapps

Đường dẫn truy cập geoserver
localhost:8080/geoserver
user: admin
pass: geoserver
