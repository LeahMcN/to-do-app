function onReady() {
  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');


  function createNewToDo() {
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++
    });

    newToDoText.value = '';

    renderTheUI();
  }

    function renderTheUI() {
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        newLi.textContent = toDo.title;

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);

            //add Delete button, event listener, deleteToDo function
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = "Delete";
        newLi.appendChild(deleteButton);

        deleteButton.addEventListener('click', event => {
          deleteToDo(toDo.id);
          renderTheUI();
        });

        function deleteToDo(id) {
          toDos = toDos.filter(function(todo) {
          return todo.id !== id
          });
        }

      });
    }

    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
      newToDoText.value = '';
      });


    renderTheUI();
}


window.onload = function() {
    onReady();
};
