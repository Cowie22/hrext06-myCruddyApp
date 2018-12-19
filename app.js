$(document).ready(function(){
  console.log('jQuery loaded');


  var myItemInStorage = JSON.parse(localStorage.getItem('todoList'));
  let dataInput = (myItemInStorage || []);

  const $listDisplayField = $('.list-display-field');
  const $btnSubmit = $('.btn-submit');
  const $btnDelete = $('.btn-delete');
  const $btnCLear = $('.btn-clear');
  const $priorityEntry = $('.priority-entry');
  const $dueDateEntry = $('.due-date-entry');
  const $taskEntry = $('.task-entry');
  const $whoEntry = $('.who-entry');
  const $dateDoneEntry = $('.date-done-entry');



  $btnSubmit.on('click', function() {
    if (typeof (Storage) !== 'undefined') {
      let input = {
        Priority: $priorityEntry.val(),
        dueDate: $dueDateEntry.val(),
        Task: $taskEntry.val(),
        Who: $whoEntry.val(),
        doneDate: $dateDoneEntry.val()
      };
      dataInput.push(input);


      localStorage.setItem('todoList', JSON.stringify(dataInput));

      console.log('todoList', myItemInStorage);
    };

    for (let i = 0; i < dataInput.length; i++) {
      var currentData = dataInput[i];
      var {Priority, dueDate, Task, Who, doneDate} = currentData;
      $listDisplayField.append(`
        <li>
        <span>Priority: ${Priority}</span>
        <span>Due-Date: ${dueDate}</span>
        <span>Task: ${Task}</span>
        <span>Who: ${Who}</span>
        <span>Done-Date: ${doneDate}</span>
        </li>

      `);
    };

  });


  $btnDelete.on('click', function() {
    localStorage.removeItem('todoList');
  });

  $btnCLear.on('click', function() {
    localStorage.clear();
  });

});


