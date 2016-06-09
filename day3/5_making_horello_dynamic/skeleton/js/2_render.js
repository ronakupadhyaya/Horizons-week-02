// PART 2. Render

// Phase 1. Card [EXAMPLE]
// This function renders a card to HTML, representing the internal data.
// It returns an HTML string representing the internal object.
horello.Card.prototype.render = function() {
  // build wrappers
  var wrapper = $('<div></div>');
  var cardwrapper = $('<div class="card"></div>');
  var cardmore = $('<span class="card-more"><span class="glyphicon glyphicon-align-left"></span></span>');
  var cardbody = $('<div class="card-body"></div>');

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
  // var wrapper = $('<div></div>');
  // var listContainer = $('<div class="list-container"></div>');
  // var listWrapper = $('<div class="list" id="'+this.id+'"></div>');
  // var listHeader = $('<div class="list-header"></div>');
  // var listBody = $('<div class="list-cards"></div>');
  // var listFooter = $('<div class="list-footer"></div>');
  // str = '';
  // for (var i = 0; i < this.cards.length; i ++) {
  //   str += this.cards[i].render();
  // }
  // wrapper.append(listContainer);
  // listContainer.append(listWrapper);
  // listWrapper.append(listHeader);
  // listWrapper.append(listBody);
  // listWrapper.append(listFooter);
  // listBody.append(str);
  // listFooter.append('<button type="button" class="btn btn-list add-list" data-toggle="collapse" href="#addList" aria-expanded="false">Add a list...</button>');
  // return wrapper.html();
  var wrapper = $('<div></div>');

  var listContainer = $('<div class="list-container"></div>');
  var listWrapper = $('<div class="list" id="'+this.id+'"></div>');
  var listHeader = $('<div class="list-header"></div>');
  var listBody = $('<div class="list-cards"></div>');
  var listFooter = $('<div class="list-footer"></div>');

  wrapper.append(listContainer);
  listContainer.append(listWrapper);
  listWrapper.append(listHeader);
  listWrapper.append(listBody);
  listWrapper.append(listFooter);
  listHeader.append($('<span class="list-title"></span>').text(this.name));
  listFooter.append($('<button class="add-card" addCardId="'+this.id+'">Add a card...</button>'));
  listFooter.append($('\
      <div class="collapse" id="addCardForm'+this.id+'">\
      <div class="well add-card-form">\
      <input type="text" class="form-control" placeholder="Card title" id="addCardTitle'+this.id+'">\
      <button type="button" class="btn btn-default" id="addCardBtn'+this.id+'">\
      Save\
      </button>\
      <button type="button" class="btn btn-default">\
      <span class="glyphicon glyphicon-remove" id="addCardCancelBtn'+this.id+'"></span>\
      </button>\
      </div>\
      </div>\
    '));


  // Build cards in the body
  listBody.html(this.cards.reduce(function(prev, cur) {
    return prev + cur.render();
  }, ""));

  return wrapper.html();
}

// Phase 3. Board
// This function renders a Board, and all of the lists it contains, to
// HTML. It returns an HTML string representing the internal object.
horello.Board.prototype.render = function() {
  // YOUR CODE HERE
  var wrapper = $('<div id="board" class="board"></div>');
  str = '';
  for (var i = 0; i < this.lists.length; i ++) {
    str += this.lists[i].render();
  }
  wrapper.append(str);
  return wrapper;
}
