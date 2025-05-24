# Buổi 2: Làm việc với PostgreSQL, GeoServer, PHP

## 1. PostgreSQL

### 1.1. Giới thiệu PostgreSQL
- **PostgreSQL** là một hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) mã nguồn mở, mạnh mẽ, hỗ trợ cả dữ liệu không gian (thông qua tiện ích mở rộng PostGIS).
- **Đặc điểm nổi bật**:
  - Hỗ trợ SQL chuẩn và các tính năng nâng cao như giao dịch, khóa, và truy vấn phức tạp.
  - Tích hợp PostGIS để quản lý dữ liệu không gian (điểm, đường, vùng).
  - Được sử dụng rộng rãi trong các ứng dụng GIS, web, và phân tích dữ liệu.
- **Ứng dụng thực tế**: Quản lý dữ liệu bản đồ, hệ thống thông tin địa lý (GIS), ứng dụng web.

### 1.2. Phân biệt PostgreSQL với PgAdmin
- **PostgreSQL**: Là hệ quản trị cơ sở dữ liệu, chạy dưới dạng server, lưu trữ và xử lý dữ liệu.
- **PgAdmin**: Là công cụ giao diện đồ họa để quản lý PostgreSQL (giống như một ứng dụng client).
  - **Chức năng của PgAdmin**:
    - Tạo, xóa, chỉnh sửa cơ sở dữ liệu, bảng, và người dùng.
    - Thực thi lệnh SQL trực quan.
    - Quản lý cấu hình server PostgreSQL.
  - **So sánh**:
    - PostgreSQL là "động cơ" (backend), còn PgAdmin là "bảng điều khiển" (frontend).
    - Có thể sử dụng các công cụ khác (như Adminer, DBeaver) để thay thế PgAdmin.

### 1.3. Giới thiệu và Deploy Adminer
- **Adminer** là một công cụ quản lý cơ sở dữ liệu nhẹ, đơn giản, thay thế cho PgAdmin.
  - **Ưu điểm**: Giao diện web, dễ cài đặt, hỗ trợ nhiều loại cơ sở dữ liệu (MySQL, PostgreSQL, SQLite...).
  - **Yêu cầu cài đặt**:
    - Web server (Apache, Nginx).
    - PHP được cài đặt trên server.
  - **Hướng dẫn deploy Adminer**:
    1. Tải file `adminer.php` từ trang chính thức: https://www.adminer.org/.
    2. Đặt file vào thư mục gốc của web server (ví dụ: `htdocs`).
    3. Truy cập qua trình duyệt: `http://localhost/adminer.php`.
    4. Đăng nhập bằng thông tin PostgreSQL (host, username, password, database).

### 1.4. Kết nối Adminer với PostgreSQL
- **Bước thực hiện**:
  1. Mở Adminer trên trình duyệt.
  2. Chọn loại cơ sở dữ liệu: PostgreSQL.
  3. Nhập thông tin:
     - **Host**: `localhost` hoặc IP của server PostgreSQL.
     - **Username**: Ví dụ, `postgres`.
     - **Password**: Mật khẩu của user.
     - **Database**: Tên cơ sở dữ liệu (nếu đã tạo).
  4. Nhấn "Login" để kết nối.
- **Lưu ý**:
  - Đảm bảo PostgreSQL đang chạy.
  - Kiểm tra tệp `pg_hba.conf` để cho phép kết nối từ localhost hoặc IP cụ thể.

### 1.5. Ôn tập các lệnh SQL cơ bản

Xem thêm ở bài lý thuyết 

