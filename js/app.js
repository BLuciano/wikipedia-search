(function(){
	var url = "";
	var wikiData = "";

	$("#search p").click(function(){
		$(this).addClass("animate-p");
		$("#search span").html("x").addClass("animate-span");
		$("#search input").css("display", "block");
	});

	$("#search span").click(function(){
		$(this).html("|").removeClass("animate-span");
		$("#search p").removeClass("animate-p");			
		$("#search input").val("").css("display", "none");
	});

	$("#search form")[0].onkeypress = function(e){
    	if (!e) e = window.event;
    	var keyCode = e.keyCode || e.which;
    	if (keyCode == '13'){
    		if($("#search input").val().length > 0){
    			searchWiki();
			}
    		$("#search input").val("");	
      		return false;
    	}
  	}

  	function searchWiki(){
  		$("#search label").html("searching...");
  	}
})();