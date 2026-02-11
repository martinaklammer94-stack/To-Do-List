function addToDo() {
  toDoList.innerHTML +=
    '<li><input type="checkbox">' + toDoField.value + "</li>";
  toDoField.value = "";
}
