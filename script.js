document.addEventListener("DOMContentLoaded", function() {
    // Lấy phần tử chứa thời gian đếm ngược
    const countdownElement = document.getElementById("countdown");
    if (!countdownElement) return;
    
    // Lấy ngày hết hạn từ HTML (data-deadline)
    const deadlineString = countdownElement.getAttribute("data-deadline");
    const countDownDate = new Date(deadlineString).getTime();

    // Thiết lập hàm chạy lặp lại mỗi 1 giây (1000 milliseconds)
    const timerInterval = setInterval(function() {
        // Lấy mốc thời gian của ngay lúc này
        const now = new Date().getTime();

        // Tính toán khoảng thời gian còn lại
        const distance = countDownDate - now;

        // Tính số Ngày, Giờ, Phút, Giây
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Hiển thị ra các thẻ span tương ứng
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

        // Xử lý khi thời gian đếm ngược kết thúc
        if (distance < 0) {
            clearInterval(timerInterval); // Dừng bộ đếm
            countdownElement.innerHTML = "<h3 style='color: #ffb300; font-size: 24px;'>CHƯƠNG TRÌNH KHUYẾN MÃI ĐÃ KẾT THÚC</h3>";
        }
    }, 1000);
});