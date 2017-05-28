$(document).ready(function(){
  
  var settings = {
  option1: 'good', 
  option2: {name: 'bad'}, 
 }

 //if (settings.option1 == 'good') alert("hi");

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

  browserWidth();


  authenticFilter();

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
jQuery(function() {

    $("img").addClass("authenticFilter");

});

  function authenticFilter() {
  	
  	$(".authenticFilter").css({"filter": "sepia(80%) grayscale(1) contrast(1) opacity(0.7)", "-webkit-filter": "sepia(80%) contrast(1) opacity(0.7)"});
  }
});