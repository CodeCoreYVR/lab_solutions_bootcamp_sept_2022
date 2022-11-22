const baseURL = "http://127.0.0.1:3000/api/v1";

const Product = {
  index() {
    return fetch(`${baseURL}/products`).then((response) => {
      console.log(response);
      return response.json();
    });
  }
};

// Product.index().then(products => console.log(products))

const productsContainer = document.querySelector(".product-list");
function loadproducts() {
  Product.index().then((products) => {
    console.log(products);
    productsContainer.innerHTML = products.map((q) => {
      return `
      <li>
        <a class="product-link" data-id="${q.id}" href="#">${q.id} - ${q.title}</a>
      </li>
      `;
    }).join("");
  })
}

loadproducts();

