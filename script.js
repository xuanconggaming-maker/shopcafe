document.addEventListener("DOMContentLoaded", function () {
  // --- 1. CHỨC NĂNG ĐẾM NGƯỢC THỜI GIAN ---
  const countdownElement = document.getElementById("countdown");
  if (countdownElement) {
    const deadlineString = countdownElement.getAttribute("data-deadline");
    const countDownDate = new Date(deadlineString).getTime();

    const timerInterval = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days < 10 ? "0" + days : days;
      document.getElementById("hours").innerText =
        hours < 10 ? "0" + hours : hours;
      document.getElementById("minutes").innerText =
        minutes < 10 ? "0" + minutes : minutes;
      document.getElementById("seconds").innerText =
        seconds < 10 ? "0" + seconds : seconds;

      if (distance < 0) {
        clearInterval(timerInterval);
        countdownElement.innerHTML =
          "<h3 style='color: #4a2511; font-size: 24px; font-weight: bold;'>CHƯƠNG TRÌNH KHUYẾN MÃI ĐÃ KẾT THÚC</h3>";
      }
    }, 1000);
  }

  // --- 2. HIỆU ỨNG SCROLL REVEAL (HIỆN LÊN KHI CUỘN TRANG) ---
  // Tự động ghim class "reveal" vào các khối cần tạo hiệu ứng
  const elementsToAnimate = document.querySelectorAll(
    ".features-box, .service-card, .why-img, .why-reasons, .review-card, .product-img, .news-card, .highlight-title, .news-title, .commit-text",
  );
  elementsToAnimate.forEach((el) => el.classList.add("reveal"));

  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 60; // Khoảng cách từ mép dưới màn hình để kích hoạt hiệu ứng

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

  // Lắng nghe sự kiện cuộn chuột
  window.addEventListener("scroll", reveal);

  // Chạy luôn hàm 1 lần khi vừa load web để hiển thị các khối nằm sẵn trên màn hình
  reveal();
});
