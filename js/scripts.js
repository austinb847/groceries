$(document).ready(function() {
  $("#groceryForm").submit(function(event) {
    $("#groceryForm").hide();
    var itemIDs = ["item1", "item2", "item3", "item4"];

    var itemValues = itemIDs.map(function(item) {
      return $("#" + item).val()
    }); 

    console.log(itemValues);
    
    var sortedItems = itemValues.sort();

    /* itemIDs.forEach(function(item) {
      var userInput = $("#" + item).val();
      itemVals.push(userInput);
    });
    var sortedItems = itemVals.sort(); */

    var uppercaseItems = sortedItems.map(function(item) {
      return item.toUpperCase();
    });
    
    for(index = 0; index < uppercaseItems.length; index ++) {
      $("ul").append("<li>" + uppercaseItems[index] + "</li>");
    }
    
    event.preventDefault();
  });


});