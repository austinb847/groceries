$(document).ready(function() {
  $("#groceryForm").submit(function(event) {
    $("#groceryForm").hide();
    var itemIDs = ["item1", "item2", "item3", "item4"];
    var itemVals = [];
    itemIDs.forEach(function(item) {
      var userInput = $("#" + item).val();
      itemVals.push(userInput);
    });
    
    
    


    event.preventDefault();
  });


});