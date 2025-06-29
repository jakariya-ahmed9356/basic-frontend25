// Get DOM Element 
const form = document.getElementById('productForm');
const productList = document.getElementById('productList');
const submitBtn = document.getElementById('submitBtn');

// get input value
const productVal = document.getElementById('product').value;
const priceVal = document.getElementById('price').value;
const qtyVal = document.getElementById('qty').value;
const imgVal = document.getElementById('image').value;
const typeVal = document.getElementById('type').value;

// Load all saved product or initially empty list
// let products = JSON.parse(localStorage.getItem('products')) || [];
let storedData = localStorage.getItem('products');
let products = [];
// check localStorate is empty or not
try {
  products = storedData ? JSON.parse(storedData) : [];
} catch (err) {
  console.warn('Invalid JSON in localStorage, resetting to empty');
  products = [];
  localStorage.setItem('product', JSON.stringify([]));
}

// initially edit index null
const editingIndex = null;

// Save or update data in localStorage 
function saveLocalStorage() {
  localStorage.setItem('products', JSON.stringify(products));
}

// Handle for submission for create and update 
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page default

  // create product object and trim inputs
  const newProduct = {
    product: productVal.trim(),
    price: priceVal.trim(),
    qty: qtyVal.trim(),
    image: imgVal.trim(),
    type: typeVal.trim(),
  }

  // check create or update product
  if (editingIndex === null) {
    // Add new product
    products.push(newProduct);
    console.log(products);
  } else {
    // update existing product 
    products[editingIndex] = newProduct;
    editingIndex = null;
    submitBtn.textContent = 'Add Product';
  }
  // Set product in localStorage
  saveLocalStorage();
  renderProducts();
  form.reset();

});



// render all products 
function renderProducts() {
  productList.innerHTML = '<h3> All Products </h3>';
  const types = ['trending', 'featured', 'new'];
  // render products
  products.forEach((p, index) => renderSingleProduct(p, index));
  
  // Render products by product type
  types.forEach(type => {
    const filtered = products.filter(p => p.type === type);
    
    if (filtered.length > 0) {
      productList.innerHTML += `<h3> ${type.toUpperCase()} </h3>`;
      filtered.forEach((p, index) => renderSingleProduct(p, index));
    }

  });

}


// Render single product
function renderSingleProduct(p, index) {
  productList.innerHTML += `
    <div class="product">
          <img src="${p.image}" alt="${p.product}" />
          <div class="product-details">
            <strong>${p.product}</strong><br>
            Price: $${p.price} | Qty: ${p.qty} | Type: ${p.type}
          </div>
          <div>
            <button class="edit" value="${index}" > Edit </button>
            <button class="delete" value="${index}"> Delete </button>
        </div>
  `;
}

// call render product function
renderProducts();








