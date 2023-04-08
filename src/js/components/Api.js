class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  getCards() {
    return fetch(`${this.url}cards`, {
      headers: this.headers,
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      }

      return Promise.reject("Произошла ошибка");
    });
  }

  getUserInfo() {
    return fetch(`${this.url}users/me`, {
      headers: this.headers,
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      }

      return Promise.reject("Произошла ошибка");
    });
  }

  sendCard({ articleTitle, linkImage }) {
    return fetch(`${this.url}cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: articleTitle,
        link: linkImage,
      }),
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      }

      return Promise.reject("Произошла ошибка");
    });
  }

  putLike(id) {
    return fetch(`${this.url}cards/${id}/likes `, {
      method: "PUT",
      headers: this.headers,
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      }

      return Promise.reject("Произошла ошибка");
    });
  }

  removeLike(id) {
    return fetch(`${this.url}cards/${id}/likes `, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      }

      return Promise.reject("Произошла ошибка");
    });
  }

  removeCard(id) {
    return fetch(`${this.url}cards/${id}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      }

      return Promise.reject("Произошла ошибка");
    });
  }

  sendUserInfo(data) {
    return fetch(`${this.url}users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: data.userName,
        about: data.userJob,
      }),
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      }

      return Promise.reject("Произошла ошибка");
    });
  }

  sendUserAvatar(avatar) {
    return fetch(`${this.url}users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      }

      return Promise.reject("Произошла ошибка");
    });
  }
}

export const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-63/",
  headers: {
    authorization: "329c4ea8-6d08-414a-aa1f-2a25b10eec2c",
    "Content-Type": "application/json",
  },
});
