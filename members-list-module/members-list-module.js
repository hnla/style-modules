/*
* Members List Module JavaScript
*/

(function($){

	var liItem = '#members-list li .item-title';
	var viewportWidth = $(window).width();

	// Get the item-title max height to set all occurences to match
	var itemTitleHeight = $('#members-list li .item-title').map(function() {
		return $(this).height();
	}).get();

	var itemTitleMaxHeight = Math.max.apply(null, itemTitleHeight) + (30);

	// Get the action buttons height to use to set current users display actions
	// if lacking in buttons.
	var actionButtons = $('#members-list li .action ').map(function() {
		return $(this).height();
	}).get();

	var actionButtonMaxHeight = Math.max.apply(null, actionButtons) ;


	// Add an inner div to work any styling design on allows use of parents
	// padding property for spacing.
	$('#members-list li').wrapInner('<div class="wrap">');

	// Set all list elements .item-title div to have equal min-height based on the highest &
	// add padding for empy action buttons container on current logged in user entry.

	if(viewportWidth > '601') {
		$( liItem ).css({'min-height': itemTitleMaxHeight + 'px' });
	}

	$( '#members-list li .action' ).css({'min-height': actionButtonMaxHeight + 'px', 'margin-bottom': '-2px' });

	if( $( '#members-list li.is-current-user' ) ) {
		if( $( '#members-list li.is-current-user .action' ).children().length === 0 ) {

		}
	}
	//alert(actionButtonMaxHeight);

})(jQuery);
