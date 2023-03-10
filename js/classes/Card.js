import { openImagePopup } from "../main.js";

export class Card {
  constructor({ name, link }, selector) {
    this.name = name;
    this.link = link;
    this.selector = selector;

    this._removeCard = this._removeCard.bind(this);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this.selector)
      .content.querySelector(".articles__item")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this.article = this._getTemplate();

    this.article.querySelector(".articles__image").src = this.link;
    this.article.querySelector(".articles__image").alt = this.name;
    this.article.querySelector(".articles__title").textContent = this.name;

    this._setEventListeners();

    return this.article;
  }

  _setEventListeners() {
    this.article
      .querySelector(".articles__image")
      .addEventListener("click", this._openImageCard);

    this.article
      .querySelector(".articles__icon-trush")
      .addEventListener("click", () => {
        this._removeCard();
      });

    this.article
      .querySelector(".articles__icon-like")
      .addEventListener("click", this._toggleLikeStatus);
  }

  _openImageCard(evt) {
    openImagePopup(evt.target.closest(".articles__image"));
  }

  _toggleLikeStatus(evt) {
    evt.target.classList.toggle("articles__icon-like_active");
  }

  _removeCard() {
    this.article.remove();
  }
}
