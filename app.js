$(document).ready(function(){
  console.log('jQuery loaded');

  let dataInput = [];

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
      var myItemInStorage = localStorage.getItem('todoList');
      console.log('todoList', myItemInStorage);
    };

    $listDisplayField.text(myItemInStorage);

  });


  $btnDelete.on('click', function() {
    localStorage.removeItem('todoList');
  });

  $btnCLear.on('click', function() {
    localStorage.clear();
  });

});