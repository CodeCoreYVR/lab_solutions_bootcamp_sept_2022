const baseURL = "http://localhost:3000/api/v1";

export const Product = {
  index() {
    return fetch(`${baseURL}/products`).then((response) => {
      console.log(response);
      return response.json();
    });
  },
  create(params) {
    return fetch(`${baseURL}/products`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  show(id) {
    return fetch(`${baseURL}/products/${id}`).then((res) => res.json());
  },
  update(id, params) {
    return fetch(`${baseURL}/products/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  destroy(id) {
    return fetch(`${baseURL}/products/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
  },
};

export const Session = {
  create(params) {
    return fetch(`${baseURL}/session`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
};
