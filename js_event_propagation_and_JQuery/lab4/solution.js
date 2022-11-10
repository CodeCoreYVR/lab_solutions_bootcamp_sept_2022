$('document').ready(function () {
	$('#form-1').submit(function (e) {
		const color = $('#form-1 > input[type=text]').val();

		// If they enter an invalid color show them an alert message telling them,
		// "Entered color is not a valid option!"
		const validColors = ['red', 'blue', 'black', 'grey'];

		if (!validColors.includes(color)) {
			alert(`Entered colour, "${color}", is not a valid option!`);
		} else {
			// All shapes matching the given color should be removed.
			$(`.shape.${color}`).remove();
		}

		// Clear the input field.
		this.reset(); /* 
		This really clears the entire form, but since the form only has one input,
		it is equivalent.
	*/
		// or
		// $('#form-1 > input[type=text]').val('');
	});

})