const baseURL = process.env.REACT_APP_AMAZON_REQUEST_URL;

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

export const Review = {
  create(params, userId) {
    return fetch(`${baseURL}/users/${userId}/reviews`, {  ///api/v1/users/:user_id/reviews
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  }
}

export const User = {
  current() {
    return fetch(`${baseURL}/users/current`, {
      credentials: "include",
    }).then((res) => {
      console.log(res);
      res.json();
    });
  },
  create(params) {
    return fetch(`${baseURL}/users`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
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
