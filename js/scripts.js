function newItem(){

   //getting the value of the input field
   let inputValue = $('#input').val();
   
   //creating a new list element
   let li = $('<li></li>');
   li.text(inputValue);
   //appending a textNode with the input value to the list element
   //li.append(document.createTextNode(inputValue));
   
   //Give out alert if input field is empty
   if(inputValue === "")
      alert('You must write something!');
   
   //otherwise append the list element to the ordered list with id: list   
   else   
      $('#list').append(li);

   //Toggles the class strike   
   function crossOut() {
      li.toggleClass('strike');
   }

   //Eventhandler for when double-clicking on a list item
   li.on('dblclick',crossOut);

   //Creating a cross out button
   let crossOutButton = $('<crossOutButton></crossOutButton>');
   crossOutButton.text('X');
   //
   //crossOutButton.append(document.createTextNode('X'));

   //Appending cross out button to list element
   li.append(crossOutButton);

   //Delete a list item
   function deleteListItem(){
      li.remove();
   }
   
   //Event handler for cross out button
   crossOutButton.on('click',deleteListItem);

   }