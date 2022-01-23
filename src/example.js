// import { UndoRedo } from "./js/index.js";
const { UndoRedo } = UndoRedoPack;
const undoRedo = new UndoRedo();

const textarea = document.querySelector("#textarea-undoRedo");
const undobtn = document.querySelector("#undo");
const redoBtn = document.querySelector("#redo");

textarea.addEventListener("input", (e) => handleChange(e));

undobtn.addEventListener("click", () => {
  textarea.value = undoRedo.undo();
  console.log(undoRedo);
  textarea.focus();
});

redoBtn.addEventListener("click", () => {
  textarea.value = undoRedo.redo();
  console.log(undoRedo);
  textarea.focus();
});

function handleChange(e) {
  const inputValue = e.target.value;
  undoRedo.addValueInList(inputValue);
  console.log(undoRedo);
}
