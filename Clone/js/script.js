const products = [
  {
    name: "Smart Watch",
    price: 2299,
    image: "assets/watch1.jpg",
    description: "Smart watch with health tracking and notifications",
    category: "Electronics"
  },
  {
    name: "Wireless Earbuds",
    price: 1499,
    image: "assets/earbuds1.jpg",
    description: "High quality earbuds with crisp sound",
    category: "Electronics"
  },
  {
    name: "Mobiles",
    price: 14999,
    image: "assets/mobile.jpg",
    description: "Smart Phones Under Budget",
    category: "Electronics"
  },
  {
    name: "Headphones",
    price: 1499,
    image: "assets/headphones.jpg",
    description: "High quality headphones with crisp sound",
    category: "Electronics"
  },
  {
    name: "Fitness watches",
    price: 699,
    image: "assets/fitness.jpg",
    description: "High quality fitness watches with crisp sound",
    category: "Electronics"
  },
  {
    name: "Boat Power Bank",
    price: 943,
    image: "assets/power.jpg",
    description: "High Speed Charging Power Banks by boAt",
    category: "Electronics"
  },
  {
    name: "Smart Ccamera",
    price: 1099,
    image: "assets/cam.jpg",
    description: "Smart and Cute Cameras for survilance",
    category: "Electronics"
  },
  {
    name: "Tablet Case and Covers",
    price: 299,
    image: "assets/tab.jpg",
    description: "High quality Tablet Covers to Protect your tabs for unexpected falls",
    category: "Electronics"
  },
  {
    name: "Electro Plated Covers",
    price: 250,
    image: "assets/electro.jpg",
    description: "High quality mobile covers with electro plating",
    category: "Electronics"
  },
  {
    name: "Laptops",
    price: 84999,
    image: "assets/laptop.jpg",
    description: "Laptop Laptop",
    category: "Electronics"
  },
  {
    name: "Towels",
    price: 299,
    image: "assets/towels.jpg",
    description: "High quality bath towels to protect skin",
    category: "Home & Furniture"
  },
  {
    name: "Ceiling Lamp",
    price: 1900,
    image: "assets/ceiling.jpg",
    description: "Ceiling Lamp which adds to the beauty of the home",
    category: "Home & Furniture"
  },
  {
    name: "Curtains",
    price: 600,
    image: "assets/curtains.jpg",
    description: "Set of 2 curtains with elegant designs",
    category: "Home & Furniture"
  },
  {
    name: "Mop Set",
    price: 499,
    image: "assets/mop.jpg",
    description: "Best Seller mop to clean house with high efficiency",
    category: "Home & Furniture"
  },
  {
    name: "Outdoor Chairs",
    price: 299,
    image: "assets/chair.jpg",
    description: "50% off on the set two chairs",
    category: "Home & Furniture"
  },
  {
    name: "Shower Head",
    price: 129,
    image: "assets/shower.jpg",
    description: "Best Seller shower heads with rain like experience",
    category: "Home & Furniture"
  },
  {
    name: "Bed",
    price: 1499,
    image: "assets/bed.jpg",
    description: "Affordable and easy to make shift beds with high quality material",
    category: "Home & Furniture"
  },
  {
    name: "Fruits/Vegetable Basket",
    price: 199,
    image: "assets/fruit.jpg",
    description: "Make things easier with baskets",
    category: "Home & Furniture"
  },
  {
    name: "Water Bottle",
    price: 120,
    image: "assets/waterbottle.jpg",
    description: "Affordable and Durable High Quality Bottle",
    category: "Home & Furniture"
  },
  {
    name: "Dinner Set",
    price: 499,
    image: "assets/dinnerset.jpg",
    description: "Best Quality Dinner Sets",
    category: "Home & Furniture"
  },
  {
    name: "Aloe Vera Gel",
    price: 54,
    image: "assets/aloe.jpg",
    description: "KalaAyurveda Aloe Vera Gel for Smoothening Skin and for other uses",
    category: "Beauty"
  },
  {
    name: "MamaEarth FaceWash",
    price: 154,
    image: "assets/facewash.jpg",
    description: "MamaEarths FashWash with natural Extracts to enchance your skin",
    category: "Beauty"
  },
  {
    name: "Fogg Perfume",
    price: 254,
    image: "assets/fogg.jpg",
    description: "Make people fall in love with you scent",
    category: "Beauty"
  },
  {
    name: "MakeUp Kit(mini)",
    price: 250,
    image: "assets/makeup.jpg",
    description: "Dwell in the world of Makaeup with broad range of shades",
    category: "Beauty"
  },
  {
    name: "Magic Soap",
    price: 200,
    image: "assets/soap.jpg",
    description: "SandalWood Soap to protect your skin made of pure natural ingrediants",
    category: "Beauty"
  },
  {
    name: "Black Head Remover",
    price: 361,
    image: "assets/blackhead.jpg",
    description: "Removes BlachHeads with ease",
    category: "Beauty"
  },
  {
    name: "AyumCare",
    price: 417,
    image: "assets/strech.jpg",
    description: "Ayumcure Stretch Mark Removal & Prevention Oil for womem",
    category: "Beauty"
  },
  {
    name: "Nivea Body Milk",
    price: 293,
    image: "assets/nivea.jpg",
    description: "NIVEA Body Milk, Big Moisturizer Lotion",
    category: "Beauty"
  },
  {
    name: "Vitamin C Face Cerum",
    price: 180,
    image: "assets/vitc.jpg",
    description: "Mamaearth Vitamin C Daily Glow Face Serum ",
    category: "Beauty"
  },
  {
    name: "Face Cerum",
    price: 199,
    image: "assets/cerum.jpg",
    description: "The Derma Co 2% Kojic Acid Face Serum ",
    category: "Beauty"
  },
  {
    name: "Ethnic Gown",
    price: 500,
    image: "assets/gown.jpg",
    description: "Made of Super Quality Cotton which is Comfortable",
    category: "Fashion"
  },
  {
    name: "Jewellery Set",
    price: 1500,
    image: "assets/jewellery.jpg",
    description: "Jewellery Set Make you look traditional",
    category: "Fashion"
  },
  {
    name: "T-Shirt",
    price: 500,
    image: "assets/shirt2.jpg",
    description: "Breathable t-shirts for men",
    category: "Fashion"
  },
  {
    name: "Sunglasses",
    price: 100,
    image: "assets/sunglass.jpg",
    description: "Fashionable sunglasses for men and women",
    category: "Fashion"
  },
  {
    name: "Belt And Wallets",
    price: 800,
    image: "assets/wallet.jpg",
    description: "Belt and Wallet which compliment each other",
    category: "Fashion"
  },
  {
    name: "Sandals",
    price: 700,
    image: "assets/heels.jpg",
    description: "Lift up yourself to built Confidence in your appearence",
    category: "Fashion"
  },
  {
    name: "Kids Top",
    price: 300,
    image: "assets/kids.jpg",
    description: "Fashionable Kids top",
    category: "Fashion"
  },
  {
    name: "Mens Pants",
    price: 350,
    image: "assets/pants.jpg",
    description: "Super comfy pants ",
    category: "Fashion"
  },
  {
    name: "Saree",
    price: 800,
    image: "assets/saree.jpg",
    description: "Traditional saree for significant events",
    category: "Fashion"
  },
  {
    name: "Shirt",
    price: 500,
    image: "assets/shirt.jpg",
    description: "Cotton shirts for men",
    category: "Fashion"
  },
  {
    name: "Smart TV",
    price: 8000,
    image: "assets/tv.jpg",
    description: "Experience Super Quality Video and Audio",
    category: "TVs & Appliances"
  },
  {
    name: " Table Fan",
    price: 700,
    image: "assets/fan0.jpg",
    description: "High Speed Fan",
    category: "TVs & Appliances"
  },
  {
    name: "Ceiling Fan",
    price: 850,
    image: "assets/fan.jpg",
    description: "Fly with the wings",
    category: "TVs & Appliances"
  },
  {
    name: "Table Fan",
    price: 800,
    image: "assets/fan3.jpg",
    description: "Fly with the wings and feel free to move it any time you want",
    category: "TVs & Appliances"
  },
  {
    name: "Electric Kettle",
    price: 549,
    image: "assets/kettle.jpg",
    description: "Easy to use and carry anywhere to warm yourself with ready cook meals or with hot sizzling water when ever you need",
    category: "TVs & Appliances"
  },
  {
    name: "Iron Box",
    price: 449,
    image: "assets/iron.jpg",
    description: "Be Formal and be confident in any occasion by enchancing your cloths looks",
    category: "TVs & Appliances"
  },
  {
    name: "Vaccum Cleaner",
    price: 2450,
    image: "assets/vaccum.jpg",
    description: "Electric Vaccum Cleaner which makes your house shiny",
    category: "TVs & Appliances"
  },
  {
    name: "Oven",
    price: 5000,
    image: "assets/oven.jpg",
    description: "Make the dishes freash",
    category: "TVs & Appliances"
  },
  {
    name: "Reffrigerator",
    price: 1500,
    image: "assets/fridge.jpg",
    description: "Be delighted to have this",
    category: "TVs & Appliances"
  },
  {
    name: "Ac",
    price: 50000,
    image: "assets/ac.jpg",
    description: "Made of Super Quality Cotton which is Comfortable",
    category: "TVs & Appliances"
  }
];

