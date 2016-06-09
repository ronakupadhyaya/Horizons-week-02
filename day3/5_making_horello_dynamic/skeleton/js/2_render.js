// PART 2. Render

// Phase 1. Card [EXAMPLE]
// This function renders a card to HTML, representing the internal data.
// It returns an HTML string representing the internal object.
horello.Card.prototype.render = function() {
  // build wrappers
  var wrapper = $('<div></div>');
  var cardwrapper = $('<div class="card"></div>');
  var cardmore = $('<span class="card-more"><span class="glyphicon glyphicon-align-left"></span></span>');
  var cardbody = $('<div class="card-body">'+this.title+'</div>');

  wrapper.append(cardwrapper);
  cardwrapper.append(cardmore);
  cardwrapper.append(cardbody);
  cardbody.append($("<p></p>")).text(this.title);

  return wrapper.html();
};

// Phase 2. List
// This function renders a list to HTML, representing the internal data
// and all of the cards it contains. It returns an HTML string
// representing the internal object.
horello.List.prototype.render = function() {
  // YOUR CODE HERE
  var wrapper = $('<div></div>');
  var listContainer = $('<div class="list-container"></div>');
  var listWrapper = $('<div class="list"></div>');
  var listHeader = $('<div class="list-header"><span class="list-title">' + this.getName() + '</span></div>');
  var listBody = $('<div class="list-cards"></div>');
  
  this.cards.forEach(function(card) {
    listBody.append(card.render());
  });

  var listFooter = $('            <div class="list-footer">\
                <button id="addCardButton' + this.id +'" class="list-button add-card"\
                        data-toggle="collapse"\
                        href="#addCard_' + this.getId() + '"">Add a card...\
                </button>\
                <div class="collapse" id="addCard_' + this.getId() + '"">\
                    <div class="well add-card-form">\
                        <input id="addCardId" type="text" class="form-control"\
                               placeholder="Card title">\
                        <button type="button" class="btn btn-default">\
                            Save\
                        </button>\
                        <button type="button"\
                                class="btn btn-default" id="addCardRemove"><span\
                                class="glyphicon glyphicon-remove"></span>\
                        </button>\
                    </div>\
                </div>\
            </div>');

  wrapper.append(listContainer);
  listContainer.append(listWrapper);
  listWrapper.append(listHeader);
  listWrapper.append(listBody);
  listWrapper.append(listFooter);
  return wrapper.get(0);
}

// Phase 3. Board
// This function renders a Board, and all of the lists it contains, to
// HTML. It returns an HTML string representing the internal object.
horello.Board.prototype.render = function() {
  // YOUR CODE HERE
  var wrapper = $('<div></div>');
  var board = $('<div id="board" class="board"></div>');

  this.lists.forEach(function(lists) {
    board.append(lists.render());
  })

  wrapper.append(board);

  return wrapper.get(0);
}

