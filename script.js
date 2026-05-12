
const products = [
  { id:0, name:'Smart Watch Silver Color Modern', price:998.00, original:1128.00, discount:'-12%', category:'Electronics', img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80', imgs:['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80','https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80','https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=500&q=80'], desc:'Premium smartwatch with advanced health monitoring features. Tracks heart rate, sleep, and activity. Water resistant up to 50m.' },
  { id:1, name:'Laptop Pro 15" High Performance', price:998.00, original:1128.00, discount:'-12%', category:'Electronics', img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80', imgs:['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80','https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80'], desc:'High performance laptop with Intel Core i7, 16GB RAM, 512GB SSD. Perfect for work and entertainment.' },
  { id:2, name:'Canon Camera EOS 2000 Black 10x Zoom', price:998.00, original:1128.00, discount:'-12%', category:'Electronics', img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80', imgs:['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80','https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500&q=80'], desc:'Professional DSLR camera with 24.2MP sensor, 4K video recording, and 10x optical zoom lens.' },
  { id:3, name:'Premium Headphones Noise Cancelling', price:998.00, original:null, discount:null, category:'Electronics', img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80', imgs:['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80','https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80'], desc:'Studio-quality sound with active noise cancellation. 30-hour battery life, foldable design for travel.' },
  { id:4, name:'Ergonomic Soft Chair Beige', price:34.00, original:null, discount:null, category:'Home & Garden', img:'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80', imgs:['https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80'], desc:'Comfortable ergonomic chair with premium fabric upholstery. Perfect for home office or living room.' },
  { id:5, name:'Modern Sofa Grey Luxury', price:99.00, original:129.00, discount:'-23%', category:'Home & Garden', img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80', imgs:['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80'], desc:'Contemporary 3-seater sofa with high-density foam. Easy to assemble, comes with removable covers.' },
  { id:6, name:'T-shirts with Multiple Colors for Men', price:10.30, original:null, discount:null, category:'Clothing', img:'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&q=80', imgs:['https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&q=80'], desc:'Premium cotton t-shirt available in multiple colors. Comfortable fit for everyday wear.' },
  { id:7, name:'Jeans Shorts for Men Blue Color', price:10.30, original:null, discount:null, category:'Clothing', img:'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=500&q=80', imgs:['https://images.unsplash.com/photo-1560243563-062bfc001d68?w=500&q=80'], desc:'Classic denim shorts with a modern cut. Perfect for casual summer outfits.' },
  { id:8, name:'Brown Winter Coat Medium Size', price:12.50, original:null, discount:null, category:'Clothing', img:'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&q=80', imgs:['https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&q=80'], desc:'Warm winter coat with faux fur lining. Water-resistant exterior, stylish brown color.' },
  { id:9, name:'Jeans Bag for Travel for Men', price:34.00, original:null, discount:null, category:'Accessories', img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80', imgs:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80'], desc:'Durable denim travel bag with multiple compartments. Fits 15" laptop, ideal for daily commute.' },
  { id:10, name:'Leather Wallet Premium Brown', price:99.00, original:null, discount:null, category:'Accessories', img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80', imgs:['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80'], desc:'Genuine leather bifold wallet with RFID blocking. 8 card slots, 2 bill compartments.' },
  { id:11, name:'GoPro HERO6 4K Action Camera Black', price:9.99, original:null, discount:null, category:'Electronics', img:'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500&q=80', imgs:['https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500&q=80'], desc:'4K action camera with image stabilization. Waterproof up to 33ft, perfect for adventure sports.' }
];

// CART STATE
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let currentView = 'list';
let currentDetailId = 0;

// PAGE NAVIGATION
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  window.scrollTo(0,0);
}

function goToListing() {
  renderListingProducts();
  showPage('listing');
}

function showDetail(id) {
  currentDetailId = id;
  const p = products[id];
  document.getElementById('detailTitle').textContent = p.name;
  document.getElementById('detailPrice').textContent = '$'+p.price.toFixed(2);
  document.getElementById('detailOriginal').textContent = p.original ? '$'+p.original.toFixed(2) : '';
  document.getElementById('detailDiscount').textContent = p.discount || '';
  document.getElementById('detailCat').textContent = p.category;
  document.getElementById('detailBreadcrumb').textContent = p.name;
  document.getElementById('mainDetailImg').src = p.img;
  document.getElementById('qtyInput').value = 1;
  const detailWishBtn = document.getElementById('detailWishBtn');
  detailWishBtn.classList.remove('active');
  detailWishBtn.innerHTML = '<i class="far fa-heart"></i>';

  const thumbRow = document.getElementById('thumbRow');
  thumbRow.innerHTML = '';
  p.imgs.forEach((src,i) => {
    const img = document.createElement('img');
    img.className = 'thumb' + (i===0?' active':'');
    img.src = src;
    img.onclick = () => {
      document.getElementById('mainDetailImg').src = src;
      document.querySelectorAll('.thumb').forEach(t=>t.classList.remove('active'));
      img.classList.add('active');
    };
    thumbRow.appendChild(img);
  });

  // Related
  const related = products.filter(pr => pr.id !== id).slice(0,5);
  renderProductCards(related, 'relatedGrid');

  showPage('detail');
}

// RENDER PRODUCT CARDS
function renderProductCards(prods, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  prods.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="card-info">
        <div class="price">$${p.price.toFixed(2)}</div>
        <div class="title">${p.name}</div>
      </div>`;
    card.onclick = () => showDetail(p.id);
    container.appendChild(card);
  });
}

// LISTING PRODUCTS
function renderListingProducts() {
  const listView = document.getElementById('listView');
  const gridView = document.getElementById('gridView');

  listView.innerHTML = '';
  products.forEach((p,i) => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="list-item-info">
        <h3>${p.name}</h3>
        <div class="list-item-price">$${p.price.toFixed(2)}${p.original?`<span class="original">$${p.original.toFixed(2)}</span>`:''}</div>
        <div class="rating-row"><span class="stars">★★★★☆</span><span class="rating-num">7.5</span><span class="orders-count">• 154 orders</span><span class="free-ship">• Free Shipping</span></div>
        <p class="list-item-desc">${p.desc}</p>
        <a class="link-detail" href="#" onclick="showDetail(${p.id}); return false;">View details</a>
      </div>
      <div class="fav-btn">
        <button onclick="toggleFav(this, event)"><i class="far fa-heart"></i></button>
      </div>`;
    item.querySelector('img').onclick = () => showDetail(p.id);
    item.querySelector('h3').onclick = () => showDetail(p.id);
    listView.appendChild(item);
  });

  gridView.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="card-info">
        <div class="price">$${p.price.toFixed(2)}${p.original?`<span style="font-size:0.85rem;font-weight:400;color:var(--text-muted);text-decoration:line-through;margin-left:6px">$${p.original.toFixed(2)}</span>`:''}</div>
        <div class="title">${p.name}</div>
        <div style="margin-top:8px;font-size:0.8rem;color:var(--text-muted)">★★★★☆ 7.5 • 154 orders</div>
      </div>`;
    card.onclick = () => showDetail(p.id);
    gridView.appendChild(card);
  });
}

function setView(v) {
  currentView = v;
  if(v==='list') {
    document.getElementById('listView').style.display='flex';
    document.getElementById('gridView').style.display='none';
    document.getElementById('listViewBtn').classList.add('active');
    document.getElementById('gridViewBtn').classList.remove('active');
  } else {
    document.getElementById('listView').style.display='none';
    document.getElementById('gridView').style.display='grid';
    document.getElementById('listViewBtn').classList.remove('active');
    document.getElementById('gridViewBtn').classList.add('active');
  }
}

function switchPage(n) {
  document.querySelectorAll('.page-num').forEach(p => p.classList.remove('active'));
  event.target.classList.add('active');
}

// CART FUNCTIONS
function addToCart(productId, qty=1) {
  const existing = cart.find(c => c.id === productId);
  if(existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  saveCart();
  updateCartBadge();
  showToast('Added to cart!');
}

function addToCartDetail() {
  const qty = parseInt(document.getElementById('qtyInput').value) || 1;
  addToCart(currentDetailId, qty);
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.id !== productId);
  saveCart();
  updateCartBadge();
  renderCart();
}

function updateCartQty(productId, qty) {
  const item = cart.find(c => c.id === productId);
  if(item) {
    item.qty = Math.max(1, qty);
    saveCart();
    updateCartBadge();
    renderCart();
  }
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartBadge();
  renderCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const total = cart.reduce((s,c) => s+c.qty, 0);
  document.getElementById('cartBadge').textContent = total;
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const emptyCart = document.getElementById('emptyCart');
  const cartTable = document.getElementById('cartTable');
  const count = document.getElementById('cartItemCount');

  if(cart.length === 0) {
    cartTable.style.display='none';
    emptyCart.style.display='block';
    count.textContent = '(0 items)';
    document.getElementById('summarySubtotal').textContent = '$0.00';
    document.getElementById('summaryTax').textContent = '$0.00';
    document.getElementById('summaryTotal').textContent = '$0.00';
    return;
  }

  cartTable.style.display='block';
  emptyCart.style.display='none';
  count.textContent = `(${cart.reduce((s,c)=>s+c.qty,0)} items)`;

  cartItems.innerHTML = '';
  let subtotal = 0;
  cart.forEach(item => {
    const p = products.find(pr => pr.id === item.id);
    if(!p) return;
    const total = p.price * item.qty;
    subtotal += total;
    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <div class="cart-product">
        <img src="${p.img}" alt="${p.name}">
        <div class="cp-info">
          <h4>${p.name}</h4>
          <p>${p.category}</p>
        </div>
      </div>
      <div class="cart-price">$${p.price.toFixed(2)}</div>
      <div class="cart-qty">
        <div class="qty-ctrl">
          <button onclick="updateCartQty(${p.id}, ${item.qty-1})">−</button>
          <input type="number" value="${item.qty}" min="1" style="width:50px;height:36px;border:none;border-left:1px solid var(--border);border-right:1px solid var(--border);text-align:center;outline:none;" onchange="updateCartQty(${p.id}, parseInt(this.value))">
          <button onclick="updateCartQty(${p.id}, ${item.qty+1})">+</button>
        </div>
      </div>
      <div class="cart-total">$${total.toFixed(2)}</div>
      <div class="cart-remove"><button onclick="removeFromCart(${p.id})"><i class="fas fa-times"></i></button></div>`;
    cartItems.appendChild(row);
  });

  const tax = subtotal * 0.05;
  document.getElementById('summarySubtotal').textContent = '$'+subtotal.toFixed(2);
  document.getElementById('summaryTax').textContent = '$'+tax.toFixed(2);
  document.getElementById('summaryTotal').textContent = '$'+(subtotal+tax).toFixed(2);
}

