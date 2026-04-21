document.addEventListener("DOMContentLoaded", function () {
  // =========================================================
  // 1. CHỨC NĂNG ĐẾM NGƯỢC THỜI GIAN
  // =========================================================
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

  // =========================================================
  // 2. HIỆU ỨNG SCROLL REVEAL (CUỘN TRANG)
  // =========================================================
  const elementsToAnimate = document.querySelectorAll(
    ".features-box, .service-card, .why-img, .why-reasons, .review-card, .product-img, .news-card, .highlight-title, .news-title, .commit-text",
  );
  elementsToAnimate.forEach((el) => el.classList.add("reveal"));

  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - 60) {
        reveals[i].classList.add("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  reveal();

  // =========================================================
  // 3. KHO DỮ LIỆU SẢN PHẨM (Đã bổ sung Phân loại & Mức rang)
  // =========================================================
  const cafeProducts = [
    {
      id: 1,
      name: "Cà phê S (Chinh phục)",
      price: "91.000đ",
      image: "image/spcf1.png",
      category: "pha-phin",
      roast: "medium",
    },
    {
      id: 2,
      name: "Cà phê Sáng Tạo 8",
      price: "315.000đ",
      image: "image/spcf2.png",
      category: "pha-may",
      roast: "dark",
    },
    {
      id: 3,
      name: "Cà phê Sáng Tạo 1",
      price: "93.000đ",
      image: "image/spcf3.png",
      category: "pha-phin",
      roast: "light",
    },
    {
      id: 4,
      name: "Cà phê Sáng Tạo 5",
      price: "180.000đ",
      image: "image/spcf4.png",
      category: "pha-may",
      roast: "medium",
    },
    {
      id: 5,
      name: "Cà phê Sáng Tạo 8 - 500gr",
      price: "625.000đ",
      image: "image/spcf5.png",
      category: "pha-may",
      roast: "dark",
    },
    {
      id: 6,
      name: "Cà phê Sáng Tạo 4",
      price: "148.000đ",
      image: "image/spcf6.png",
      category: "pha-phin",
      roast: "medium",
    },
    {
      id: 7,
      name: "Cà phê LEGEND",
      price: "1.255.000đ",
      image: "image/spcf7.png",
      category: "rang-moc",
      roast: "light",
    },
    {
      id: 8,
      name: "Cà Phê Chế Phin 5",
      price: "293.000đ",
      image: "image/spcf8.png",
      category: "pha-phin",
      roast: "dark",
    },
    {
      id: 9,
      name: "Cà Phê Chế Phin 1",
      price: "154.000đ",
      image: "image/spcf9.png",
      category: "pha-phin",
      roast: "medium",
    },
    {
      id: 10,
      name: "Cà Phê Chế Phin 4",
      price: "246.000đ",
      image: "image/spcf10.png",
      category: "pha-phin",
      roast: "medium",
    },
    {
      id: 11,
      name: "Cà Phê Chế Phin 2",
      price: "176.000đ",
      image: "image/spcf11.png",
      category: "pha-phin",
      roast: "light",
    },
    {
      id: 12,
      name: "Cà phê Sức Sống",
      price: "135.000đ",
      image: "image/spcf12.png",
      category: "rang-moc",
      roast: "medium",
    },
    {
      id: 13,
      name: "Cà phê Sáng Tạo 3",
      price: "130.000đ",
      image: "image/spcf13.png",
      category: "pha-may",
      roast: "medium",
    },
    {
      id: 14,
      name: "Cà phê Sáng Tạo 2",
      price: "108.000đ",
      image: "image/spcf14.png",
      category: "pha-may",
      roast: "light",
    },
    {
      id: 15,
      name: "Cà Phê Chữ I",
      price: "107.000đ",
      image: "image/spcf15.png",
      category: "rang-moc",
      roast: "dark",
    },
    {
      id: 16,
      name: "Cà phê Gourmet Blend",
      price: "172.000đ",
      image: "image/spcf16.png",
      category: "pha-may",
      roast: "medium",
    },
    {
      id: 17,
      name: "Cà phê Premium Blend",
      price: "252.000đ",
      image: "image/spcf17.png",
      category: "rang-moc",
      roast: "dark",
    },
    {
      id: 18,
      name: "Cà Phê Chế Phin 3",
      price: "207.000đ",
      image: "image/spcf18.png",
      category: "pha-phin",
      roast: "medium",
    },
    {
      id: 19,
      name: "Cà Phê Rang Xay Chắt",
      price: "269.000đ",
      image: "image/spcf19.png",
      category: "rang-moc",
      roast: "medium",
    },
  ];

  // =========================================================
  // 4. HÚT DỮ LIỆU VÀ XỬ LÝ SẮP XẾP CHO TRANG "SẢN PHẨM CỦA CHÚNG TÔI"
  // =========================================================
  const sanphamContainer = document.getElementById("sanpham-product-list");
  if (sanphamContainer) {
    const spSortSelect = document.querySelector(".custom-select"); // Lấy cái thanh thả xuống ở trang sản phẩm

    // Hàm vẽ sản phẩm ra màn hình
    function renderSanpham(productsToRender) {
      sanphamContainer.innerHTML = "";
      let spHTML = "";
      productsToRender.forEach((sp) => {
        spHTML += `
          <div class="col">
            <div class="product-item-dark text-center">
              <div class="product-img-box mb-2">
                <img src="${sp.image}" alt="${sp.name}" class="img-fluid rounded" />
              </div>
              <h5 class="product-name-dark mt-3">
                <a href="#" class="text-white text-decoration-none">${sp.name}</a>
              </h5>
              <p class="product-price-dark text-light mb-0">${sp.price}</p>
            </div>
          </div>
        `;
      });
      sanphamContainer.innerHTML = spHTML;
    }

    // Hàm xử lý sắp xếp
    function applySanphamSort() {
      let sortedSP = [...cafeProducts]; // Copy từ kho dữ liệu gốc
      const sortValue = spSortSelect ? spSortSelect.value : "";

      // Công cụ lấy số tiền (Biến "91.000đ" thành số 91000)
      const getPriceValue = (priceStr) =>
        parseInt(priceStr.replace(/[^0-9]/g, ""));

      if (sortValue === "2") {
        sortedSP.sort(
          (a, b) => getPriceValue(a.price) - getPriceValue(b.price),
        ); // Giá thấp đến cao
      } else if (sortValue === "3") {
        sortedSP.sort(
          (a, b) => getPriceValue(b.price) - getPriceValue(a.price),
        ); // Giá cao xuống thấp (Nếu có)
      } else if (sortValue === "1") {
        sortedSP.sort((a, b) => b.id - a.id); // Mới nhất
      } else {
        sortedSP.sort((a, b) => a.id - b.id); // Chuẩn phổ biến (Mặc định)
      }

      // Vẽ lại lên web sau khi sắp xếp
      renderSanpham(sortedSP);
    }

    // Lắng nghe khi khách hàng bấm chọn thanh menu xổ xuống
    if (spSortSelect) {
      spSortSelect.addEventListener("change", applySanphamSort);
    }

    // Chạy vẽ màn hình lần đầu tiên khi load trang
    applySanphamSort();
  }

  // =========================================================
  // 5. THUẬT TOÁN TÌM KIẾM & LỌC CHO TRANG CỬA HÀNG
  // =========================================================
  const shopContainer = document.getElementById("shop-product-list");
  if (shopContainer) {
    // Lấy các thẻ HTML của công cụ lọc
    const searchInput = document.querySelector(".shop-search");
    const categoryLinks = document.querySelectorAll(".category-list a");
    const roastCheckboxes = document.querySelectorAll(".custom-checkbox");
    const sortSelect = document.querySelector(".shop-sort-bar select");
    const resultCountText = document.querySelector(".shop-sort-bar p");

    let activeCategory = "all"; // Mặc định hiển thị tất cả danh mục

    // Hàm Vẽ sản phẩm ra màn hình
    function renderShop(productsToRender) {
      shopContainer.innerHTML = "";

      // Nếu không tìm thấy sản phẩm nào
      if (productsToRender.length === 0) {
        shopContainer.innerHTML = `<h5 class="text-danger w-100 text-center mt-4">Không tìm thấy sản phẩm nào phù hợp!</h5>`;
        resultCountText.innerText = "Hiển thị 0 kết quả";
        return;
      }

      // Nếu có sản phẩm
      let html = "";
      productsToRender.forEach((sp) => {
        html += `
          <div class="col">
            <div class="product-grid-card">
              <img src="${sp.image}" alt="${sp.name}" class="product-grid-img">
              <div class="stars mb-2 text-warning">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
              </div>
              <a href="#" class="product-title-link">${sp.name}</a>
              <p class="product-price">${sp.price}</p>
              <button class="btn btn-add-cart"><i class="fas fa-cart-plus me-2"></i>Thêm vào giỏ</button>
            </div>
          </div>
        `;
      });
      shopContainer.innerHTML = html;
      resultCountText.innerText = `Hiển thị 1–${productsToRender.length} trong số ${productsToRender.length} kết quả`;
    }

    // Hàm Lọc và Sắp xếp chính
    function applyFilters() {
      let filtered = [...cafeProducts]; // Tạo một bản sao của kho dữ liệu

      // A. Lọc theo Tên (Tìm kiếm)
      const searchTerm = searchInput.value.toLowerCase().trim();
      if (searchTerm !== "") {
        filtered = filtered.filter((sp) =>
          sp.name.toLowerCase().includes(searchTerm),
        );
      }

      // B. Lọc theo Danh mục (Bên trái)
      if (activeCategory !== "all") {
        filtered = filtered.filter((sp) => sp.category === activeCategory);
      }

      // C. Lọc theo Mức độ Rang (Checkbox)
      const activeRoasts = Array.from(roastCheckboxes)
        .filter((cb) => cb.checked)
        .map((cb) => cb.id); // Lấy id của checkbox đang được tích

      if (activeRoasts.length > 0) {
        // Chuyển đổi ID của HTML sang chữ tiếng Anh trong kho dữ liệu
        const roastMap = {
          roastLight: "light",
          roastMedium: "medium",
          roastDark: "dark",
        };
        const validRoastValues = activeRoasts.map((id) => roastMap[id]);
        filtered = filtered.filter((sp) => validRoastValues.includes(sp.roast));
      }

      // D. Sắp xếp theo Giá và Độ mới
      const sortValue = sortSelect.value;
      // Công cụ lấy số tiền (Biến "91.000đ" thành số 91000 để máy tính hiểu)
      const getPriceValue = (priceStr) =>
        parseInt(priceStr.replace(/[^0-9]/g, ""));

      if (sortValue === "2") {
        filtered.sort(
          (a, b) => getPriceValue(a.price) - getPriceValue(b.price),
        ); // Giá thấp đến cao
      } else if (sortValue === "3") {
        filtered.sort(
          (a, b) => getPriceValue(b.price) - getPriceValue(a.price),
        ); // Giá cao xuống thấp
      } else if (sortValue === "1") {
        filtered.sort((a, b) => b.id - a.id); // Mới nhất (ID to xếp trước)
      } else {
        filtered.sort((a, b) => a.id - b.id); // Mặc định
      }

      // Vẽ lại kết quả sau khi đã lọc xong
      renderShop(filtered);
    }

    // Gắn "Tai nghe" (Event Listeners) để theo dõi hành động của người dùng

    // 1. Khi gõ chữ vào thanh tìm kiếm
    searchInput.addEventListener("input", applyFilters);
    document
      .querySelector(".btn-shop-search")
      .addEventListener("click", applyFilters);

    // 2. Khi click vào Danh mục bên trái
    categoryLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Ngăn trình duyệt nhảy trang

        // Bôi đậm danh mục đang chọn
        categoryLinks.forEach((l) => (l.style.fontWeight = "500"));
        this.style.fontWeight = "bold";

        // Gắn danh mục
        const text = this.innerText.toLowerCase();
        if (text.includes("pha phin")) activeCategory = "pha-phin";
        else if (text.includes("pha máy")) activeCategory = "pha-may";
        else if (text.includes("rang mộc")) activeCategory = "rang-moc";
        else activeCategory = "all";

        applyFilters(); // Gọi hàm lọc
      });
    });

    // 3. Khi tích/bỏ tích ô Mức độ rang
    roastCheckboxes.forEach((cb) =>
      cb.addEventListener("change", applyFilters),
    );

    // 4. Khi chọn ô Sắp xếp
    sortSelect.addEventListener("change", applyFilters);

    // Chạy lần đầu tiên khi vừa vào trang
    applyFilters();
  }
});
