
$('document').ready(function () {
	// As you type in the text input, change the Form Message to be the same as what you type.

	$('#form-1 > input[type=text]').on('input', function (e) {
		$('#form-message').text($(this).val());
	});

	// As you type in the text input, change the Form Message to be the REVERSE of what you type.

	// $('#form-1 > input[type=text]').on('input', function (e) {
	// 	$('#form-message').text(reverse($(this).val()));
	// });
	// // Reverses a string
	// function reverse(string) {
	// 	return string.split('').reverse().join('');
	// }

	//  Set a delegated click handler on the orange container
	//  so that red shapes are removed when you click them.

	$('#orange-container').on('click', '.shape.red', function () {
		$(this).remove();
	});

	/* 
	This one does NOT work and is NOT a delegated click handler
	
	$('#orange-container .shape.red').on('click', function() {
		$(this).remove();
	});
	
	Why do you think that is?
	
	
	Hint 1: 
	Think about what is meant to be achieved by using event delegation;
	what use case it is meant to address.
	
	Hint 2:
	The following code adds a medium red square to the orange box. 
	Run this in the javascript console, and you should see your new red square.
	What would you expect to happen when you click on the new red shape?
	Next, try actually clicking on it. What happens?
	
	$('#orange-container').append('<div class="shape medium red square"></div>');
	*/
})