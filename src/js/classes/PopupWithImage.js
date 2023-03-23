import { Popup } from "./popup.js";

export class PopupWithImage extends Popup {
  open({ src, alt }) {
    const imagePopup = this.element.querySelector(".popup__image");
    imagePopup.src = src;
    imagePopup.alt = alt;
    this.element.querySelector(".popup__figcaption").textContent = alt;
    super.open();
  }
}
