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
      userId: this.userId,
    };
  }

  setUserAvatar(data) {
    this.avatar.src = data.avatar;
  }

  setUserInfo(data) {
    this.userId  = data._id;
    this.name.textContent = data.name;
    this.info.textContent = data.about;
  }
}
