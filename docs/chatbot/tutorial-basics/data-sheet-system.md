---
sidebar_position: 3
---

# Hệ thống Data Sheet

📋 Hướng Dẫn Sử Dụng Aitbase Data Sheet

---

## 🧩 Giới thiệu

**Aitbase Data Sheet** là nơi lưu trữ các thông tin đặt dịch vụ (booking) được tạo tự động từ hệ thống chatbot. Nhân viên CSKH có thể truy cập danh sách này để kiểm tra, xác nhận và liên hệ với khách hàng.

![Aitbase Sheet](/img/docs/aitbase-sheet-demo.png "Aitbase Sheet").

---

## 🔄 Cơ chế hoạt động

- Khi khách hàng thực hiện đặt phòng hoặc dịch vụ qua **chatbot**, thông tin sẽ tự động được ghi lại tại mục **Service Booking** trong hệ thống Aitbase.
- Mỗi dòng dữ liệu là một đơn booking tương ứng.

---

## 🗂 Cấu trúc dữ liệu booking

Dưới đây là các cột dữ liệu hiển thị trong bảng:

| Cột | Mô tả |
|-----|------|
| **Customer Name** | Họ tên khách hàng đã đặt dịch vụ |
| **Channel** | Kênh đặt dịch vụ (ví dụ: FacebookPage, Website, Zalo,...) |
| **Channel Sender** | Tên người gửi từ kênh tương ứng |
| **Phone Number** | Số điện thoại khách hàng để liên hệ |
| **Number of Guests** | Số lượng người đi cùng |
| **Check-in Date** | Ngày nhận phòng/dịch vụ |
| **Check-out Date** | Ngày trả phòng/kết thúc dịch vụ |
| **Room Type** | Loại phòng đã đặt (Deluxe, Standard, v.v.) |

---

## ✅ Quy trình xử lý cho Nhân viên CSKH

1. Truy cập bảng **Service Booking** tại mục **The Empyrean Hotel**.
2. Lọc các booking mới dựa theo ngày hoặc sắp xếp theo thứ tự tạo gần nhất.
3. Kiểm tra chi tiết từng dòng:
   - Đảm bảo số điện thoại đầy đủ và đúng định dạng.
   - Xác nhận lại số khách và loại phòng.
4. Gọi điện hoặc nhắn tin xác nhận với khách hàng.
5. Ghi chú nội dung đã xử lý (nếu hệ thống có cột “Status” hoặc “Ghi chú”).

---

## 🛠 Mẹo sử dụng nâng cao

- Dùng tính năng **Filter** để lọc các booking trong ngày hôm nay hoặc tuần này.
- Dùng tính năng **Group by Channel** để biết lượng booking đến từ từng kênh.
- Dùng **Sort by Check-in Date** để ưu tiên xử lý các đơn sắp đến.

---

## 📞 Lưu ý khi liên hệ khách hàng

- Gọi điện xác nhận trước ngày check-in ít nhất 1–2 ngày.
- Giữ thái độ thân thiện, chuyên nghiệp khi liên hệ.
- Ghi chú lại kết quả liên hệ (nếu hệ thống có trường "Trạng thái").

---

## 💬 Hỗ trợ

Nếu bạn gặp khó khăn khi truy cập dữ liệu hoặc cần thêm cột mới, vui lòng liên hệ bộ phận kỹ thuật Aitbase để được hỗ trợ.

