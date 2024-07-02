let todoListArray = JSON.parse(localStorage.getItem("todolist")) || [];

//   {
//     name: "make dinner",
//     dueDate: "2024/06/23",
//   },
//   {
//     name: "wash dishes",
//     dueDate: "2024/06/23",
//   },
// ];

renderList();

// adding the input todo list in the array
function addArray() {

  const name = document.querySelector("#js-input-list").value;

  const dueDate = document.querySelector("#js-due-date").value;
  if(name === ''){
    alert('TODO Name cannot be empty');
  }

 else{
  todoListArray.push({
    // name: name,
    // dueDate: date,
    // using shorthand property
    name,
    dueDate,
  });
  localStorage.setItem("todolist", JSON.stringify(todoListArray));
  document.querySelector("#js-input-list").value = "";
  renderList();
 }
}

//rendering the inputted todo list
function renderList() {
  
  let todo = "";
  for (let i = 0; i < todoListArray.length; i++) {
    const todoObject = todoListArray[i];
    // const name = todoObject.name;  commaonly used

    // const { name } = todoObject; Destructuring shortcut

    // const { dueDate } = todoObject;  Destructuring

    const { name, dueDate } = todoObject; //destructuring shortcut for two properties
    const HTML = `
    <div class="SN">${i+1}.</div>
    <div class="display-todo-grid">${name}</div>
    <div class="display-todo-grid">${dueDate}</div>
        <button class = "js-delete-button delete-button
        display-todo-grid"
        onclick="todoListArray.splice(${i},1);
        localStorage.setItem('todolist',JSON.stringify(todoListArray));
        
        renderList();
        ">Delete</button>`;
        
    todo += HTML;
  }
  document.querySelector(".displayList").innerHTML = todo;
}



// let todoListArray = JSON.parse(localStorage.getItem('todolist')) || [];

// renderList();

// // adding the input todo list in the array
// function addArray() {
//   const name = document.querySelector("#js-input-list").value;
//   const dueDate = document.querySelector("#js-due-date").value;

//   if (name === '') {
//     alert('TODO Name cannot be empty');
//   } else {
//     todoListArray.push({
//       name,
//       dueDate,
//     });
//     localStorage.setItem("todolist", JSON.stringify(todoListArray));
//     document.querySelector("#js-input-list").value = "";
//     renderList();
//   }
// }

// // rendering the inputted todo list
// function renderList() {
//   let todo = ""; // clear the todo variable
//   for (let i = 0; i < todoListArray.length; i++) {
//     const todoObject = todoListArray[i];
//     const { name, dueDate } = todoObject;
//     const HTML = `
//       <div class="SN">${i+1}.</div>
//       <div class="display-todo-grid">${name}</div>
//       <div class="display-todo-grid">${dueDate}</div>
//       <button class="js-delete-button delete-button display-todo-grid"
//         onclick="deleteTodo(${i});">Delete</button>`;
//     todo += HTML;
//   }
//   document.querySelector(".displayList").innerHTML = todo;
// }

// // delete todo item
// function deleteTodo(index) {
//   todoListArray.splice(index, 1);
//   localStorage.setItem("todolist", JSON.stringify(todoListArray));
//   renderList();
// }