$(document).ready(function(){
  console.log('jQuery loaded');

  let dataInput = [];

  const $textEntry = $('.text-entry');
  const $listDisplayField = $('.list-display-field');
  const $btnSubmit = $('.btn-submit');
  const $btnDelete = $('.btn-delete');
  const $btnCLear = $('.btn-clear');


  $btnSubmit.on('click', function(){
    if (typeof (Storage) !== 'undefined') {
      let input = {
        textEntry: $textEntry.val()
      }
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