const products = [
  { name: "Laptop Dell", price: 1500 },
  { name: "iPhone 14", price: 1200 },
  { name: "Tai nghe Sony", price: 200 },
  { name: "Chuột Logitech", price: 50 },
  { name: "Bàn phím cơ", price: 100 }
];

const productList = document.getElementById("productList");

function renderProducts(list) {
  productList.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.textContent = `${p.name} - $${p.price}`;
    productList.appendChild(div);
  });
}

renderProducts(products);

function searchProduct() {
  const keyword = document.getElementById("searchInput").value
    .trim()
    .toLowerCase();

  const result = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );

  if (result.length === 0) {
    document.getElementById("error").textContent =
      "Không sản phẩm";
    productList.innerHTML = "";
  } else {
    document.getElementById("error").textContent = "";
    renderProducts(result);
  }
}
const form = document.getElementById("registerForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const agree = document.getElementById("agree").checked;

    const msg = document.getElementById("message");

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!passwordRegex.test(password)) {
      msg.textContent = "❌ Mật khẩu không hợp lệ";
      return;
    }

    if (!agree) {
      msg.textContent = "❌ Bạn phải đồng ý điều khoản";
      return;
    }

    const user = { name, email };
    localStorage.setItem("user", JSON.stringify(user));

    msg.textContent = "✅ Đăng ký thành công";
    form.reset();
  });
}
let time = 600;
let timerInterval;

const timerEl = document.getElementById("timer");

function startTimer() {
  timerInterval = setInterval(() => {
    time--;

    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");

    timerEl.textContent = `${minutes}:${seconds}`;

    if (time <= 60) {
      timerEl.classList.add("warning");
    }

    if (time <= 0) {
      clearInterval(timerInterval);
      alert("Hết giờ!");
    }
  }, 1000);
}

if (timerEl) startTimer();
