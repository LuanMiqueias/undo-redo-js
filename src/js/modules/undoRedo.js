import Deque from "./deque.js";

export default class UndoRedo {
  constructor() {
    this.redoItems = new Deque();
    this.undoItems = new Deque();
    this.maxLength = 50;
    this.initialValue = null;

    this.addValueInList(this.initialValue); // List initial value
  }

  isMaxLength() {
    if (this.redoItems.size() - 1 >= this.maxLength) return true;
    console.log(this.redoItems.count);
    return false;
  }
  addValueInList(value) {
    if (this.isMaxLength()) this.redoItems.removeBack();

    this.redoItems.addFront(value);
  }
  undo() {
    const redoValue = this.redoItems.size() > 1 && this.redoItems.removeFront();
    if (redoValue) this.undoItems.addFront(redoValue);

    return this.redoItems.peekFront() || null;
  }
  redo() {
    const undoValue = !this.isMaxLength() && this.undoItems.removeFront();
    if (undoValue) this.redoItems.addFront(undoValue);

    return this.redoItems.peekFront() || null;
  }
}
