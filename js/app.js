(function(){
	$("#search p").click(function(){
		$(this).addClass("animate-p");
		$("#search span").html("x").addClass("animate-span");
		$("#search input").css("display", "block");
	});

	$("#search span").click(function(){
		$(this).html("|").removeClass("animate-span");
		$("#search p").removeClass("animate-p");			
		$("#search input").css("display", "none");
		});
})();