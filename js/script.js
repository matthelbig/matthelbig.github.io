/* Author:

*/


$(document).ready(function() {

	$(".dropdown-toggle").dropdown();
	
	$("#bg-photo-slidedown-toggle").click(function() {
		$(this).toggleClass("expanded");
		$("#bg-photo-slidedown").slideToggle(500);
	});
	
	$(".current.step").prev().find(".step-connector-fill").css("width", "0px").animate({
		width: "133px"
	}, 1000, function() {
		$(".current.step").addClass("active");
	});
	
	$("#circle").click(function() {
		$(this).animate({
			"width": "80px",
			"height": "80px",
			"top": "-=20px",
			"left": "-=20px",
			"border-top-left-radius": "+=20px",
			"border-bottom-left-radius": "+=20px",
			"border-top-right-radius": "+=20px",
			"border-bottom-right-radius": "+=20px"
		}, 1000, function() {});
	});
});
