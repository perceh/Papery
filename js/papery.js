$(document).ready(function(){
  
  
  function browserWidth() {
  	$loadAmount = 0;
  	if ($(window).width() >= 1200) {
  		$loadAmount = 20;
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
    if($(window).scrollTop() >= $(document).height() - $(window).height()){

      // If there is no Ajax request pending
      if(!ajaxRunning && !allResultsReceived){
        $.ajax({
          type: "GET",
          url: "php/database.php",
          data: {
            'offset': increaseArticles,
            'limit': 10
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

        // Set flag to true to prevent concurring ajax resquest.
        ajaxRunning=true;
      }
    }
  });
});