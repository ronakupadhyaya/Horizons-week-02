"use strict";

// YOUR JAVASCRIPT CODE GOES HERE
$('.board')
  .on('click', '.add-list', function() {
    $(this)
      .siblings('.add-list-form-wrapper')
      .removeClass('collapse');
  });

$('.board')
  .on('click', '.add-list-cancel', function() {
    $(this)
      .parent('.add-card-form')
      .parent()
      .addClass('collapse');
  });


$('.board')
  .on('click', '.add-list-save', function() {
    // adding DOM to add any clicked item dynamically
    var userInput = $(this)
      .siblings('.form-control')
      .val();

    var listContainer = $('<div>')
      .addClass('list-container');
    var list = $('<div>')
      .addClass('list');
    var listHeader = $('<div>')
      .addClass('list-header');
    var listTitle = $('<span>')
      .addClass('list-title')
      .text(userInput);
    var listCards = $('<div>')
      .addClass('list-cards');
    var listFooter = $('<div>')
      .addClass('list-footer');
    var addCards = $('<button>')
      .addClass('add-card')
      .text('Add a Card');
    var collapseAddCardFormWrapper = $('<div>')
      .addClass('collapse')
      .addClass('add-card-form-wrapper');
    var wellAddCardForm = $('<div>')
      .addClass('well')
      .addClass('add-card-form');
    var formControl = $('<input>')
      .addClass('form-control')
      .attr({
        type: 'text',
        placeholder: 'Card Title'
      })
    var addCardSave = $('<button>')
      .addClass('btn')
      .addClass('btn-default')
      .addClass('add-card-save')
      .text('Save');
    var addCardCancel = $('<button>')
      .addClass('btn')
      .addClass('btn-default')
      .addClass('add-card-cancel');
    var glyphicon = $('<span>')
      .addClass('glyphicon')
      .addClass('glyphicon-remove');

    addCardCancel.append(glyphicon);
    wellAddCardForm.append(formControl)
      .append(addCardSave)
      .append(addCardCancel);
    collapseAddCardFormWrapper.append(wellAddCardForm);
    listFooter.append(addCards)
      .append(collapseAddCardFormWrapper);
    listHeader.append(listTitle);
    list.append(listHeader)
      .append(listCards)
      .append(listFooter);
    listContainer.append(list);

    $(this)
      .parent()
      .parent()
      .parent()
      .parent('.list-container')
      .before(listContainer);
    $(this)
      .parent()
      .parent('.add-list-form-wrapper')
      .hide();
  });








$('.board')
  .on('click', '.add-card', function() {
    $(this)
      .siblings('.add-card-form-wrapper')
      .removeClass('collapse');
  });

$('.board')
  .on('click', '.add-card-cancel', function() {
    $(this)
      .parent('.add-card-form')
      .parent()
      .addClass('collapse');
  });




$('.board')
  .on('click', '.add-card-save', function() {
    var userInput2 = $(this)
      .siblings('.form-control')
      .val();

    var card = $('<div>')
      .addClass('card');
    var cardMore = $('<span>')
      .addClass('card-more');
    var glyphicon2 = $('<span>')
      .addClass('glyphicon glyphicon-align-left');
    var cardBody = $('<div>')
      .addClass('card-body')
      .text(userInput2);

    cardMore.append(glyphicon2);
    card.append(cardMore)
      .append(cardBody);

    $(this)
      .parent()
      .parent()
      .parent()
      .siblings('.list-cards')
      .append(card);
    $(this)
      .parent()
      .parent('.add-card-form-wrapper')
      .hide();
  });

var cardBeingEdited = null;
$('.board')
  .on('click', '.card', function() {
    cardBeingEdited = this;
    $('#card-edit')
      .modal();
    $('#card-edit-body')
      .text($(this)
        .find('.card-body')
        .text());
  })

$('.card-edit-save')
  .on('click', function() {
    var editedText = $(this)
      .closest('.modal-content')
      .find('textarea')
      .val();
    $(cardBeingEdited)
      .children('.card-body')
      .text(text);
    $('#card-edit')
      .modal('hide');



  })


$('.list-cards')
  .sortable({
    appendTo: '.list-container',
    connectWith: '.list-cards'
    // Configuration parameters here
  });
