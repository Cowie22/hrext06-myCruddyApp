$(document).ready(function(){
  console.log('jQuery loaded');

  var myItemInStorage = JSON.parse(localStorage.getItem('todoList'));
  let dataInput = (myItemInStorage || []);

  const $listDisplayField = $('.list-display-field');
  const $completedDisplayField = $('.completed-display-field')
  const $btnSubmit = $('.btn-submit');
  const $btnDelete = $('.btn-delete');
  const $btnCLear = $('.btn-clear');
  const $priorityEntry = $('.priority-entry');
  const $startDateEntry = $('.start-date-entry');
  const $taskEntry = $('.task-entry');
  const $whoEntry = $('.who-entry');
  const $dueDateEntry = $('.due-date-entry');
  const $dataList = $('.dataList');
  var count = dataInput.length;


  $btnSubmit.on('click', function() {
    if (typeof (Storage) !== 'undefined') {
      var input = {
        Priority: $priorityEntry.val(),
        startDate: $startDateEntry.val(),
        Task: $taskEntry.val(),
        Who: $whoEntry.val(),
        dueDate: $dueDateEntry.val(),
        completed: false
      };
    };
    var {Priority, startDate, Task, Who, dueDate, completed} = input;
    var currentSubmit = `
        <li class='dataList'>
        <input type="checkbox">
        <span class="list-count">${count}</span>
        <span class="priority-append">Priority: ${Priority}</span>
        <span class="start-date-append">Start-Date: ${startDate}</span>
        <span class="task-append">Task: ${Task}</span>
        <span class="who-append">Who: ${Who}</span>
        <span class="due-date-append">Due-Date: ${dueDate}</span>
        </li>
      `;
    count++;

    if (!completed) {
        $listDisplayField.append(currentSubmit);
      } else {
        $completedDisplayField.append(currentSubmit);
      } 

    dataInput.push(input);
    localStorage.setItem('todoList', JSON.stringify(dataInput));
  });


  for (let i = 0; i < dataInput.length; i++) {
      var currentData = dataInput[i];
      var {Priority, startDate, Task, Who, dueDate, completed} = currentData;
      var newCount = i;
      var todoChecked = true;
      var listInfo = `
        <li class='dataList'>
        <input type="checkbox">
        <span class="list-count">${newCount}</span>
        <span class="priority-append">Priority: ${Priority}</span>
        <span class="start-date-append">Start-Date: ${startDate}</span>
        <span class="task-append">Task: ${Task}</span>
        <span class="who-append">Who: ${Who}</span>
        <span class="due-date-append">Due-Date: ${dueDate}</span>
        </li>
      `;
      var completedListInfo = `
        <li class='dataList'>
        <input type="checkbox" ${todoChecked ? "checked" : ""}>
        <span class="list-count">${newCount}</span>
        <span class="priority-append">Priority: ${Priority}</span>
        <span class="start-date-append">Start-Date: ${startDate}</span>
        <span class="task-append">Task: ${Task}</span>
        <span class="who-append">Who: ${Who}</span>
        <span class="due-date-append">Due-Date: ${dueDate}</span>
        </li>
      `;
      if (!completed) {
        $listDisplayField.append(listInfo);
      } else {
        $completedDisplayField.append(completedListInfo);
      }    
    };

  
  $('body').on('change', '.dataList :checkbox', function() {
    var checkedTodo;
    if (this.checked) {
      checkedTodo = $(this).parent();
      var todoID = parseInt(checkedTodo.find('.list-count').text());
      $completedDisplayField.append(checkedTodo);
      var checkedStorage = JSON.parse(localStorage.getItem('todoList'));
      checkedStorage[todoID].completed = true;
      localStorage.setItem('todoList', JSON.stringify(checkedStorage));
    } else {
      checkedTodo = $(this).parent();
      var todoID = parseInt(checkedTodo.find('.list-count').text());
      $listDisplayField.append(checkedTodo);
      var checkedStorage = JSON.parse(localStorage.getItem('todoList'));
      checkedStorage[todoID].completed = false;
      localStorage.setItem('todoList', JSON.stringify(checkedStorage));
    }
  });


  $btnDelete.on('click', function() {
    localStorage.removeItem('todoList');
  });


  $btnCLear.on('click', function() {
    localStorage.clear();
    $completedDisplayField.remove();
    $listDisplayField.remove();
  });

});


