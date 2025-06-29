    const form = document.getElementById('productForm');
    const productList = document.getElementById('productList');
    const submitBtn = document.getElementById('submitBtn');

    let products = JSON.parse(localStorage.getItem('products')) || [];
    let editingIndex = null;
console.log(products);
    function saveToLocalStorage() {
      localStorage.setItem('products', JSON.stringify(products));
    }

    function renderProducts() {
      productList.innerHTML = '<h3>📦 All Products</h3>';
      const types = ['trending', 'featured', 'new'];

      // Show all products first
      products.forEach((p, index) => renderSingleProduct(p, index));

      // Group by type and render under headings
      types.forEach(type => {
        const filtered = products.filter(p => p.type === type);
        if (filtered.length > 0) {
          productList.innerHTML += `<div class="type-heading">${type.toUpperCase()}</div>`;
          filtered.forEach((p, index) => renderSingleProduct(p, index));
        }
      });
    }

    function renderSingleProduct(p, index) {
      productList.innerHTML += `
        <div class="product">
          <img src="${p.image}" alt="${p.product}" />
          <div class="product-details">
            <strong>${p.product}</strong><br>
            Price: $${p.price} | Qty: ${p.qty} | Type: ${p.type}
          </div>
          <div>
            <button class="edit" onclick="editProduct(${index})">Edit</button>
            <button class="delete" onclick="deleteProduct(${index})">Delete</button>
          </div>
        </div>
      `;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const newProduct = {
        product: document.getElementById('product').value.trim(),
        price: parseFloat(document.getElementById('price').value),
        qty: parseInt(document.getElementById('qty').value),
        image: document.getElementById('image').value.trim(),
        type: document.getElementById('type').value
      };

      if (editingIndex === null) {
        products.push(newProduct);
      } else {
        products[editingIndex] = newProduct;
        editingIndex = null;
        submitBtn.textContent = 'Add Product';
      }

      saveToLocalStorage();
      renderProducts();
      form.reset();
    });

    function editProduct(index) {
      const p = products[index];
      document.getElementById('product').value = p.product;
      document.getElementById('price').value = p.price;
      document.getElementById('qty').value = p.qty;
      document.getElementById('image').value = p.image;
      document.getElementById('type').value = p.type;

      editingIndex = index;
      submitBtn.textContent = 'Update Product';
    }

    function deleteProduct(index) {
      if (confirm('Are you sure you want to delete this product?')) {
        products.splice(index, 1);
        saveToLocalStorage();
        renderProducts();
      }
    }

    renderProducts();