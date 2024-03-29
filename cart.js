// สร้างตัวแปร cart เพื่อเก็บข้อมูลของสินค้าในตะกร้า
const cart = {};

// เมื่อปุ่ม "Add to Cart" ถูกคลิก
document.querySelectorAll("#add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    // ดึงข้อมูลสินค้า ID และราคาจากแอตทริบิวต์ของปุ่ม
    const productId = button.getAttribute("data-product-id");
    const price = parseFloat(button.getAttribute("data-price"));

    // เพิ่มสินค้าเข้าในตะกร้าหรือเพิ่มปริมาณของสินค้าในตะกร้า
    if (!cart[productId]) {
      cart[productId] = { quantity: 1, price: price };
    } else {
      cart[productId].quantity++;
    }

    // อัปเดตการแสดงข้อมูลของตะกร้า
    updateCartDisplay();
  });
});

// ฟังก์ชันสำหรับอัปเดตการแสดงข้อมูลของตะกร้า
function updateCartDisplay() {
  const cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";

  let totalPrice = 0;

  // วนลูปผ่านสินค้าในตะกร้าเพื่อสร้างส่วนแสดงผลสินค้าแต่ละชิ้น
  for (const productId in cart) {
    const item = cart[productId];
    const itemTotalPrice = item.quantity * item.price;
    totalPrice += itemTotalPrice;
    const productElement = document.createElement("div");

    // สร้างส่วนแสดงข้อมูลของสินค้าและปุ่มลบ
    const productInfoElement = document.createElement("span");
    productInfoElement.textContent = `Product ${productId}: ${item.quantity} x $${item.price} = $${itemTotalPrice}`;
    productElement.appendChild(productInfoElement);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("btn", "btn-warning");
    removeButton.addEventListener("click", () => {
      removeProduct(productId);
      updateCartDisplay();
    });
    productElement.appendChild(removeButton);

    cartElement.appendChild(productElement);
  }

  // ตรวจสอบว่าตะกร้าว่างหรือไม่และแสดงข้อความที่เหมาะสม
  if (Object.keys(cart).length === 0) {
    cartElement.innerHTML = "<p>No items in cart.</p>";
  } else {
    // สร้างส่วนแสดงผลของราคารวมและปุ่มลบทั้งหมด
    const totalPriceElement = document.createElement("p");
    totalPriceElement.textContent = `Total Price: $${totalPrice}`;
    const placeOrderButton = document.createElement("button");
    placeOrderButton.textContent = "Place Order";
    placeOrderButton.classList.add("btn", "btn-success");
    cartElement.appendChild(totalPriceElement);

    const removeAllButton = document.createElement("button");
    removeAllButton.textContent = "Remove All";
    removeAllButton.classList.add("btn", "btn-danger");
    removeAllButton.addEventListener("click", () => {
      removeAllProducts();
      updateCartDisplay();
    });
    cartElement.appendChild(removeAllButton);
  }
}

// ฟังก์ชันสำหรับการลบสินค้าที่เลือกออกจากตะกร้า
function removeProduct(productId) {
  if (cart[productId].quantity > 1) {
    cart[productId].quantity--;
  } else {
    delete cart[productId];
  }
}

// ฟังก์ชันสำหรับการลบทั้งหมดในตะกร้า
function removeAllProducts() {
  for (const productId in cart) {
    delete cart[productId];
  }
}



//GPT
// ตัวอย่าง JavaScript เพื่อเพิ่มฟังก์ชันการคลิกเมนูบนโทรศัพท์มือถือ

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
  nav.classList.toggle('slide');
});
