// Product data
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    description:
      "Premium wireless headphones with noise cancellation technology.",
    image: "https://media.wired.com/photos/66abec9ccb172c2e5de763bf/master/w_960,c_limit/Edifier-Stax-Spirit-S5-Headphones-Offwhite-Background-SOURCE-Amazon.jpg?height=100&width=100",
    category: "electronics",
  },
  {
    id: 2,
    name: "Smart Fitness Tracker",
    price: 49.99,
    description: "Track your steps, heart rate, sleep quality, and more.",
    image: "https://media.wired.com/photos/652559da5f11119fb77b3aa9/master/w_960,c_limit/Fitbit-Charge-6-Review-Gear.jpg?height=300&width=300",
    category: "electronics",
  },
  {
    id: 3,
    name: "Men's Casual T-Shirt",
    price: 24.99,
    description: "Comfortable cotton t-shirt with a modern fit.",
    image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N78216s.jpg?im=Resize,width=750?height=300&width=300",
    category: "clothing",
  },
  {
    id: 4,
    name: "Women's Running Shoes",
    price: 89.99,
    description:
      "Lightweight and breathable running shoes with cushioned soles.",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/379140/01/mod01/fnd/IND/fmt/png/ForeverRun-NITRO%E2%84%A2-Knit-Women's-Running-Shoes?height=300&width=300",
    category: "clothing",
  },
  {
    id: 5,
    name: "Non-Stick Cookware Set",
    price: 129.99,
    description: "10-piece cookware set with non-stick coating.",
    image: "https://m.media-amazon.com/images/I/31dJEUhp+5L._SR290,290_.jpg?height=300&width=300",
    category: "home",
  },
  {
    id: 6,
    name: "Organic Skincare Set",
    price: 59.99,
    description:
      "Complete skincare set with cleanser, toner, moisturizer, and serum.",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/20831434/2022/11/19/6a13c552-0e6d-40de-8b32-74554115daf21668857945376SkinCareGiftSet1.jpg?height=300&width=300",
    category: "beauty",
  },
  {
    id: 7,
    name: "Football",
    price: 29.99,
    description: "Durable and high-quality football for outdoor play.",
    image: "https://contents.mediadecathlon.com/p2571200/k$b82c4d966457a4abcd0459712da2d08f/size-5-hybrid-football-club-ball-light-white.jpg?format=auto&quality=70&f=768x768?height=300&width=300",
    category: "sports",
  },
  {
    id: 8,
    name: "Yoga Mat",
    price: 39.99,
    description: "Non-slip yoga mat with extra cushioning for comfort.",
    image: "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw61dbae07/images/large/195204678305-1.jpg?height=300&width=300",
    category: "sports",
  },
  {
    id: 9,
    name: "Mystery Novel",
    price: 14.99,
    description:
      "A thrilling mystery novel that will keep you on the edge of your seat.",
    image: "https://static01.nyt.com/images/2023/11/28/books/28nita-prose-cover/28nita-prose-cover-articleLarge.jpg?quality=75&auto=webp&disable=upscale?height=300&width=300",
    category: "books",
  },
  {
    id: 10,
    name: "Children's Puzzle Set",
    price: 19.99,
    description: "Fun and educational puzzle set for kids.",
    image: "https://i.ebayimg.com/images/g/S4EAAOSwVgtmdk0O/s-l1200.jpg?height=300&width=300",
    category: "toys",
  },
];

// DOM Elements
const productsContainer = document.getElementById("products-container");
const sortSelect = document.getElementById("sort-select");
const cartButton = document.getElementById("cart-button");
const cartDropdown = document.getElementById("cart-dropdown");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const emptyCartMessage = document.getElementById("empty-cart-message");
const checkoutButton = document.getElementById("checkout-button");
const productModal = document.getElementById("product-modal");
const closeModal = document.getElementById("close-modal");
const modalProductTitle = document.getElementById("modal-product-title");
const modalProductImage = document.getElementById("modal-product-image");
const modalProductDescription = document.getElementById(
  "modal-product-description"
);
const modalProductPrice = document.getElementById("modal-product-price");
const modalQuantity = document.getElementById("modal-quantity");
const decreaseQuantity = document.getElementById("decrease-quantity");
const increaseQuantity = document.getElementById("increase-quantity");
const addToCartModal = document.getElementById("add-to-cart-modal");
const categoryCards = document.querySelectorAll(".category-card");
const checkoutModal = document.getElementById("checkout-modal");
const closeCheckout = document.getElementById("close-checkout");
const shippingForm = document.getElementById("shipping-form");
const paymentForm = document.getElementById("payment-form");
const backToShipping = document.getElementById("back-to-shipping");
const shippingStep = document.getElementById("shipping-step");
const paymentStep = document.getElementById("payment-step");
const confirmationStep = document.getElementById("confirmation-step");
const checkoutSubtotal = document.getElementById("checkout-subtotal");
const checkoutShipping = document.getElementById("checkout-shipping");
const checkoutTotal = document.getElementById("checkout-total");
const orderNumber = document.getElementById("order-number");
const confirmationEmail = document.getElementById("confirmation-email");
const continueShopping = document.getElementById("continue-shopping");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");
const contactForm = document.getElementById("contact-form");

