// This is where you will write all your CODE
// for the Horello AJAX (DAY 4) exercise.
var apiKey = "2d1ec1232a9f1dd661b7d3c8f7f51c3d";
var apiToken = "669aa3766f73a44bee52188a3957917c0ab5c21529951ce78e3a91854823afd5";
var apiUrl = "https://api.trello.com/1";
var boardId = "5939f81ff8320addbaedb12a";

$(document).ready(function() {
  setEventListeners();
  render();
});

function createList(listName) {
  // YOUR CODE HERE
}

function createCard(name, listId) {
  // YOUR CODE HERE
}

function updateCard(title, desc, cardId) {
  // YOUR CODE HERE
}

function render() {
  // YOUR CODE HERE
  $.ajax('https://api.Trello.com/1/boards/5939f81ff8320addbaedb12a', {
  data: {
    key: "2d1ec1232a9f1dd661b7d3c8f7f51c3d",
    token: "669aa3766f73a44bee52188a3957917c0ab5c21529951ce78e3a91854823afd5",
    cards: 'all',
    lists: 'all'
  },
  success: function(data) {
    renderBoard(data);
  }
});
}

function renderBoard(board) {
  // YOUR CODE HERE
  console.log(board);
  $('#boardAnchor').empty();
  $('#boardAnchor').append(`<div id="${boardId}" class="board"></div>`);

  board.lists.forEach(function(val) {
    renderList(val);
  })
  board.cards.forEach(function(val) {
    renderCard(val);
  })
}

function renderList(list) {
  // YOUR CODE HERE
  $("#"+boardId).append(`<div class="list-container">
  <div class="list" data-list-id="${list.id}" id="${list.id}">
    <div class="list-header">
      <span class="list-title">${list.name}</span>
    </div>
    <div class="list-cards"></div>
    <div class="list-footer">
      <button class="add-card" addcardid="${list.id}">Add a card...</button>
      <div class="collapse add-card-form-wrapper" id="addCardForm${list.id}">
        <div class="well add-card-form">
          <input type="text" class="form-control" placeholder="Card title" id="addCardTitle${list.id}" />
          <button type="button" class="btn btn-default add-card-save" id="addCardBtn${list.id}">Save</button>
          <button type="button" class="btn btn-default add-card-cancel"><span class="glyphicon glyphicon-remove" id="addCardCancelBtn${list.id}"></span></button>
        </div>
      </div>
    </div>
  </div>
</div>`)

}


function renderCard(card) {
  // YOUR CODE HERE
$('#'+ card.idList + ' .list-cards').append(`<div id="${card.id}" class="card" data-card-desc="${card.desc}" data-card-name="${card.id}" data-list-id="${card.idList}" data-card-id="${card.id}">
  <div class="card-body">`+card.name+`
  </div>
</div>`)
}
