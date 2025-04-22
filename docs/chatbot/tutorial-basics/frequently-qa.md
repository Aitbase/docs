---
sidebar_position: 4
sidebar_label: Q&A - Câu Hỏi Thường Gặp
---

# ❓ Q&A - Câu Hỏi Thường Gặp

Trang này tổng hợp những câu hỏi thường gặp khi sử dụng hệ thống Aitbase Data Sheet cho việc theo dõi booking từ chatbot.

---

### 💬 Dữ liệu booking được gửi từ đâu?
**Trả lời:** Dữ liệu được tự động gửi từ hệ thống chatbot sau khi khách hàng hoàn tất quá trình đặt dịch vụ. Tất cả thông tin sẽ được ghi nhận trong bảng **Service Booking**.

---

### 🧭 Tôi không thấy đoạn hội thoại (conversation) của người dùng dù họ đã nhắn tin cho fanpage?
**Trả lời:** Có thể là do trạng thái (status) của đoạn hội thoại đang là **Pending** — nghĩa là AI chatbot đang xử lý. Mặc định, hệ thống lọc các đoạn hội thoại có trạng thái là **Open**.

Bạn có thể:
- Điều chỉnh bộ lọc (filter) `Status` thành **All** để xem toàn bộ cuộc hội thoại.
- Kiểm tra xem đoạn hội thoại đó đã được **assign** cho bạn hay chưa. Chỉ những hội thoại được gán cho bạn mới hiển thị để tránh trùng lặp giữa các nhân sự.

---

### 🤖 Có thể tự động gán (assign) nhân viên live chat cho khách không?
**Trả lời:** Có. Hệ thống có thể cấu hình để tự động **assign live agent** cho người dùng dựa trên:
- Khung giờ làm việc
- Nhóm nhân sự trực
- Từ khóa trong nội dung hội thoại
Vui lòng liên hệ quản trị viên để được hỗ trợ thiết lập tính năng này.

---

### 🔎 Làm sao lọc các booking trong ngày hôm nay?
**Trả lời:** Dùng tính năng **Filter** trong bảng:
- Cột: `Check-in Date`
- Điều kiện: `is today`

---

### 🛎 Làm sao biết booking nào đã liên hệ, booking nào chưa?
**Trả lời:** Bạn nên thêm một cột mới tên **"Status"** với các lựa chọn như:
- Pending
- Open
- Resolved
- Cancelled

Giúp phân loại và theo dõi tiến độ dễ dàng hơn.

---

### 🗂 Tôi có thể thêm cột mới như “Ghi chú nội bộ” hoặc “Mã Booking” không?
**Trả lời:** Có thể. Bạn chỉ cần nhấn **+ Add field** ở đầu bảng để tạo thêm trường mới. Đảm bảo bạn có quyền chỉnh sửa bảng.

---

### 📤 Tôi có thể xuất danh sách booking ra Excel/CSV không?
**Trả lời:** Có. Trên thanh menu, chọn **Download CSV** để tải toàn bộ danh sách về máy tính.

---

### 👥 Có thể phân quyền người dùng khác nhau trên hệ thống không?
**Trả lời:** Có. Aitbase Sheet hỗ trợ phân quyền theo vai trò:
- **Viewer:** Chỉ xem
- **Editor:** Xem & chỉnh sửa
- **Creator:** Toàn quyền quản lý bảng
Liên hệ quản trị viên để thay đổi quyền người dùng.

---

### 🧑‍💼 Làm sao để tôi biết mình có đang phụ trách một cuộc hội thoại cụ thể hay không?
**Trả lời:** Mỗi conversation sẽ có trường "Assigned To". Nếu cuộc hội thoại không hiển thị, rất có thể nó chưa được assign cho bạn. Hãy kiểm tra lại bộ lọc hoặc trao đổi với nhóm phụ trách để được assign đúng.

---

### 🤝 Cần hỗ trợ thêm thì liên hệ ai?
**Trả lời:** Gửi tin nhắn nội bộ đến nhóm kỹ thuật AIT hoặc người quản trị Aitbase để được hỗ trợ nhanh nhất.

---