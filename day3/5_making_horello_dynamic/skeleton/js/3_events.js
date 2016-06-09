// PART 3. Events
//
// This function is called once, when the page loads, to set up all of
// the static events, i.e., events that do not need to change as we
// change the contents of the board. For instance, the "Add list" button
// always does the same thing. The button doesn't appear or disappear
// and its behavior never changes.
function p() {
  var toPrint = JSON.parse(JSON.stringify(arguments));
  var i = 0;
  while(toPrint.hasOwnProperty(i)) {
    console.log(toPrint[i]);
    delete toPrint[i++];
  }
}

horello.mountStatic = function() {

  // Phase 1. Static events

  // Add list form: these events control the "Add a list" form that
  // appears on the top-level board.

  // 1a. [EXAMPLE] Add list form: toggle collapse
  // This event, attached to the "Add a list..." button, should cause
  // its associated form to appear and disappear.
  $('.add-list').click(function() {
    $('#addList').collapse('toggle');
  });

  // 1b. Add list form: focus the title text input
  // This event, triggered whenever the "Add a list..." form appears,
  // should focus on its text input (so the user can start typing
  // immediately, without having to click again to select the text input
  // field).

  $('#addList').on('shown.bs.collapse', function (e) {
    $('#addListText').focus();
  });


  // 1c. Add list form: save button
  // This event, triggered when the "Save" button on the "Add a list..."
  // form is clicked, should 1. validate the input (i.e., make sure that
  // a value has been input for the list name), 2. update the data model
  // accordingly, and 3. cause the new list to appear on the board.

  // YOUR CODE HERE
  $('#addListSave').click(function() {
    var name = $('#addListText').val();
    if (name.length > 0) {
      board.addList(name);
      $('addListText').val('');
      $('#addList').collapse('toggle');
      horello.mount(board);
    } else {alert("enter a list name")};
  });

  // 1d. Add list form: cancel button
  // This event, triggered when the "X" (cancel) button on the "Add a
  // list..." form is clicked, should hide the form.

  $('#addListCancel').click(function() {
    $('addListText').val('');
    $('#addList').collapse('toggle');
  })

  $('#cardEdit').on('show.bs.collapse',function() {
    console.log(this);
  })

  $('#cardEdit').on('show.bs.modal', function (e) {
    var button = $(e.relatedTarget);
    var cardId = button.data('card-id');
    var listId = button.data('list-id');
    var list = board.getList(listId);
    var card = list.getCard(cardId);
    $('#modalText').val(card.getTitle());
    $('#modalBody').val(card.getDescription());
    $('#modalSave').data('list-id', listId);
    $('#modalSave').data('card-id', cardId);
  });

  // 1f. Modal save
  $('#modalSave').click(function (e) {
    var title = $('#modalText').val();
    var desc = $('#modalBody').val();
    if (!title) {
      alert('Please enter a title');
      return;
    }

    var listId = $(e.currentTarget).data('list-id');
    var cardId = $(e.currentTarget).data('card-id');
    var list = board.getList(listId);
    var card = list.getCard(cardId);
    card.setTitle(title);
    card.setDescription(desc);
    $('#cardEdit').modal('hide');
    horello.mount(board);
  });

};

// This function is called multiple times, to configure dynamic events.
horello.mount = function (board) {
  // Phase 3. Create card

  // Unrender and re-render the board.
  $('#boardAnchor').empty();
  $('#boardAnchor').append(board.render());

  // 2a. Add card forms
  // Write selectors to add the following functionality to each "Add a
  // card..." button and form:
  // - Clicking the button reveals the form
  // - When the form is revealed, the title field is focused
  // - Clicking Save validates the input and creates the new card
  // - Clicking Cancel collapses the form

  // YOUR CODE HERE
  $('.add-card').click(function(event) {
    var formId = $(this).attr('addCardId');
    $('#addCardForm'+formId).collapse('toggle');
    $('#addCardTitle'+formId).focus();
  });

  $('.savebtn').click(function() {
    var formId = $(this).attr('id').split('addCardBtn')[1];
    var name = $('#addCardTitle' + formId).val();
    if (name.length > 0) {
      board.getList(formId).addCard(name, 'desc');
      $('#addCardTitle' + formId).val('');
      $('#addCardForm' + formId).collapse('toggle');
      horello.mount(board);
    } else {
      alert("enter a card name");
    };
  });
  $('.addCardCancelBtn').click(function(){
    var formId = $(this).attr('id').split('addCardCancelBtn')[1];
    console.log(formId);
    $('#addCardTitle' + formId).val('');
    $('#addCardForm' + formId).collapse('toggle');
  });

  // Phase 4(a). Edit card

  $('.card').each(function (idx) {
    $(this).off();
    $(this).click(function (e) {
      $('#cardEdit').modal('toggle', $(this));
    });
  });

  // YOUR CODE HERE
};

