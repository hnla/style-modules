/*
* Members List Module JavaScript
*/

(function($){

	var liItem = 'ul#members-list li .item-title';
	var liActionCurrentUser = 'ul#members-list li.is-current-user .item';
	var viewportWidth = $(window).width();


	var itemTitleHeight = $('ul#members-list li .item-title').map(function() {
		return $(this).height();
	}).get();

	var itemTitleMaxHeight = Math.max.apply(null, itemTitleHeight);

	var actionButtons = $('ul#members-list li .action').map(function() {
		return $(this).height();
	}).get();

	var actionButtonHeight = Math.max.apply(null, actionButtons);

	// Set all list elements .item-title div to min-height to equal box height's &
	// add padding for empy action buttons container on current logged in user entry.

	if(viewportWidth > '601') {
		$( liItem ).css( {'min-height': itemTitleMaxHeight + 'px' });
		$( liActionCurrentUser ).css({'padding-bottom': actionButtonHeight + 'px' });
	}
	if( $( 'ul#members-list li.is-current-user' ) ) {
		$( 'ul#members-list li.is-current-user .action' ).hide();
	}
//	alert(viewportWidth);

})(jQuery);
