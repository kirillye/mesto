export class Popup {
  constructor(selector) {
    this.element = document.querySelector(`${selector}`);
    this.btnClosePopup = this.element.querySelector(".popup__btn-close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this.element.classList.add("popup_opend");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    document.removeEventListener("keydown", this._handleEscClose);
    this.element.classList.remove("popup_opend");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this.btnClosePopup.addEventListener("click", () => this.close());
    this.element.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opend")) {
        this.close();
      }
    });
  }
}
