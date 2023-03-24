export class Card {
  constructor({ name, link }, selector, handleCardClick) {
    this.name = name;
    this.link = link;
    this.selector = selector;
    this.handleCardClick = handleCardClick;

    this._removeCard = this._removeCard.bind(this);
    this._openImageCard = this._openImageCard.bind(this);
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
    this._cardImage = this.article.querySelector(".articles__image");

    this._cardImage.src = this.link;
    this._cardImage.alt = this.name;
    this.article.querySelector(".articles__title").textContent = this.name;

    this._setEventListeners();

    return this.article;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", this._openImageCard);

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
    this.handleCardClick({ src: this.link, alt: this.name });
  }

  _toggleLikeStatus(evt) {
    evt.target.classList.toggle("articles__icon-like_active");
  }

  _removeCard() {
    this.article.remove();
  }
}
