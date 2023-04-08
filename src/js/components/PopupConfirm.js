import { Popup } from "./popup.js";

export class PopupConfirm extends Popup {
  constructor({ selector, btn, callback }) {
    super(selector);
    this.callback = callback;
    this.btn = btn;

    this.delete = this.delete.bind(this);
  }

  setEventListeners() {
    super.setEventListeners();
  }

  delete() {
    this.callback(this.card);
  }

  open(data) {
    this.card = data;
    this.btn.addEventListener("click", this.delete);
    super.open();
  }

  close() {
    this.btn.removeEventListener("click", this.delete);
    super.close();
  }
}