// Cart data
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentProduct = null;
let filteredProducts = [...products];

// Initialize the page
function init() {
  displayProducts(products);
  updateCartCount();
  updateCartDropdown();
}

// Display products in the container
function displayProducts(productsToDisplay) {
  productsContainer.innerHTML = "";

  productsToDisplay.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className =
      "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition";
    productCard.innerHTML = `
            <img src="${product.image}" alt="${
      product.name
    }" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-semibold text-lg mb-2">${product.name}</h3>
                <p class="text-emerald-600 font-bold mb-2">$${product.price.toFixed(
                  2
                )}</p>
                <button class="view-product-btn w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition" data-id="${
                  product.id
                }">
                    View Details
                </button>
            </div>
        `;
    productsContainer.appendChild(productCard);

    // Add event listener to the view product button
    const viewProductBtn = productCard.querySelector(".view-product-btn");
    viewProductBtn.addEventListener("click", () => openProductModal(product));
  });
}

// Open product modal
function openProductModal(product) {
  currentProduct = product;
  modalProductTitle.textContent = product.name;
  modalProductImage.src = product.image;
  modalProductImage.alt = product.name;
  modalProductDescription.textContent = product.description;
  modalProductPrice.textContent = `$${product.price.toFixed(2)}`;
  modalQuantity.value = 1;
  productModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

// Close product modal
function closeProductModal() {
  productModal.classList.add("hidden");
  document.body.style.overflow = "auto";
  currentProduct = null;
}

// Add to cart
function addToCart(product, quantity) {
  const quantityNum = Number.parseInt(quantity);

  // Check if product is already in cart
  const existingItemIndex = cart.findIndex((item) => item.id === product.id);

  if (existingItemIndex !== -1) {
    // Update quantity if product already exists
    cart[existingItemIndex].quantity += quantityNum;
  } else {
    // Add new product to cart
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantityNum,
    });
  }

  // Save cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update cart UI
  updateCartCount();
  updateCartDropdown();
}

// Update cart count
function updateCartCount() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
}

// Update cart dropdown
function updateCartDropdown() {
  if (cart.length === 0) {
    emptyCartMessage.classList.remove("hidden");
    cartTotal.textContent = "$0.00";
    return;
  }

  emptyCartMessage.classList.add("hidden");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "flex items-center py-2 border-b border-gray-200";
    cartItem.innerHTML = `
            <img src="${item.image}" alt="${
      item.name
    }" class="w-12 h-12 object-cover rounded-md mr-3">
            <div class="flex-grow">
                <h4 class="text-sm font-semibold">${item.name}</h4>
                <div class="flex justify-between items-center mt-1">
                    <span class="text-gray-600 text-sm">${
                      item.quantity
                    } × $${item.price.toFixed(2)}</span>
                    <button class="remove-item-btn text-red-500 text-sm" data-id="${
                      item.id
                    }">Remove</button>
                </div>
            </div>
        `;
    cartItems.appendChild(cartItem);

    // Add event listener to remove button
    const removeBtn = cartItem.querySelector(".remove-item-btn");
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      removeFromCart(item.id);
    });
  });

  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  updateCartDropdown();
}

// Filter products by category
function filterProductsByCategory(category) {
  if (category === "all") {
    displayProducts(products); // Show all products
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    displayProducts(filteredProducts); // Show filtered products
  }
}

// Sort products
function sortProducts(sortType) {
  let sortedProducts = [...filteredProducts];

  switch (sortType) {
    case "price-low":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      // Default sorting (featured)
      sortedProducts = [...filteredProducts];
  }

  displayProducts(sortedProducts);
}

