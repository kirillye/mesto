import { Popup } from "./popup.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this.imagePopup = this.element.querySelector(".popup__image");
    this.figcaptionPopup = this.element.querySelector(".popup__figcaption");
  }

  open({ src, alt }) {
    this.imagePopup.src = src;
    this.imagePopup.alt = alt;
    this.figcaptionPopup.textContent = alt;
    super.open();
  }
}
