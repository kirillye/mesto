export class UserInfo {
  constructor({ name, info, avatar }) {
    this.name = document.querySelector(`${name}`);
    this.info = document.querySelector(`${info}`);
    this.avatar = document.querySelector(`${avatar}`);
  }

  getUserInfo() {
    return {
      name: this.name.textContent,
      info: this.info.textContent,
    };
  }

  setUserAvatar(src) {
    this.avatar.src = src;
  }

  setUserInfo(data) {
    this.name.textContent = data.userName;
    this.info.textContent = data.userJob;
  }
}
