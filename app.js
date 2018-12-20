$(document).ready(function(){
  console.log('jQuery loaded');

  // var myItemInStorage;
  // if (!completed) {
  //   myItemInStorage = JSON.parse(localStorage.getItem('todoList'));
  // } else {
  //   myItemInStorage = JSON.parse(localStorage.getItem('finishedList'));
  // }
  var myItemInStorage = JSON.parse(localStorage.getItem('todoList')) || JSON.parse(localStorage.getItem('finishedList'));
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
  const $dataList = $('.dataList')


  for (let i = 0; i < dataInput.length; i++) {
      var currentData = dataInput[i];
      var {Priority, startDate, Task, Who, dueDate, completed} = currentData;
      var listInfo = `
        <li class='dataList'>
        <input type="checkbox">
        <span class="priority-append">Priority: ${Priority}</span>
        <span class="start-date-append">Start-Date: ${startDate}</span>
        <span class="task-append">Task: ${Task}</span>
        <span class="who-append">Who: ${Who}</span>
        <span class="due-date-append">Due-Date: ${dueDate}</span>
        </li>
      `
      if (!completed) {
        $listDisplayField.append(listInfo);
      } else {
        $completedDisplayField.append(listInfo);
        $('.dataList').attr("checked");
      } 
    };


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
      dataInput.push(input);
      if (!input.completed) {
        localStorage.setItem('todoList', JSON.stringify(dataInput));
      } else {
        localStorage.setItem('finishedList', JSON.stringify(dataInput));
      }
    };
    var {Priority, startDate, Task, Who, dueDate, completed} = input;
    var currentSubmit = `
        <li class='dataList'>
        <input type="checkbox">
        <span class="priority-append">Priority: ${Priority}</span>
        <span class="start-date-append">Start-Date: ${startDate}</span>
        <span class="task-append">Task: ${Task}</span>
        <span class="who-append">Who: ${Who}</span>
        <span class="due-date-append">Due-Date: ${dueDate}</span>
        </li>
      `
    $listDisplayField.append(currentSubmit)
  });

  
  $('.dataList :checkbox').change(function() {
    var checkedTodo;
    if (this.checked) {
      checkedTodo = $(this).parent();
      $completedDisplayField.append(checkedTodo);
      console.log(checkedTodo.completed)
      checkedTodo.completed = true;
      console.log(checkedTodo.completed)
      localStorage.removeItem('todoList');
      localStorage.setItem('finishedList', JSON.stringify(dataInput));
    } else {
      checkedTodo = $(this).parent();
      //currentData.completed = false;
      $listDisplayField.append(checkedTodo);
      //localStorage.removeItem('finishedList');
      localStorage.setItem('todoList', JSON.stringify(dataInput));
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


