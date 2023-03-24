export class Section {
  constructor({ items, renderer }, cardListContainer) {
    this._initialArray = items;
    this.renderer = renderer;
    this._container = cardListContainer;
  }

  renderItems() {
    this._initialArray.forEach((item) => this.renderer(item));
  }

  addItem(elem) {
    this._container.prepend(elem);
  }
}
