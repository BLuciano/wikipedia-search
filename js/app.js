(function(){
	$("#search p").click(function(){
		$(this).addClass("animate-p");
		$("#search span").html("x").css("cursor", "pointer");
		$("#search input").css("display", "block");
	});

	$(".animate-p span").click(function(){
		$("#search p").removeClass("animate-p");
		$(this).html("|").css("cursor", "default");
		$("#search input").css("display", "none");
	});
})();