// Update checkout information
function updateCheckoutInfo() {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 5.99;
  const total = subtotal + shipping;

  checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  checkoutTotal.textContent = `$${total.toFixed(2)}`;
}

// Generate random order number
function generateOrderNumber() {
  return "ORD-" + Math.floor(100000 + Math.random() * 900000);
}

// Event Listeners
document.addEventListener("DOMContentLoaded", init);

// Sort select change
sortSelect.addEventListener("change", () => {
  sortProducts(sortSelect.value);
});

// Cart button click
cartButton.addEventListener("click", (e) => {
  e.stopPropagation();
  cartDropdown.classList.toggle("hidden");
});

// Close cart when clicking outside
document.addEventListener("click", (e) => {
  if (!cartButton.contains(e.target) && !cartDropdown.contains(e.target)) {
    cartDropdown.classList.add("hidden");
  }
});

// Modal quantity buttons
decreaseQuantity.addEventListener("click", () => {
  if (modalQuantity.value > 1) {
    modalQuantity.value = Number.parseInt(modalQuantity.value) - 1;
  }
});

increaseQuantity.addEventListener("click", () => {
  modalQuantity.value = Number.parseInt(modalQuantity.value) + 1;
});

// Add to cart from modal
addToCartModal.addEventListener("click", () => {
  if (currentProduct) {
    addToCart(currentProduct, modalQuantity.value);
    closeProductModal();

    // Show cart dropdown after adding item
    cartDropdown.classList.remove("hidden");

    // Auto-hide cart dropdown after 3 seconds
    setTimeout(() => {
      cartDropdown.classList.add("hidden");
    }, 3000);
  }
});

// Close modal button
closeModal.addEventListener("click", closeProductModal);

// Close modal when clicking outside
productModal.addEventListener("click", (e) => {
  if (e.target === productModal) {
    closeProductModal();
  }
});

// Category filtering
categoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const category = card.dataset.category;
    filterProductsByCategory(category);
  });
});

// Checkout button
checkoutButton.addEventListener("click", () => {
  if (cart.length === 0) return;

  updateCheckoutInfo();
  checkoutModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  // Reset checkout steps
  shippingStep.classList.remove("hidden");
  paymentStep.classList.add("hidden");
  confirmationStep.classList.add("hidden");
});

// Close checkout modal
closeCheckout.addEventListener("click", () => {
  checkoutModal.classList.add("hidden");
  document.body.style.overflow = "auto";
});

// Close checkout when clicking outside
checkoutModal.addEventListener("click", (e) => {
  if (e.target === checkoutModal) {
    checkoutModal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
});

// Shipping form submission
shippingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  shippingStep.classList.add("hidden");
  paymentStep.classList.remove("hidden");
});

// Back to shipping button
backToShipping.addEventListener("click", () => {
  paymentStep.classList.add("hidden");
  shippingStep.classList.remove("hidden");
});

// Payment form submission
paymentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get email for confirmation
  const email = document.getElementById("email").value;
  confirmationEmail.textContent = email;

  // Generate order number
  orderNumber.textContent = generateOrderNumber();

  // Show confirmation step
  paymentStep.classList.add("hidden");
  confirmationStep.classList.remove("hidden");

  // Clear cart
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  updateCartDropdown();
});

// Continue shopping button
continueShopping.addEventListener("click", () => {
  checkoutModal.classList.add("hidden");
  document.body.style.overflow = "auto";
});

// Dark Mode Toggle
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// Search Functionality
searchButton.addEventListener("click", () => {
  const query = searchBar.value.toLowerCase();
  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
  displayProducts(filtered);
});

// Highlight Active Category
categoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    categoryCards.forEach((c) => c.classList.remove("bg-emerald-100"));
    card.classList.add("bg-emerald-100");
  });
});

// Contact Form Submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simulate sending the message
  alert(`Thank you, ${name}! Your message has been sent successfully.`);

  // Clear the form
  contactForm.reset();
});

// Add event listeners to category cards
categoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const category = card.dataset.category; // Get the category from the card
    filterProductsByCategory(category); // Filter products
    categoryCards.forEach((c) => c.classList.remove("bg-emerald-100")); // Remove highlight from all cards
    card.classList.add("bg-emerald-100"); // Highlight the selected card
  });
});
