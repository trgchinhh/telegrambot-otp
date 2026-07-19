# Telegram otp demo

## Giới thiệu

Đây là một dự án nhỏ mô phỏng cách hoạt động của xác thực đa yếu tố, tập trung vào hình thức xác thực hai yếu tố (2FA) phổ biến hiện nay. Nhiều dịch vụ lớn như Google, Facebook và GitHub đều hỗ trợ 2FA bằng cách gửi mã xác minh (OTP) qua SMS, email hoặc ứng dụng xác thực nhu Google Authenticator để xác nhận danh tính người dùng, giúp tăng cường bảo mật và giảm nguy cơ truy cập trái phép vào tài khoản.

Cảm hứng được lấy từ video của anh **Vũ Nguyễn Coder**<br>
Video lấy cảm hứng: [Xác thực đa yếu tố Vũ Nguyễn Coder](https://www.youtube.com/watch?v=9Okd87cZ0mw)

## Tính năng 

Mình chỉ dùng bot telegram để demo gửi mã otp về, trong hệ thống lớn thì họ sẽ dùng những nhà cung cấp như VN có Stringee 

Các bước thực hiện 

- Đăng nhập bằng **Username** và **Password**.
- Sinh mã OTP ngẫu nhiên gồm **4 chữ số**.
- Sau khi đăng nhập thành công, **tele bot** sẽ gửi mã otp đến bạn.
- Xác minh OTP trước khi cho phép đăng nhập chính thức.
- Thông báo kết quả đăng nhập qua Telegram và thông báo web.

---

## Quy trình hoạt động đầy đủ

```text
Người dùng
      │
      ▼
Nhập Username & Password
      │
      ▼
Server xác thực tài khoản
      │
      ├─────────────────────────────┐
      ▼                             ▼
Thông tin hợp lệ             Thông tin không hợp lệ
      │                             │
      ▼                             ▼
Sinh mã OTP                  Từ chối đăng nhập
      │
      ▼
Gửi OTP qua Telegram Bot
      │
      ▼
Người dùng nhập OTP
      │
      ▼
Server kiểm tra OTP
      │
      ├─────────────────────────────┐
      ▼                             ▼
OTP hợp lệ                   OTP không hợp lệ
      │                             │
      ▼                             ▼
Đăng nhập thành công         Từ chối đăng nhập
```
---

## Cài đặt 

```bash
git clone https://github.com/trgchinhh/telegram-otp-demo.git
cd telegram-otp-demo
npm install
```

> Lưu ý: tạo file .env trong backend/ 
```env
API_BOT=<THAY_API_BOT>
PORT=3000
``` 

> Chạy bằng file `run.cpp`, để khởi chạy dự án nhanh  
```bash
g++ run.cpp -o run.exe
./run
```

## Tài khoản demo

| Username | Password |
|:---------|:---------|
| `chinh`  | `3004` |
| `bao`    | `2206` |
| `an`     | `0912` |
| `minh`   | `1234` |
| `quang`  | `2345` |
| `tu`     | `9999` |

# Lưu ý

- Đây là dự án phục vụ mục đích học tập và minh họa quy trình xác thực hai yếu tố.
- OTP hiện được lưu trong bộ nhớ (RAM) và tin nhắn telegram, chưa sử dụng cơ sở dữ liệu.
- Chưa giới hạn số lần nhập OTP hoặc thời gian hết hạn của OTP.
- Không nên sử dụng trực tiếp trong môi trường thực tế vì còn thiếu rất nhiều tính năng bảo mật khác.

---

## Tác giả
**Nguyễn Trường Chinh (NTC++)**<br>
**GitHub:** [https://github.com/trgchinhh](https://github.com/trgchinhh)

---

> 📌 Dự án nhỏ được phát triển với mục đích học tập và nghiên cứu. Mọi góp ý và đóng góp đều được hoan nghênh.
