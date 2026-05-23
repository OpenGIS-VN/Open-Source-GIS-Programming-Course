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

```txt
9:57:08 AM  [main] 	Initializing Control Panel
9:57:08 AM  [main] 	Windows Version:  Enterprise  64-bit
9:57:08 AM  [main] 	XAMPP Version: 7.2.22
9:57:08 AM  [main] 	Control Panel Version: 3.2.4  [ Compiled: Jun 5th 2019 ]
9:57:08 AM  [main] 	You are not running with administrator rights! This will work for
9:57:08 AM  [main] 	most application stuff but whenever you do something with services
9:57:08 AM  [main] 	there will be a security dialogue or things will break! So think 
9:57:08 AM  [main] 	about running this application with administrator rights!
9:57:08 AM  [main] 	XAMPP Installation Directory: "c:\xampp\"
9:57:08 AM  [main] 	Checking for prerequisites
9:57:08 AM  [main] 	All prerequisites found
9:57:08 AM  [main] 	Initializing Modules
9:57:08 AM  [Apache] 	Problem detected!
9:57:08 AM  [Apache] 	Port 80 in use by "Unable to open process" with PID 14324!
9:57:08 AM  [Apache] 	Apache WILL NOT start without the configured ports free!
9:57:08 AM  [Apache] 	You need to uninstall/disable/reconfigure the blocking application
9:57:08 AM  [Apache] 	or reconfigure Apache and the Control Panel to listen on a different port
9:57:08 AM  [main] 	The FileZilla module is disabled
9:57:08 AM  [main] 	The Mercury module is disabled
9:57:08 AM  [main] 	Starting Check-Timer
9:57:08 AM  [main] 	Control Panel Ready
9:57:10 AM  [Apache] 	Problem detected!
9:57:10 AM  [Apache] 	Port 80 in use by "Unable to open process" with PID 14324!
9:57:10 AM  [Apache] 	Apache WILL NOT start without the configured ports free!
9:57:10 AM  [Apache] 	You need to uninstall/disable/reconfigure the blocking application
9:57:10 AM  [Apache] 	or reconfigure Apache and the Control Panel to listen on a different port
9:57:10 AM  [Apache] 	Attempting to start Apache app...
9:57:10 AM  [Apache] 	Status change detected: running
9:57:11 AM  [Apache] 	Status change detected: stopped
9:57:11 AM  [Apache] 	Error: Apache shutdown unexpectedly.
9:57:11 AM  [Apache] 	This may be due to a blocked port, missing dependencies, 
9:57:11 AM  [Apache] 	improper privileges, a crash, or a shutdown by another method.
9:57:11 AM  [Apache] 	Press the Logs button to view error logs and check
9:57:11 AM  [Apache] 	the Windows Event Viewer for more clues
9:57:11 AM  [Apache] 	If you need more help, copy and post this
9:57:11 AM  [Apache] 	entire log window on the forums

```

<img width="542" height="343" alt="image" src="https://github.com/user-attachments/assets/f82b1188-d300-4357-b4f0-5b04f4847d84" />

Cần đổi port Apache HTTP sang port khác, ví dụ 81

Edit file `C:\xampp\apache\conf\httpd.conf`

Điều chỉnh 2 chỗ:

<img width="507" height="209" alt="image" src="https://github.com/user-attachments/assets/84dbd0ab-b627-4035-86fa-3fdaea87fd48" />

Đổi thành

```txt
#
# Listen: Allows you to bind Apache to specific IP addresses and/or
# ports, instead of the default. See also the <VirtualHost>
# directive.
#
# Change this to Listen on specific IP addresses as shown below to 
# prevent Apache from glomming onto all bound IP addresses.
#
#Listen 12.34.56.78:80
Listen 81
```

<img width="361" height="169" alt="image" src="https://github.com/user-attachments/assets/8353f8d8-c607-44fe-8814-4b9e96c5bebc" />

Đổi thành

```txt
# If your host doesn't have a registered DNS name, enter its IP address here.
#
ServerName localhost:81
```

Start lại Apache HTTP

<img width="512" height="129" alt="image" src="https://github.com/user-attachments/assets/c98b4660-de47-4803-a368-a710cd642a29" />

## Fix lỗi php chưa kết nối PostgreSQL

<img width="908" height="323" alt="image" src="https://github.com/user-attachments/assets/e7bc733d-5734-48d8-8658-ab63a46938bd" />

Sửa file `C:\xampp\php\php.ini`

Tìm những extension liên quan `pg`, bỏ comment đi

```txt
extension=pdo_pgsql
extension=pgsql
```
Restart Apache
