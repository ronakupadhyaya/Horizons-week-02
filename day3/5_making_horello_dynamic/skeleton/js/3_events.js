// PART 3. Events
//
// This function is called once, when the page loads, to set up all of
// the static events, i.e., events that do not need to change as we
// change the contents of the board. For instance, the "Add list" button
// always does the same thing. The button doesn't appear or disappear
// and its behavior never changes.
horello.mountStatic = function() {

  // Phase 1. Static events

  // Add list form: these events control the "Add a list" form that
  // appears on the top-level board.

  // 1a. [EXAMPLE] Add list form: toggle collapse
  // This event, attached to the "Add a list..." button, should cause
  // its associated form to appear and disappear.
  $('.add-list').click(function(e) {
    $('#addList').collapse('toggle');
  });

  // 1b. Add list form: focus the title text input
  // This event, triggered whenever the "Add a list..." form appears,
  // should focus on its text input (so the user can start typing
  // immediately, without having to click again to select the text input
  // field).
  $('.add-list').click(function(e) {
    $('#addListText').focus();
    });

  // 1c. Add list form: save button
  // This event, triggered when the "Save" button on the "Add a list..."
  // form is clicked, should 1. validate the input (i.e., make sure that
  // a value has been input for the list name), 2. update the data model
  // accordingly, and 3. cause the new list to appear on the board.

  // YOUR CODE HERE
  $("#addListSave").click(function(event) {
    var newname = $("#addListText").val();
    if (newname){
      board.addList(newname);
    }
    $("#addListText").val('');
    $('#addList').collapse('toggle');
    console.log(board);
    horello.mount(board);

  });
  // 1d. Add list form: cancel button
  // This event, triggered when the "X" (cancel) button on the "Add a
  // list..." form is clicked, should hide the form.
  // YOUR CODE HERE
  $("#addListCancel").click(function(event) {
    $("#addList").collapse('toggle');
  });
}

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
  $('.add-card').click(function(event){
    var listId = $(this).attr("addcardid") // 'this' is card that was pressed
    $("#addCardForm" + listId).collapse('toggle');

    $("#addCardForm" + listId + " :first-child").focus();

  });
   
    $(".save-btn").click(function(event) {
      var listId = $(this).attr("data-list-id")
      var newname = $("#addCardTitle" + listId).val();
      if (newname){
        var list = board.getList(listId);
        list.addCard(newname);
        }
      $("#addCardForm" + listId + " :first-child").val('');
      $("#addCardForm" + listId).collapse('toggle');
      horello.mount(board);
    });
    

    $(".close-btn").click(function(event) {
      var listId = $(this).attr("data-list-id");
       $("#addCardForm" + listId).collapse('toggle');
    });
    

  // - When the form is revealed, the title field is focused
  // - Clicking Save validates the input and creates the new card
  // - Clicking Cancel collapses the form

  // YOUR CODE HERE

  // Phase 4(a). Edit card
  // YOUR CODE HERE

  $(".card-body").click(function(event){
  
    //$(".modal-body").val("Moo");
  });
};

