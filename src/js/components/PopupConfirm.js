import { Popup } from "./popup.js";

export class PopupConfirm extends Popup {
  constructor({ selector, callback }) {
    super(selector);
    this.callback = callback;
    this.btn = document.querySelector('#popup-btn-confirm');

    this.delete = this.delete.bind(this);
  }

  setEventListeners() {
    this.btn.addEventListener("click", this.delete);
    super.setEventListeners();
  }

  delete() {
    this.callback(this.card);
  }

  open(data) {
    this.card = data;
    super.open();
  }

  close() {
    // this.btn.removeEventListener("click", this.delete);
    super.close();
  }
}