localStorage.setItem('products', JSON.stringify(products));

function filterCategory(category) {
  if (category === 'All') {
    showProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    showProducts(filtered);
  }
}

function showProducts(list) {
  const container = document.getElementById('productsGrid');
  container.innerHTML = '';
  list.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/200x200';">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="goToProduct(${i})">View Details</button>
      <button onclick="addToCart(${i})">Add to Cart</button>
    `;
    container.append(card);
  });
}

let currentUser = JSON.parse(localStorage.getItem('user')) || null;

function getCartKey() {
  return currentUser ? `cart_${currentUser.email}` : null;
}

function getUserCart() {
  const key = getCartKey();
  if (!key) return [];
  return JSON.parse(localStorage.getItem(key)) || [];
}

function saveUserCart(cartArray) {
  const key = getCartKey();
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(cartArray));
}

function isLoggedIn() {
  return !!currentUser;
}

function showWelcomeMessage() {
  if (isLoggedIn()) {
    document.getElementById('welcomeMessage').style.display = 'block';
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'inline-block';
  } else {
    document.getElementById('welcomeMessage').style.display = 'none';
    document.getElementById('loginBtn').style.display = 'inline-block';
    document.getElementById('logoutBtn').style.display = 'none';
  }
}

function showModal(auth = 'login') {
  const modal = document.getElementById('loginModal');
  modal.style.display = 'block';
  document.getElementById('loginForm').style.display = auth === 'login' ? 'block' : 'none';
  document.getElementById('registerForm').style.display = auth === 'register' ? 'block' : 'none';
}

function closeModal() {
  document.getElementById('loginModal').style.display = 'none';
}

window.onclick = e => { if (e.target.id === 'loginModal') closeModal(); };
document.querySelector('.close').onclick = closeModal;

document.getElementById('loginBtn').onclick = () => showModal('login');
document.getElementById('logoutBtn').onclick = () => {
  localStorage.removeItem('user');
  currentUser = null;
  showWelcomeMessage();
};

document.getElementById('showRegister').onclick = e => { e.preventDefault(); showModal('register'); };
document.getElementById('showLogin').onclick = e => { e.preventDefault(); showModal('login'); };

document.getElementById('loginSubmit').onclick = () => {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const saved = JSON.parse(localStorage.getItem('users') || '{}');
  if (saved[email] && saved[email].password === password) {
    currentUser = { email, name: saved[email].name };
    localStorage.setItem('user', JSON.stringify(currentUser));
    showToast('Logged in!');
    closeModal();
    showWelcomeMessage();
  } else {
    showToast('Invalid credentials');
  }
};

document.getElementById('regSubmit').onclick = () => {
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const saved = JSON.parse(localStorage.getItem('users') || '{}');
  if (saved[email]) {
    showToast('User already exists');
  } else {
    saved[email] = { password, name };
    localStorage.setItem('users', JSON.stringify(saved));
    showToast('Registered! Please login');
    showModal('login');
  }
};

function goToProduct(idx) { window.location.href = `product.html?id=${idx}`; }
function showToast(message, type = 'success', duration = 2500) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';

  const icon = document.createElement('span');
  icon.className = 'icon';
  icon.innerHTML = type === 'success'
    ? '&#10003;' // tick
    : '&#9888;'; // warning icon if needed

  toast.append(icon, document.createTextNode(message));
  container.append(toast);

  // Trigger transition
  setTimeout(() => toast.classList.add('show'), 50);

  // Auto-dismiss
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}


function addToCart(idx) {
  if (!isLoggedIn()) {
    showToast('Please login first', 'warning');
    showModal('login');
    return;
  }

  const cart = getUserCart();
  cart.push(products[idx]);
  saveUserCart(cart);
  showToast(products[idx].name + ' added to cart!', 'success');
}


document.getElementById('searchBtn').onclick = () => {
  const q = document.getElementById('searchInput').value.toLowerCase();
  showProducts(products.filter(p => p.name.toLowerCase().includes(q)));
};

function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalProductPrice').textContent = `₹${product.price}`;
    document.getElementById('productModal').style.display = 'block';
  }
}

document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('productModal').style.display = 'none';
});

window.onclick = function(event) {
  if (event.target == document.getElementById('productModal')) {
    document.getElementById('productModal').style.display = 'none';
  }
};


showProducts(products);
showWelcomeMessage();
