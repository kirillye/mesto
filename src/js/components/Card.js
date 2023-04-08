export class Card {
  constructor(
    { name, link, likeUsers, likes, id, owner },
    selector,
    handleCardClick,
    openPopup,
    putLike,
    removeLike,
    checkUser
  ) {
    this.name = name;
    this.link = link;
    this.likes = likes;
    this.likeUsers = likeUsers;
    this.id = id;
    this.owner = owner;
    this.selector = selector;
    this.handleCardClick = handleCardClick;
    this.openPopup = openPopup;
    this.checkUser = checkUser;
    this.putLike = putLike;
    this.removeLike = removeLike;

    this._removeCard = this._removeCard.bind(this);
    this._openImageCard = this._openImageCard.bind(this);
    this._toggleLikeStatus = this._toggleLikeStatus.bind(this);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this.selector)
      .content.querySelector(".articles__item")
      .cloneNode(true);

    return cardElement;
  }

  checkOwner() {
    const user = this.checkUser();
    return user.name == this.owner.name && user.info == this.owner.about;
  }

  checkLike() {
    const user = this.checkUser();
    const even = this.likeUsers.some((element) => {
      return user.name == element.name && user.info == element.about;
    });
    return even;
  }

  generateCard() {
    this.article = this._getTemplate();
    this.likeElement = this.article.querySelector(".articles__likes");
    this._cardImage = this.article.querySelector(".articles__image");

    this._cardImage.src = this.link;
    this._cardImage.alt = this.name;
    this.article.querySelector(".articles__title").textContent = this.name;
    this.likeElement.textContent = this.likes;
    if (!this.checkOwner()) {
      this.article.querySelector(".articles__icon-trush").disabled = true;
      this.article
        .querySelector(".articles__icon-trush")
        .classList.add("articles__icon-trush_disabled");
    }

    if (this.checkLike()) {
      this.article
        .querySelector(".articles__icon-like")
        .classList.toggle("articles__icon-like_active");
    }
    this._setEventListeners();

    return this.article;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", this._openImageCard);

    this.article
      .querySelector(".articles__icon-trush")
      .addEventListener("click", () => {
        this.openPopup(this);
      });

    this.article
      .querySelector(".articles__icon-like")
      .addEventListener("click", this._toggleLikeStatus);
  }

  _openImageCard(evt) {
    this.handleCardClick({ src: this.link, alt: this.name });
  }

  changeSumLike(number) {
    this.likeElement.textContent = number;
  }

  _toggleLikeStatus(evt) {
    if (!evt.target.classList.contains("articles__icon-like_active")) {
      this.putLike(this);
      // this.putLike(this);
      // this.changeSumLike(true);
    } else {
      this.removeLike(this);
      // this.changeSumLike(false);
    }
    evt.target.classList.toggle("articles__icon-like_active");
  }

  _removeCard() {
    this.article.remove();
  }
}
