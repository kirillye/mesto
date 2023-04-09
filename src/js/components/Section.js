export class Section {
  constructor() {
    // this._initialArray = items.reverse();
    // this.renderer = renderer;
    this._container = document.querySelector(".articles__grid");;
  }

  renderItems(array, callBack) {
    array.forEach((item) => {
      callBack(item);
      // this.addItem(cardElement);
    });
  }

  addItem(elem) {
    this._container.prepend(elem);
  }
}

export const cardList = new Section();