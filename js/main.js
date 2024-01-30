


$(document).ready(function() {
	$(".menu").click(function() {
	   $(this).hide();
	   $(".menu-close").show("fast");
	   $("nav").show("fast");
	   $("nav ul").fadeIn("slow");
	});
	$(".menu-close").click(function() {
	   $(this).hide();
	   $(".menu").show("fast");
	   $("nav").hide("fast");
	   $("nav ul").hide();
	});
	
	$(".downloadBtn").click(function(){
		$(".downLoadWrap").slideDown();
	});
	
	$(document).mouseup(function (e) {
		var popup = $(".downLoadWrap");
		if (!$('.downldUl').is(e.target) && !$('.downloadBtn').is(e.target) && !$('.fa').is(e.target)) {
			popup.fadeOut();
		}
	});
	
	$(window).load(function(){
		$("#preloader").fadeOut("slow");
	});
});




	
	