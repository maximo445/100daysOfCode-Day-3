const toggleListButton = document.getElementById('toggleListButton');
const listSection = document.getElementById('list-section');

const headingDescription = document.getElementById('heading-description');
const inputDescription = document.getElementById('inputDescription');
const changeDescriptionButton = document.getElementById('changeDescriptionButton');

const myList = document.getElementById('myList');
const myAddItem = document.getElementById('myAddItem');
const addItemButton = document.getElementById('addItemButton');
const removeItemButton = document.getElementById('removeItemButton');

let li;

let last;

addItemButton.addEventListener('click', () => {
  if (myAddItem.value != "") {
    li = document.createElement('li');
    li.textContent = myAddItem.value;
    myList.appendChild(li)
  }
  myAddItem.value = "";
});

removeItemButton.addEventListener('click', () => {
  last = document.querySelector('li:last-child');
  myList.removeChild(last);
});

toggleListButton.addEventListener('click', () => {
  if (listSection.style.display == "none") {
    listSection.style.display = "block";
    toggleListButton.textContent = "Hide list";
  } else {
    listSection.style.display = "none";
    toggleListButton.textContent = "Show list";
  }
});

changeDescriptionButton.addEventListener('click', () => {
  if (inputDescription.value != "") {
    headingDescription.textContent = inputDescription.value + ":";
  }

  inputDescription.value = "";
});
