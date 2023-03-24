export class UserInfo {
  constructor({ name, info }) {
    this.name = document.querySelector(`${name}`);
    this.info = document.querySelector(`${info}`);
  }

  getUserInfo() {
    return {
      name: this.name.textContent,
      info: this.info.textContent,
    };
  }

  setUserInfo(data) {
    this.name.textContent = data.userName;
    this.info.textContent = data.userJob;
  }
}
