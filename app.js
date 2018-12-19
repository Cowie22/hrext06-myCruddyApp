$(document).ready(function(){
  console.log('jQuery loaded');


  var myItemInStorage = JSON.parse(localStorage.getItem('todoList'));
  let dataInput = (myItemInStorage || []);

  const $listDisplayField = $('.list-display-field');
  const $btnSubmit = $('.btn-submit');
  const $btnDelete = $('.btn-delete');
  const $btnCLear = $('.btn-clear');
  const $priorityEntry = $('.priority-entry');
  const $startDateEntry = $('.start-date-entry');
  const $taskEntry = $('.task-entry');
  const $whoEntry = $('.who-entry');
  const $dueDateEntry = $('.due-date-entry');

  for (let i = 0; i < dataInput.length; i++) {
      var currentData = dataInput[i];
      var {Priority, startDate, Task, Who, dueDate} = currentData;
      $listDisplayField.append(`
        <li class='dataList'>
        <input type="checkbox">
        <span class="priority-append">Priority: ${Priority}</span>
        <span class="start-date-append">Start-Date: ${startDate}</span>
        <span class="task-append">Task: ${Task}</span>
        <span class="who-append">Who: ${Who}</span>
        <span class="due-date-append">Due-Date: ${dueDate}</span>
        </li>

      `);
    };

  $btnSubmit.on('click', function() {
    if (typeof (Storage) !== 'undefined') {
      let input = {
        Priority: $priorityEntry.val(),
        startDate: $startDateEntry.val(),
        Task: $taskEntry.val(),
        Who: $whoEntry.val(),
        dueDate: $dueDateEntry.val()
      };
      dataInput.push(input);


      localStorage.setItem('todoList', JSON.stringify(dataInput));

      console.log('todoList', myItemInStorage);
    };


  });


  $btnDelete.on('click', function() {
    localStorage.removeItem('todoList');
  });

  $btnCLear.on('click', function() {
    localStorage.clear();
  });

});


