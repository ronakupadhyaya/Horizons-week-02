                                                                                                                                                                                                                                                         // This is where you will write code to initially render
// the Horello dynamic landing page. We have provided functions
// in utils.js to help with this process. You should only have to
// write logic for the fetching of data (using AJAX), while
// using the given renderers to render HTML elements.


$(document).ready(function() {
  setEventListeners();
  render();
});

function createList(listName) {
  // YOUR CODE HERE
  // This function is called whenever a user clicks on add list, gives it a name, and saves it.
  // This function makes a POST request to the /lists endpoint, sending the new list's data to the backend to create a new List.
  // On the success callback of this function, we call render() so all the lists are refreshed and your new list shows up on the page.
  $.ajax('https://api.Trello.com/lists', {
    method: "POST",
    data: {
      key: "30a3e2ccf9038a21e56f096aa71c91fb",
      token: "e4bde5b68fa4d02dee2767bc5f823b0ed5f49e504afb5dae09909ea6a98d8e9bs",
      name: listName,
      idBoard:'5939cc019a8e81895ce470d9',
      pos: 'bottom'
    },
    success: function (data) {
      console.log("list with id" + list.id + '5939cc019a8e81895ce470d9');
      render();
    }.bind(this)
 });
}

function createCard(name, listId) {
  // YOUR CODE HERE
  // Implement addCard to take in a name and listId and send data to the Trello API and create a new Card.
  // This function is very similar to the one above, but instead makes a POST request to the /cards endpoint and sends new data.
  // Remember to call render() after making the request to refresh all the cards on list and show the new card that was added to it.
  $.ajax('https://api.Trello.com/cards', {
    method: "POST",
    data: {
      key: "30a3e2ccf9038a21e56f096aa71c91fb",
      token: "e4bde5b68fa4d02dee2767bc5f823b0ed5f49e504afb5dae09909ea6a98d8e9bs",
      name: name,
      idList: listId
    },
    success: function (data) {
      console.log("created new card " + JSON.stringify(data));
      render();
    }.bind(this)
 });
}

function updateCard(title, desc, cardId) {
  // YOUR CODE HERE
  // This function takes in a title, description, and cardId and makes a PUT request to the /cards endpoint to update the card in Trello
  // Make an AJAX PUT request to the /cards endpoint to update the card's title and description.
  // On the success callback call the render() function to update the card on Horello with the new title/description.
  $.ajax('https://api.Trello.com/cards/' + cardId, {
    method: "PUT",
    data: {
      key: "30a3e2ccf9038a21e56f096aa71c91fb",
      token: "e4bde5b68fa4d02dee2767bc5f823b0ed5f49e504afb5dae09909ea6a98d8e9bs",
      name: title,
      desc: desc
    },
    success: function (data) {
      console.log("Successfully updated card " + cardId);
      render();
    }.bind(this)
 });
}

function render() {
  $.ajax('https://api.Trello.com/1/boards/5939cc019a8e81895ce470d9', {
  method: 'GET',
  data: {
    key: "30a3e2ccf9038a21e56f096aa71c91fb",
    token: "e4bde5b68fa4d02dee2767bc5f823b0ed5f49e504afb5dae09909ea6a98d8e9bs",
    cards: 'all',
    lists: 'all'
  },
  success: function(data) {
    renderBoard(data)
  }
});
}

function renderBoard(board) {
  // $('#boardAnchor').empty();
  // $('#boardAnchor').append('<div id="${boardId}" class="board"></div>');
  // for (var i = 0; i < board.lists.length; i++) {
  // renderList(board.lists[i])
  // }
  // for (var i = 0; i < board.cards.length; i++) {
  //   renderCard(board.cards[i]);
  // }
  $('#boardAnchor').empty();
  $('#boardAnchor').append(`<div id="${boardId}" class="board"></div>`);

  board.lists.forEach(function(list) {renderList(list)});
  board.cards.forEach(function(card) {renderCard(card)});
}

function renderList(list) {
    var elem = `<div class="list-container">
    <div class="list" data-list-id="${list.id}" id="${list.id}">
      <div class="list-header">
        <span class="list-title">test123</span>
      </div>
      <div class="list-cards"></div>
      <div class="list-footer">
        <button class="add-card" addcardid="${list.id}">Add a card...</button>
        <div class="collapse add-card-form-wrapper" id="addCardForm${list.id}">
          <div class="well add-card-form">
            <input type="text" class="form-control" placeholder="Card title" id="addCardTitleLISTIDHERE" />
            <button type="button" class="btn btn-default add-card-save" id="addCardBtn${list.id}">Save</button>
            <button type="button" class="btn btn-default add-card-cancel"><span class="glyphicon glyphicon-remove" id="addCardCancelBtn${list.id}"></span></button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  $('#'+list.idBoard).append(elem.html());
}

function renderCard(card) {
  // YOUR CODE HERE
  // var mane = `<div id="${card.id}" class="card" data-card-desc="${card.desc}" data-card-name="${card.name}" data-list-id="${card.idList}" data-card-id="CARD ID">
  //       <div class="card-body">
  //         ${card.name}
  //       </div>
  //     </div>`;
  //     var list=card.idList;
  //     $('#'+list).children('.list-cards').append(mane);
    var wrapper = $('<div></div>');
    var cardwrapper = $('<div id="'+card.id+'" class="card" data-card-desc="'+card.desc+'" data-card-name="'+card.name+'" data-list-id="'+card.idList+'" data-card-id="'+card.id+'"></div>');
    var cardmore = $('<span class="card-more"></span>');
    if (card.desc) {
      cardmore.append($('<span class="glyphicon glyphicon-align-left"></span>'));
    }
    var cardbody = $('<div class="card-body">'+card.name+'</div>');

    wrapper.append(cardwrapper);
    cardwrapper.append(cardmore);
    cardwrapper.append(cardbody);
    cardbody.append($("<p></p>")).text(card.name);

    $('#' + card.idList).find('.list-cards').append(wrapper.html());
}                                                                         
