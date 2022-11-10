// WHEN Your mouse enters a shape, toggle the highlight class

// Both of the following solutions attain th same result
// Solution A:
$('document').ready(function() {
	$('.shape').on('mouseenter', function(event) {
		$(event.currentTarget).toggleClass('highlight');
	});
	
	// Solution B:
	// $('.shape').on('mouseenter', function() {
	// 	$(this).toggleClass('highlight');
	// });
	
	//
	
	/*
	
	// The solutions below will not work at all or not as expected.
	// Try to think about why...
	
	$('.shape').on('mouseenter', function(){
	  this.toggleClass('highlight')
	})
	
	$('.shape').on('mouseenter', function() {
	  $('.shape').toggleClass('highlight');
	});
	
	*/
	
	/*
	  When any shape is clicked do the following:
	
	  If the shape has the small class, hide it.
	  If it has the medium class, remove the medium class and add the small class.
	  If it has the large class, remove the large class and add the medium class.
	
	  (Make sure that only one of the solutions, either the "Regular" OR the Event
	  Delegation solution is used. If you use both, you will get some unexpected
	  behaviour. If you're inclined, try both and try to figure out why you're
	  getting those results)
	*/
	
	// "Regular"
	
	// $('.shape.small').on('click', e => {
	// 	$(e.currentTarget).hide();
	// });
	
	// $('.shape.medium').on('click', e => {
	// 	$(e.currentTarget)
	// 		.removeClass('medium')
	// 		.addClass('small');
	// });
	
	// $('.shape.large').on('click', e => {
	// 	$(e.currentTarget)
	// 		.removeClass('large')
	// 		.addClass('medium');
	// });
	
	/*
	  This solution will only work on shapes of that are those sizes when the code
	  is run. It will not allow for repeated clicking of shapes
		i.e. if this code is run (attaching event listeners to all of the shapes
		based on their size), and then you click on a large shape, it will become
		medium, but clicking it a second time will not shrink it further.
		This is because the event listener was not added to that newly-made medium
		shape, but only to the medium shapes that existed when the code was run!
	
	  There are multiple fixes to this:
		1. You add a click handler on shapes, and then check the size of that
		shape and based on the size, perform a different action:
	*/
	
	$('.shape').on('click', function(event) {
		if ($(this).hasClass('small')) {
			$(this).hide();
		} else if ($(this).hasClass('medium')) {
			$(this)
				.removeClass('medium')
				.addClass('small');
		} else if ($(this).hasClass('large')) {
			$(this)
				.removeClass('large')
				.addClass('medium');
		}
	});
	
	/*
		2. We will use something called Event Delegation.
		The way this works is a parent container has a click handler attached to it
		and is listening for clicks. Then it checks to see if what was clicked inside
		of it (using `event.target` or `this`) is a shape and, if it is, will shrink
		it by adding the correct class depending on the size of the shape
	*/
	
	// Event Delegation
	
	// $('body').on('click', '.shape', function() {
	// 	// Due to event delegation, `this` within the callback function is the shape
	// 	// that was clicked on
	// 	if ($(this).hasClass('large')) {
	// 		$(this)
	// 			.removeClass('large')
	// 			.addClass('medium');
	// 	} else if ($(this).hasClass('medium')) {
	// 		$(this).removeClass('medium');
	// 		$(this).addClass('small');
	// 	} else if ($(this).hasClass('small')) {
	// 		$(this).hide();
	// 	}
	// });	
})