[OpenGIS_Software_DoThanhLong_p7_SQL.pdf](https://github.com/OpenGIS-VN/Open-Source-GIS-Programming-Course/blob/master/LyThuyet/OpenGIS_Software_DoThanhLong_p7_SQL.pdf)


- **Tạo cơ sở dữ liệu**:
  ```sql
  CREATE DATABASE gis_db;
  ```
- **Tạo bảng**:
  ```sql
  CREATE TABLE locations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      geom GEOMETRY(Point, 4326)
  );
  ```
- **Chèn dữ liệu**:
  ```sql
  INSERT INTO locations (name, geom)
  VALUES ('Hanoi', ST_GeomFromText('POINT(105.8544 21.0285)', 4326));
  ```
- **Truy vấn dữ liệu**:
  ```sql
  SELECT name, ST_AsText(geom) FROM locations;
  ```
- **Xóa dữ liệu**:
  ```sql
  DELETE FROM locations WHERE id = 1;
  ```
- **Cập nhật dữ liệu**:
  ```sql
  UPDATE locations SET name = 'Ho Chi Minh City' WHERE id = 2;
  ```

### 1.6. Import dữ liệu không gian vào PostgreSQL
- **Yêu cầu**: Cài đặt tiện ích mở rộng PostGIS:
  ```sql
  CREATE EXTENSION postgis;
  ```
- **Import dữ liệu từ file Shapefile** (sử dụng phần mềm `QGIS`):
- **Ví dụ dữ liệu không gian**:
  - File Shapefile chứa thông tin bản đồ (điểm, đường, vùng).
  - Sau khi import, bảng sẽ chứa cột `geom` với kiểu dữ liệu `GEOMETRY`.

## 2. GeoServer

### 2.1. Giới thiệu về GeoServer
- **GeoServer** là một máy chủ mã nguồn mở dùng để chia sẻ, xử lý và phân phối dữ liệu không gian qua các chuẩn OGC (WMS, WFS, WCS).
- **Ứng dụng**:
  - Tạo dịch vụ bản đồ (Web Map Service - WMS).
  - Cung cấp dữ liệu không gian cho ứng dụng GIS hoặc web.
- **Yêu cầu cài đặt**:
  - Java Runtime Environment (JRE).
  - Web server (thường dùng Tomcat).

### 2.2. Các chức năng chính
- **WMS (Web Map Service)**: Cung cấp bản đồ dạng ảnh (PNG, JPEG).
- **WFS (Web Feature Service)**: Cung cấp dữ liệu không gian dạng vector (GeoJSON, GML).
- **WCS (Web Coverage Service)**: Cung cấp dữ liệu dạng raster.
- **Quản lý dữ liệu**: Kết nối với cơ sở dữ liệu (PostgreSQL, MySQL) hoặc file (Shapefile, GeoTIFF).

### 2.3. Kết nối GeoServer với PostgreSQL
- **Bước thực hiện**:
  1. Truy cập giao diện quản trị GeoServer: `http://localhost:8080/geoserver`.
  2. Đăng nhập (mặc định: `admin`/`geoserver`).
  3. Tạo **Store** mới:
     - Vào "Stores" > "Add new Store" > Chọn "PostGIS".
     - Nhập thông tin:
       - **Connection Parameters**:
         - Host: `localhost`.
         - Database: `gis_db`.
         - User: `postgres`.
         - Password: Mật khẩu của user.
       - Nhấn "Save".
  4. Tạo **Layer** từ bảng PostgreSQL:
     - Vào "Layers" > "Add new layer" > Chọn Store vừa tạo > Chọn bảng (ví dụ: `locations`).

### 2.4. Tạo dịch vụ bản đồ
- **Tạo WMS**:
  1. Sau khi tạo Layer, vào "Layer Preview".
  2. Chọn định dạng (OpenLayers, PNG) để xem trước bản đồ.
  3. URL WMS: `http://localhost:8080/geoserver/wms?service=WMS&version=1.1.0&request=GetMap&layers=your_layer`.
- **Tạo WFS**:
  1. Vào "Layer Preview" > Chọn định dạng "GeoJSON".
  2. URL WFS: `http://localhost:8080/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=your_layer&outputFormat=application/json`.

## 3. PHP

### 3.1. Giới thiệu về PHP và các cú pháp cơ bản
- **PHP** (Hypertext Preprocessor) là ngôn ngữ lập trình phía server, dùng để xây dựng ứng dụng web động.
- **Cú pháp cơ bản**:
  ```php
  <?php
  // In ra màn hình
  echo "Hello, World!";

  // Biến
  $name = "Lớp GIS nguồn mở";
  echo "Xin chào, $name";

  // Mảng
  $array = ["Point", "Line", "Polygon"];
  echo $array[0]; // In: Point

  // Vòng lặp
  foreach ($array as $item) {
      echo $item . "<br>";
  }
  ?>
  ```

### 3.2. Kết nối PHP với PostgreSQL

Xem chi tiết hơn ở slide

[OpenGIS_Software_DoThanhLong_p8_API.pdf](https://github.com/OpenGIS-VN/Open-Source-GIS-Programming-Course/blob/master/LyThuyet/OpenGIS_Software_DoThanhLong_p8_API.pdf)

- **Yêu cầu**: Cài đặt extension `php-pgsql` để sử dụng các hàm `pg_*`.
- **Kết nối với PostgreSQL bằng `pg_connect`**:
  - Hàm `pg_connect` được sử dụng để thiết lập kết nối tới cơ sở dữ liệu PostgreSQL.
  - Chuỗi kết nối bao gồm các tham số như host, port, database name, username, và password.
- **Ví dụ mã kết nối**:
  ```php
  <?php
  $host = "localhost";
  $port = "5432";
  $dbname = "gis_db";
  $user = "postgres";
  $password = "your_password";

  $conn_string = "host=$host port=$port dbname=$dbname user=$user password=$password";
  $conn = pg_connect($conn_string);

  if (!$conn) {
      echo "Lỗi kết nối: Không thể kết nối đến cơ sở dữ liệu.";
      exit;
  } else {
      echo "Kết nối thành công!";
  }

  // Đóng kết nối
  pg_close($conn);
  ?>
  ```
- **Thực hiện truy vấn với `pg_query`**:
  - Hàm `pg_query` được sử dụng để thực thi các lệnh SQL trên cơ sở dữ liệu PostgreSQL.
  - Kết quả trả về là một resource (hoặc false nếu lỗi).
- **Ví dụ truy vấn**:
  ```php
  <?php
  $conn_string = "host=localhost port=5432 dbname=gis_db user=postgres password=your_password";
  $conn = pg_connect($conn_string);

  if (!$conn) {
      echo "Lỗi kết nối: Không thể kết nối đến cơ sở dữ liệu.";
      exit;
  }

  $query = "SELECT name, ST_AsText(geom) as geom FROM locations";
  $result = pg_query($conn, $query);

  if (!$result) {
      echo "Lỗi truy vấn: " . pg_last_error($conn);
      exit;
  }

  while ($row = pg_fetch_assoc($result)) {
      echo "Name: " . $row['name'] . ", Geom: " . $row['geom'] . "<br>";
  }

  pg_close($conn);
  ?>
  ```
- **Lưu ý**:
  - Luôn kiểm tra kết nối và kết quả truy vấn để xử lý lỗi.
  - Đóng kết nối sau khi sử dụng để giải phóng tài nguyên.
  - Sử dụng `pg_escape_string` để ngăn chặn SQL Injection nếu có dữ liệu đầu vào từ người dùng.

#### Tóm lại, để thực hiện truy vấn với PostgreSQL, cần thực hiện các bước:

* Tạo connection ($conn)
* Tạo lệnh truy vấn
* Thực thi lệnh truy vấn (pg_query($conn,$query))



### 3.3. Phân biệt Get/Post method
- **GET**:
  - Dữ liệu được gửi qua URL (query string).
  - Thích hợp cho truy vấn dữ liệu (lấy danh sách, tìm kiếm).
  - Hạn chế: Dữ liệu hiển thị trên URL, giới hạn độ dài.
  - Ví dụ: `http://example.com?param1=value1¶m2=value2`.
- **POST**:
  - Dữ liệu được gửi trong body của request.
  - Thích hợp cho gửi dữ liệu lớn, bảo mật hơn (ví dụ: form đăng nhập).
  - Không hiển thị dữ liệu trên URL.
- **Ví dụ**:
  ```php
  // GET
  if (isset($_GET['id'])) {
      echo "ID: " . $_GET['id'];
  }

  // POST
  if (isset($_POST['name'])) {
      echo "Tên: " . $_POST['name'];
  }
  ```

### 3.4. Tạo API đơn giản
- **Mục tiêu**: Tạo API để lấy dữ liệu từ bảng `locations` trong PostgreSQL, sử dụng `pg_connect` và `pg_query`, trả về dữ liệu dạng GeoJSON.
- **Mã nguồn**:
  ```php
  <?php
  header("Content-Type: application/json");

  $host = "localhost";
  $port = "5432";
  $dbname = "gis_db";
  $user = "postgres";
  $password = "your_password";

  $conn_string = "host=$host port=$port dbname=$dbname user=$user password=$password";
  $conn = pg_connect($conn_string);

  if (!$conn) {
      echo json_encode(["error" => "Không thể kết nối đến cơ sở dữ liệu"]);
      exit;
  }

  $query = "SELECT name, ST_AsGeoJSON(geom) as geom FROM locations";
  $result = pg_query($conn, $query);

  if (!$result) {
      echo json_encode(["error" => pg_last_error($conn)]);
      pg_close($conn);
      exit;
  }

  $data = [];
  while ($row = pg_fetch_assoc($result)) {
      $data[] = [
          "name" => $row['name'],
          "geom" => json_decode($row['geom'], true)
      ];
  }

  echo json_encode($data);
  pg_close($conn);
  ?>
  ```
- **Kiểm tra API**:
  - Lưu mã vào file `api.php` trong thư mục web server.
  - Truy cập: `http://localhost/api.php`.
  - Kết quả trả về dạng JSON:
    ```json
    [
        {
            "name": "Hanoi",
            "geom": {
                "type": "Point",
                "coordinates": [105.8544, 21.0285]
            }
        }
    ]
  ```