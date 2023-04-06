class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  getTasks() {
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

  sendUserInfo(data) {
    return fetch(`${this.url}users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.info,
      }),
    }).then((res) => {
      if (res.status === 200) {
        console.log(res);
        return res.json();
      }

      return Promise.reject("Произошла ошибка");
    });
  }

  createTask(data) {
    return fetch(this.url, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
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
