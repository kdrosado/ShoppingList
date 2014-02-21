// Javascript application for shopping list

$(document).ready(function () {

    //Take input, validate, and add to list
    var addItem = function () {
        var currentItem = $("#item").val();
        if (!currentItem || !currentItem.trim()) {alert("Please enter item.");}
        else {
        $("#the_list").append("<li class='new_item'> <input type='checkbox' class='box'/> <span class='the_real_item'>" + currentItem + "</span></li>");
        }
    };

    // Checked items removed
    var clickity = function () {
        if (this.checked) {
            $(this).parent().addClass("checked"); 
        }
        else {$(this).parent().removeClass("checked");
             }
    };

    //Empty or clear the list
    var clear = function() {
        $("#the_list").empty();
    };

    //Edit item added to list
    var editThis = function() {       
        $(this).attr('contentEditable',true);
        $(this).addClass('editable');        
    };
    
    // Add input to list
    $('#add').click(addItem);
    
    // Cross out item when checked
    $(document).on("click", ":checkbox", clickity);
    
    // Allows enter key to add items to list
    $("#item").keyup(function(event){
        if (event.which === 13) {
            $("#add").trigger("click");
        }  
    });
    
    // Clear list without reloading    
    $("#new").click(clear);
    
    // Make the item editable on click
    $(document).on("click", ".the_real_item", editThis);
});