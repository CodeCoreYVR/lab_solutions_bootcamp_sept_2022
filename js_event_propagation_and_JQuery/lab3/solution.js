// When the g key is pressed, toggle all gray shapes.
$('document').ready(function () {

	$('body').on('keydown', event => {
		const { key } = event;
		if (key === 'g') {
			$('.shape.grey').toggle();
		} else if (key === ' ') {
			// When the spacebar key is pressed, append a small blue circle to the green container.
			$('#green-container').append('<div class="small blue circle shape"></div>');
		}
	});

	// Make the Form Message show the number of characters remaining
	// (14 characters maximum) as you type in the text input. (e.g. "3 characters remaining").

	$('#form-1 > input[type=text]').on('input', function (event) {
		let remaining = 14 - $(this).val().length;
		$('#form-message').text(`${remaining} characters remaining`);
	});

	// actually add the form validation, if you wish

	$('#form-1 > input[type=text]').attr('maxlength', 14);

})