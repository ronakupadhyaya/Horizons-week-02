"use strict";
/* eslint-env jquery */

<<<<<<< HEAD
window.twilio = {};

// Exercise 0. Get Twilio credentials
//
// Please navigate to https://www.twilio.com, and get a free API Key.
//
// You're going to be signing up for the service yourself, and it won't be
// asking you to pay for anything. Enter your name, phone number, and whatever
// else they ask you for (within reason - if they're asking for an ssn, call
// one of us over)
//
// You'll need 3 pieces of information to be able to interact with the Twilio
// API - your `accountId (or SID)`, an `auth token` and your Twilio phone
// number.
//
// Follow the steps listed by Twilio to get familiar with their API console and
// retrieve your first Twilio phone number!
//
// When you have all this information, please replace them in the variables down there.


function TwilioApp() {
  // Part 0. Get Twilio credentials
  this.accountId = 'AC7b297a74ac75633c303eec50ef7f8f78';
  this.authToken = '19134bafcdfd5a35631368a9ae2a9627';
  this.fromNumber = "+12156072905";


  // Reference JQuery objects
  this.messageList = $(".message-list");
  this.messageInputField = $(".message-input-field");
  this.phoneInputField = $(".phone-input-field");
  this.messageSendButton = $(".message-input-button");

  // Set up the event handlers
  this.initialize();

  console.log("TwilioApp is ready.");
}

TwilioApp.prototype = {
  // Part 1. `initialize()` method
  initialize: function() {
    // YOUR CODE HERE
    //console.log(this);
    this.messageSendButton.on("click", function(){
      this.handleMessageSend().bind(this);
    });
  },
  // Part 2. `validateMessageField(textStr<String>)` method
  validateMessageField: function(textStr) {
    // YOUR CODE HERE
  },
  // Part 3. `validatePhoneField(phoneStr<String>)` method
  validatePhoneField: function(phoneStr) {
    // YOUR CODE HERE
  },

  // Part 4. `handleMessageSend(evt<Event>)` method
  handleMessageSend: function(event) {
    // YOUR CODE HERE
    // REMOVE THE NEXT LINE, IT'S FOR TEST
    this.displayMessage('9999999999', 'Testing testing!');

  },
  displayMessage: function(sender, message) {
    var listElem = $('<li></li>').addClass('message');
    var senderElem = $('<span></span>').addClass('sender').text(sender);
    var bodyElem = $('<p></p>').text(message);
    listElem.append(senderElem);
    listElem.append(bodyElem);
    this.messageList.append(listElem);
  }
};

window.twilio = new TwilioApp();
