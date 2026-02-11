<<<<<<< HEAD
function addToDo() {
  toDoList.innerHTML +=
    '<li><input type="checkbox">' + toDoField.value + "</li>";
  toDoField.value = "";
}
=======
function addToDo() {
  toDoList.innerHTML +=
    '<li><input type="checkbox">' + toDoField.value + "</li>";
  toDoField.value = "";
}

function refresh() {
  toDoList.innerHTML = "";
}
>>>>>>> 6cac914 (Created CSS file and refresh button)
