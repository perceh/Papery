$(document).ready(function(){
  
  var settings = {
  authenticFilter: 'on', //binds a authentic paper filter to your images on/off
  randomizeHeaders: {state: 'on', topHeader: 'h1', secondHeader: 'h2'}, 
 }

 //if (settings.option1 == 'good') alert("hi");

//check browsersize on load and change load amount accordingly
  function browserWidth() {
  	$loadAmount = 0;
  	if ($(window).width() >= 1200) {
  		$loadAmount = 15;
  	}
  	 else if ($(window).width() < 1200 && $(window).width() >= 700) {
  	 	$loadAmount = 10;
  	 }
  	 else if ($(window).width() < 700) {
  	 	$loadAmount = 3;
  	 }
  	 console.log($loadAmount);
  }
//console.log(settings.randomizeHeaders.state);
  browserWidth();

  function authenticFilter() {
  	if (settings.authenticFilter == 'on'){
	  	$("img").addClass("authenticFilter");
	  	$(".authenticFilter").css({"filter": "sepia(80%) grayscale(1) contrast(1) opacity(0.7)", "-webkit-filter": "sepia(80%) contrast(1) opacity(0.7)"});
  	}
  }
/*
  function randomizeHeaders() {
  	if (settings.randomizeHeaders.state == 'on'){
	  	var topHeader = ["hl1", "hl3", "hl5"];
	  	var randomtopHeader = topHeader[Math.floor(Math.random() * topHeader.length)];
	  	$(settings.randomizeHeaders.topHeader).addClass(randomtopHeader);
  	}
  }
 */
/*
function randOrd() {
    return (Math.round(Math.random())-0.5); 
}

function randomizeHeaders() {
    var klasses = ["hl1", "hl3", "hl5"];
    klasses.sort(randOrd);
    $('.collumn h1').each(function(i, val) {
        $(this).addClass(klasses[i]);
    });
}
*/
function randomizeHeaders() {
  var classes = ["hl1", "hl3"];

    $('.collumn ' + settings.randomizeHeaders.topHeader).each(function(){
        $(this).addClass(classes[~~(Math.random()*classes.length)]);
    });
}

  var increaseArticles = 0;
  //get the first 10 articles from the database query in database.php
  $.ajax({
    type: "GET",
    url: "php/database.php",
    data: {
      'offset': 0,
      'limit': $loadAmount
    },
    success: function(data){
      $('.articles').append(data);
      increaseArticles += 10;
      authenticFilter();
      randomizeHeaders();
    }
  });

  // Flag
  var ajaxRunning=false;
  var allResultsReceived=false;

  //scroll down to load the next batch of 10
  $(window).scroll(function(){
    if($(window).scrollTop() >= $(document).height() - $(window).height()-100){

      // Check if there is no Ajax request pending
      if(!ajaxRunning && !allResultsReceived){
        $.ajax({
          type: "GET",
          url: "php/database.php",
          data: {
            'offset': increaseArticles,
            'limit': $loadAmount
          },
          success: function(data){
            $('.articlesFade').append(data).hide().fadeIn(1000);
            increaseArticles += 10;
            authenticFilter();
            randomizeHeaders();

            var howManyResult = (data.match(/.collumn/g) || []).length;

            if(howManyResult!=10){
              allResultsReceived=true;    // Disable all future request call.
            }

            // Reset flag;
            ajaxRunning=false;
          }
        });

        // Set flag to true to prevent concurring ajax request.
        ajaxRunning=true;
      }
    }
  });
});