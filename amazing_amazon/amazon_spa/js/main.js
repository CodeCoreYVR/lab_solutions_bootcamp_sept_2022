const baseURL = "http://127.0.0.1:3000/api/v1";
const JWT = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6IkpvbiIsImxhc3RfbmFtZSI6IlNub3ciLCJmdWxsX25hbWUiOiJKb24gU25vdyIsImV4cCI6MTUyNDI0MjU2M30.COvnWFwszM7YiLflSu17eP7RwL3eJzey179cTHBPbx0';
const userEmail = "1@1.com";

const Product = {
  index() {
    return fetch(`${baseURL}/products`).then((response) => {
      console.log(response);
      return response.json();
    });
  },
  show(id) {
    return fetch(`${baseURL}/products/${id}`).then((res) => res.json());
  },

  create(productFormData) {
		return fetch(`${baseURL}/products/`, {
			// headers: {
			// 	token: jwt
			// },
      // credentials: 'include',
			method: 'POST',
			body: productFormData
		})
			.then(res => res.json())
			.catch(console.error);
	}
};

// Product.index().then(products => console.log(products))
function navigateTo(id) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  document.querySelector(`.page#${id}`).classList.add("active");

  document.querySelectorAll("a.item").forEach((page) => {
    page.classList.remove("active");
  });

  const navLink = document.querySelector(`a[data-target=${id}]`);
  if (navLink) {
    navLink.classList.add("active");
  }
}

const navbar = document.querySelector(".menu.navbar");

navbar.addEventListener("click", (event) => {
  const navLink = event.target.closest("a");

  if (navLink) {
    event.preventDefault();
    const pageId = navLink.dataset.target;
    navigateTo(pageId);
  }
});

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

const productShowPage = document.querySelector("#product-show");
function renderProductShowPage(id) {
  Product.show(id).then(({ id, title, description, price }) => {
    productShowPage.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        <small>$ ${price}</small>
        <div>
            <button data-action="edit" data-id="${id} href="#">Edit</button>
            <button data-action="delete" data-id="${id} href="#">Delete</button>
        </div>
        `;
    navigateTo("product-show");
  });
}

loadproducts();

productsContainer.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.matches("a.product-link")) {
    const productId = event.target.dataset.id;
    renderProductShowPage(productId);
  }
});

const Session = {
  create(params) {
    // let formData = new URLSearchParams(Object.entries(params)).toString();
    return fetch(`${baseURL}/session`, {
      method: 'POST',
      // credentials: 'include', //need this for cookies to be allowed to be sent
      header: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
      // body: formData
    })
  }
}

const newProductForm = document.querySelector('#new-product-form');
newProductForm.addEventListener('submit', (event) => {
  event.preventDefault();
		const formData = new FormData(event.currentTarget);
    formData.append("userEmail", userEmail)
		Product.create(formData).then(res => {
      if(res && res.id) {
        loadproducts();
        renderProductShowPage(res.id);
      } else {
        alert("Something went wrong!")
      }
		});
})
