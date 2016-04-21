/*
* Members List Module JavaScript
*/

(function($){

	var liItem = 'ul#members-list li .item-title';
	var viewportWidth = $(window).width();

	//stackoverflow.com/questions/6781031/use-jquery-css-to-find-the-tallest-of-all-elements
	var itemTitleHeight = $('ul#members-list li .item-title').map(function() {
		return $(this).height();
	}).get();

	var itemTitleMaxHeight = Math.max.apply(null, itemTitleHeight);

	// Set all list elements .item div to min-height to equal box height's

	if(viewportWidth > '601') {
		$( liItem ).css( {'min-height': itemTitleMaxHeight + 'px' });
	}
//	alert(viewportWidth);

})(jQuery);
