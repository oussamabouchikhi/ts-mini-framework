import { Collection } from '../models/Collection';

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    // Delete old HTML element
    this.parent.innerHTML = '';

    // Fragment that contains HTML elements
    const templateElement = document.createElement('template');

    // Create region/div/container, append some HTML
    // to it, then append it to the fragment element
    for (let model of this.collection.models) {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    }

    // Insert new HTML into the DOM
    this.parent.append(templateElement.content);
  }
}