// QTY CONTROL
function changeQty(delta) {
  const input = document.getElementById('qtyInput');
  input.value = Math.max(1, parseInt(input.value)+delta);
}

// WISH TOGGLE
function toggleWish(btn) {
  btn.classList.toggle('active');
  if(btn.classList.contains('active')) {
    btn.innerHTML = '<i class="fas fa-heart"></i>';
    showToast('Added to wishlist!');
  } else {
    btn.innerHTML = '<i class="far fa-heart"></i>';
  }
}

function toggleFav(btn, e) {
  e.stopPropagation();
  btn.classList.toggle('active');
  if(btn.classList.contains('active')) {
    btn.innerHTML = '<i class="fas fa-heart"></i>';
    btn.style.color = 'var(--red)';
    btn.style.borderColor = 'var(--red)';
    showToast('Added to wishlist!');
  } else {
    btn.innerHTML = '<i class="far fa-heart"></i>';
    btn.style.color = '';
    btn.style.borderColor = '';
  }
}

// TOAST
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// SEARCH
function handleSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if(q) { renderListingProducts(); showPage('listing'); }
}
document.getElementById('searchInput').addEventListener('keydown', e => { if(e.key==='Enter') handleSearch(); });

// COUNTDOWN TIMER
function updateCountdown() {
  let end = new Date();
  end.setDate(end.getDate() + 4);
  end.setHours(end.getHours() + 13);
  function tick() {
    const now = new Date();
    const diff = end - now;
    if(diff <= 0) return;
    const d = Math.floor(diff/86400000);
    const h = Math.floor((diff%86400000)/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    document.getElementById('days').textContent = String(d).padStart(2,'0');
    document.getElementById('hours').textContent = String(h).padStart(2,'0');
    document.getElementById('mins').textContent = String(m).padStart(2,'0');
    document.getElementById('secs').textContent = String(s).padStart(2,'0');
  }
  tick();
  setInterval(tick, 1000);
}

// INIT
renderProductCards(products.slice(0,10), 'recGrid');
renderListingProducts();
updateCartBadge();
renderCart();
updateCountdown();
