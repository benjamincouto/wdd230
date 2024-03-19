const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  if (input.value != "") {
    const myChapter = input.value;
    displayList(myChapter);
    chaptersArray.push(myChapter);
    setChapterList();
    input.value = "";
    input.focus();
  } else {
    input.focus();
  }
});

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

function displayList(item) {
  let newItem = document.createElement("li");
  let deleteButton = document.createElement("button");

  newItem.textContent = item;
  deleteButton.textContent = "ⓧ";
  deleteButton.classList.add("delete");
  newItem.append(deleteButton);
  list.append(newItem);

  deleteButton.addEventListener("click", () => {
    list.removeChild(newItem);
    deleteChapter(newItem.textContent);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem("myBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myBOMList"));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
