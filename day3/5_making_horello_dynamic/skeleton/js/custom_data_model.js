"use strict";

window.horello = {};

// [Helper] `generateId`
// This function generates a random, unique string for you use for whatever.
// 
// ex. horello.generateId() -> 'aQ-V-c-u-P4l'
// ex. horello.generateId() -> 'bh-H-N-9-Vdr'
horello.generateId = function() {
  var chunk = function() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return chunk() + chunk() + '-' + chunk() + '-' + chunk() + '-' +
    chunk() + '-' + chunk() + chunk() + chunk();
};

// PART 1. Data model

// Phase 1. `Card` Class
// Cards contain a unique ID, a title, and a description.  Write a Card class
// that follows the spec described in `classSpec.png`. This class will contain
// several properties and methods.

horello.Card = function(title, desc, listId) {
  this.id = horello.generateId();
  this.listId = listId;
  this.title = title;
  this.desc = desc;
};

//var bananacard = new horello.Card("bananas", "yellow", shoppinglistId);

horello.Card.prototype = {
  // Exercise 1.A `getId`
  // Write a getter function for the `id` property
  getId: function() {
    return this.id;
  },

  // Exercise 1.B `getTitle`
  // Write a getter function for the `title` property
  getTitle: function() {
    return this.title;
  },

  // Exercise 1.C `setTitle(titleStr<String>)`
  // Write a setter funtion for the `titleStr` property
  // 
  // ex. var card = horello.Card("Thing I had to do", "What was it?");
  //   card.setTitle("Buy Milk");
  //   card.getTitle() -> "Buy Milk";
  setTitle: function(titleStr) {
    this.title = titleStr;
  },

// bananacard.setTitle("my super awesome banana card");

  // Exercise 1.D `getDescription`
  // Write a getter function for the `desc` property
  getDescription: function() {
    return this.desc;
  },

  // Exercise 1.E `setDescription(desc<String>)`
  // Write a setter funtion for the `desc` property
  //
  // ex. var card = horello.Card("Thing I had to do", "What was it?");
  //   card.setDescription("Maybe check Whole Foods?");
  //   card.getDescription() -> "BMaybe check Whole Foods?;
  setDescription: function(desc) {
    this.desc = desc;
  }
};

// Phase 2. `List` Class
// Lists contain a unique ID, a name, and a list of cards.  Write a List class
// according to the spec in `classSpec.png`.
horello.List = function(name) {
  this.id = horello.generateId();
  this.name = name;
  this.cards = [];
};

// var grocerylist = new List("grocerylist");

// horello.Card = function(title, desc, listId) {
//   this.id = horello.generateId();
//   this.listId = listId;
//   this.title = title;
//   this.desc = desc;
// };

horello.List.prototype = {
  // Exercise 2.A `getId`
  // Write a getter function for the `id` property
  getId: function() {
    return this.id;
  },

  // YOUR CODE HERE
  // Exercise 2.B `getName`
  // Write a getter function for the `name` property
  getName: function() {
    return this.name;
  },

  // Exercise 2.C `setName(name<String>)`
  // Write a setter funtion for the `name` property
  // 
  // ex. var l = horello.List("Pokemon");
  //   l.setTitle("Digimon");
  //   l.getTitle() -> "Digimon";
  setName: function(name) {
    this.name = name;
  },

  // Exercise 2.D `addCard(title<String>, desc<String>)`
  // Write a function that takes two arguments, `name` and `desc`,
  // which are both strings. It should instantiate a new Card object
  // with those give arguments, and add the newly created object to its
  // array of cards. Finally, it should return the id of the newly
  // created card.
  // 
  // hint. You can create a card using new horello.Card(...)
  addCard: function(name, desc) {
    var cardToBeAdded = new horello.Card(name, desc, this.getId()) 
    this.cards.push(cardToBeAdded);
    return cardToBeAdded.getId();
  },

  // var myFavoriteMovies = new horello.List("joost's all time favorites");
  // myFavoriteMovies.addCard("batman", "Fighting and stuff") {}

//   horello.Card = function(title, desc, listId) {
//   this.id = horello.generateId();
//   this.listId = listId;
//   this.title = title;
//   this.desc = desc;
// };
  
  // Exercise 2.E `getCard(cardId<String>)`
  // Write a function that takes one argument, `cardId`, which is a
  // string. It should search its card array for the Card object with
  // the given id, and return it. If the card cannot be found, it should
  // return null.
  // 
  // ex. var l = horello.List("Superheroes");
  //   var cId = l.addCard("Miss Marvel", "Carol Danvers");
  //   l.getCard(cId) -> 
  //   l.getTitle() -> "Digimon";
  // 
  // hint. you can use anything of wha you've learned before!
  getCard: function(cardId) {
    // YOUR CODE HERE
      var cardArray = this.card.filter(function(c){ 
      return c.getId === cardId })
      if(cardArray.length > 0){
        return cardArray;
      }
      else {
        return null;
      }
  },



    // var card = null;
    // for ( var i = 0 ; i < this.cards.length ; i++){
    //     if (this.cards[i] === cardId) {
    //       card = this.cards[i]
    //     }
    // }
    // return card;





  // Exercise 2.F `rmvCard(cardId<String>)`
  // Write a function that takes one argument, `cardId`, which is a
  // string. It should retrieve the cardObject which corresponds to that
  // cardId (if it exists), remove it from the card array, and return
  // it. If it does not exist, then it should return null. Finally, it
  // should return the id of the newly created card.
  rmvCard: function(cardId) {
    // YOUR CODE HERE
    var cardArray = this.getCard(cardId)
    if (cardArray.length > 0) {
      cardArray.splice(0,1);
      return cardArray.getId();
    };
    else {
      return null;
    }    
  }

// Phase 3. `Board` Class
// A board contains a list of lists.  Write a Board class according to the spec
// in `classSpec.png`.
horello.Board = function (lists) {
  this.id = horello.generateId();
  this.lists = [];
};

horello.Board.prototype = {
  // Exercise 3.A `addList(listName<String>)`
  // Write a function that takes one argument, `listName`, which is a
  // string. It should create a new list with this name, and add it to
  // the list of this Board's lists. Finally, it should return the ID
  // of the new list.
  addList: function(listName) {
    var listToBeAdded = new horello.List(name)
    this.lists.push(listToBeAdded);
    return listToBeAdded.getId();
  },


  // Exercise 3.B `getList(listId<String>)`
  // Write a function that takes one argument, `listId`, which is a
  // string. It should look for a list with this ID among the Board's
  // lists, and return the matching list if one is found, or undef
  // otherwise.
  getList: function(listId) {
    var listArray = this.list.filter(function(c){
      return.c.getId === listId
    })
    if (listArray.length > 0){
      return listArray;
    }
    else{
      return null;
    }
  },


  // Exercise 3.C `rmvList(listId<String>)`
  // Write a function that takes one argument, `listId`, which is a
  // string. It should look for a list with this ID among the Board's
  // lists, and if one is found, it should delete this list from the
  // Board's lists, then return the list object. If no matching list is
  // found, it should return null.


  // Function that removes a list from a board.
  rmvList: function(listId) {
    // YOUR CODE HERE
    var listArray = this.getList(listId)
    if(listArray.length > 0){
      listArray.splice(listArray.indexOf(listId), 1);
      return listArray.getId();
    };
    else{
      return null;
    }
  }


// end of horello.Board
};

 