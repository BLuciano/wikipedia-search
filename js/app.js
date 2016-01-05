(function(){
  var wikiData = "", searchFor;
  var url ='https://en.wikipedia.org/w/api.php';

  $("#search p").click(function(){
    $(this).addClass("animate-p");
    $("#search span").html("x").addClass("animate-span");
    $("#search input").css("display", "block");
    $("#search label").html("Search something. Empty search will render a random entry!");
  });

  $("#search span").click(function(){
    $(this).html("|").removeClass("animate-span");
    $("#search p").removeClass("animate-p");      
    $("#search input").val("").css("display", "none");
    $("#search label").html("Click Icon to Search");
  });

  $("#search form")[0].onkeypress = function(e){
    if (!e) e = window.event;
      var keyCode = e.keyCode || e.which;
    
    if (keyCode == '13'){
      searchFor = $("#search input").val();
      $("#search label").html("searching...");
      
      if($("#search input").val().length === 0){
        var randomUrl = "http://randomword.setgetgo.com/get.php";
        $.ajax({
            type: "GET",
            url: randomUrl,
            dataType: "jsonp"
        })
        .done(function(data){
          searchFor = data.Word;
          searchWiki();
          $("#search input").val(data.Word);
        })
        .fail(function(error){
          $("#search label").html("Error retrieving a random word");
        });
      } else{
        searchWiki();
        $("#search input").val("");
      }
   
      return false;
    }
  }

  function searchWiki(){
    $.ajax({
      url: url,
      jsonp: "callback", 
      dataType: 'jsonp', 
      data: { 
        action: "query", 
        generator: "search", 
        gsrsearch: searchFor,
        format: "json",
        prop: "extracts",
        exintro : 1,
        explaintext : 1,
        exsentences : 1,
        exlimit : "max"     
      },
      xhrFields: { withCredentials: true }
      })
      .done(function(data){
        $("#search form").css("margin-top", '50px');
        $("#search label").html("Search something. Empty search will render a random entry!");
        $("#results").html("");
        data = data.query.pages;
        for(var key in data){
          wikiData = "";
          wikiData+= "<a target='_blank' href='https://en.wikipedia.org/?curid=" + data[key].pageid + "'>";
          wikiData+= "<div class='container'>";
          wikiData+= "<h2>" + data[key].title + "</h2>";
          wikiData+= "<p>" + data[key].extract + "</p>";
          wikiData+= "</div></a>";
          $("#results").append(wikiData);
        }
      })
      .fail(function(error){
        $("#search label").html(error.statusText);
      });
  }
})();