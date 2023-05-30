function newItem(){

   let inputValue = $('#input').val();
   let li = $('<li>'inputValue'</li>');
   
   if(inputValue === "")
      alert('You must write something!');
   else   
      $('#list').append(li);

}