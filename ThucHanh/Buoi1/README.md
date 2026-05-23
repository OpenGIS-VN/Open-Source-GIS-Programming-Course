# Buổi 1
Cài đặt môi trường

## Sofwares-Libs

Bắt buộc:

-   PostgreSQL/PostGIS
-   XAMPP
-   GeoServer
-   Leaflet

Tùy chọn:

-   Visual Studio Code
-   Notepad++
-   7zip

https://1drv.ms/u/s!AhouGCUE4BeHr9Q8qleaT5YsjGaWKA?e=z2a7pj&authuser=1

## Đăng ký hosting

https://dash.infinityfree.com/register

<a href="Hosting.MD" target="_blank">Xem thêm Hosting</a>


## Thực hành

- Cài đặt môi trường phát triển ứng dụng WebGIS
- Đăng ký Hosting, Domain
- Tạo CV cá nhân và publish lên Hosting vừa đăng ký

## Fix một số lỗi

## Lỗi Tomcat do thiếu Java

```txt
9:44:29 AM  [main] 	Initializing Control Panel
9:44:29 AM  [main] 	Windows Version:  Enterprise  64-bit
9:44:29 AM  [main] 	XAMPP Version: 7.2.22
9:44:29 AM  [main] 	Control Panel Version: 3.2.4  [ Compiled: Jun 5th 2019 ]
9:44:29 AM  [main] 	You are not running with administrator rights! This will work for
9:44:29 AM  [main] 	most application stuff but whenever you do something with services
9:44:29 AM  [main] 	there will be a security dialogue or things will break! So think 
9:44:29 AM  [main] 	about running this application with administrator rights!
9:44:29 AM  [main] 	XAMPP Installation Directory: "c:\xampp\"
9:44:29 AM  [main] 	Checking for prerequisites
9:44:30 AM  [main] 	All prerequisites found
9:44:30 AM  [main] 	Initializing Modules
9:44:30 AM  [main] 	The FileZilla module is disabled
9:44:30 AM  [main] 	The Mercury module is disabled
9:44:30 AM  [main] 	Starting Check-Timer
9:44:30 AM  [main] 	Control Panel Ready
9:44:35 AM  [Tomcat] 	Attempting to start Tomcat app...
9:47:02 AM  [Tomcat] 	Tomcat Started/Stopped with errors, return code: 1
9:47:02 AM  [Tomcat] 	Make sure you have Java JDK or JRE installed and the required ports are free
9:47:02 AM  [Tomcat] 	Check the "/xampp/tomcat/logs" folder for more information

```

<img width="542" height="346" alt="image" src="https://github.com/user-attachments/assets/0db58f7d-7bb6-47c5-ae28-8dc0ca5dff6b" />

Cài java `jdk-8u91-windows-x64.exe`

## Xung đột port Apache HTTP (80)

