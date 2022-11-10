// Prepend a row to the table with the columns 0 and -
$('document').ready(function(){
  $('tbody').prepend('<tr><td>0</td><td>-</td></tr>');

  // When the form's submit button is clicked, append the text input's current value to the form message.
  $('#form-1').submit(function(event) {
    $('#form-message').append(
      $(this)
        .find('input[type=text]')
        .val()
    );
  });
  
  // When Button 1 is clicked, toggle the green container.
  $('#button-1').on('click', e => {
    $('#green-container').toggle();
  });
  
  // When Button 2 is clicked, fade the Button Message out
  $('#button-2').on('click', e => {
    $('#button-message').fadeOut();
  });
  
  // When Button 3 is clicked, fade the Button Message back in.
  $('#button-3').on('click', e => {
    $('#button-message').fadeIn();
  });
  
  // When Button 4 is clicked, slide the green container up.
  $('#button-4').on('click', e => {
    $('#green-container').slideUp();
  });
})
