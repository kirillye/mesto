export class Section {
  constructor({ items, renderer }, cardListSelector) {
    this._initialArray = items;
    this.renderer = renderer;
    this._container = cardListSelector;
  }

  renderItems() {
    this._initialArray.forEach((item) => this.renderer(item));
  }

  addItem(elem) {
    this._container.append(elem);
  }
}
