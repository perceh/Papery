var Papery = function (settings) {
		var defaultSettings = {
			authenticFilter: 'off', //binds a authentic paper filter to your images on/off
			randomizeHeaders: {state: 'off', topHeaderElement: 'h1', bottomHeaderElement: 'h2', topHeaderClass: ["hl1", "hl3"], bottomHeaderClass: ["hl4", "hl2"]}, //state turns the functionality to randomize header styles on/off, set topheader/botoomheader with class or element from html
			hoverFilter: 'off',  //binds a authentic paper filter to your images & unveils the original immage if a user hovers over it on/off
		}

		var ajaxRunning=false; //flag
		var allResultsReceived=false; //flag
		var increaseArticles = 0;

		//check browsersize on load and change load amount accordingly TODO user declares loadamount
		Papery.checkBrowserwidth = function(loadAmount) {
				this.loadAmount = 0;
			if ($(window).width() >= 1200) {
				this.loadAmount = 15;
			}
			 else if ($(window).width() < 1200 && $(window).width() >= 700) {
			 	this.loadAmount = 10;
			 }
			 else if ($(window).width() < 700) {
			 	this.loadAmount = 3;
			 }
			 console.log(this.loadAmount);
		}

		Papery.checkBrowserwidth();

		Papery.authenticFilter = function() { //object start
			if (defaultSettings.authenticFilter == 'on' || typeof settings.authenticFilter !== 'undefined'){
			  	$("img").addClass("authenticFilter");
			  	$(".authenticFilter").css({"filter": "sepia(80%) grayscale(1) contrast(1) opacity(0.7)", "-webkit-filter": "sepia(80%) contrast(1) opacity(0.7)"});
			}
		}

		Papery.randomizeHeaders = function() { 
			if (typeof settings.randomizeHeaders !== 'undefined'){
				if (typeof settings.randomizeHeaders.topHeaderClass !== 'undefined' && typeof settings.randomizeHeaders.topHeaderElement !== 'undefined') {
				    $('.collumn ' + settings.randomizeHeaders.topHeaderElement).each(function(){
				        $(this).addClass(settings.randomizeHeaders.topHeaderClass[~~(Math.random()*settings.randomizeHeaders.topHeaderClass.length)]);
				    });
				}
				if (typeof settings.randomizeHeaders.bottomHeaderClass !== 'undefined' && typeof settings.randomizeHeaders.bottomHeaderElement !== 'undefined') {
				    $('.collumn ' + settings.randomizeHeaders.bottomHeaderElement).each(function(){
				        $(this).addClass(settings.randomizeHeaders.bottomHeaderClass[~~(Math.random()*settings.randomizeHeaders.bottomHeaderClass.length)]);
				    });
				}
			}
			else
			{
				$('.collumn ' + defaultSettings.randomizeHeaders.topHeaderElement).each(function(){
			        $(this).addClass(defaultSettings.randomizeHeaders.topHeaderClass[~~(Math.random()*defaultSettings.randomizeHeaders.topHeaderClass.length)]);
			    });

			    $('.collumn ' + defaultSettings.randomizeHeaders.bottomHeaderElement).each(function(){
			        $(this).addClass(defaultSettings.randomizeHeaders.bottomHeaderClass[~~(Math.random()*defaultSettings.randomizeHeaders.bottomHeaderClass.length)]);
			    });
			}
		}

		Papery.hoverFilter = function() {
			if (defaultSettings.hoverFilter == 'on' || typeof settings.hoverFilter !== 'undefined'){
				$("img").addClass("authenticFilter");
				  	$(".authenticFilter").css({"filter": "sepia(80%) grayscale(1) contrast(1) opacity(0.7)", "-webkit-filter": "sepia(80%) contrast(1) opacity(0.7)"});

				$("img").mouseenter(function() {
		    			$(this).css("filter", "sepia(0%) contrast(1) opacity(1)").css("-webkit-filter", "sepia(0%) contrast(1) opacity(1)");
					}).mouseleave(function() {
		     			$(this).css("filter", "sepia(80%) grayscale(1) contrast(1) opacity(0.7)").css("-webkit-filter", "sepia(80%) contrast(1) opacity(0.7)");
				});
			}
		}

		//get the first 10 articles from the database query in database.php
		$.ajax({
			type: "GET",
			url: "php/database.php",
			data: {
			  'offset': 0,
			  'limit': Papery.loadAmount
		},
			success: function(data){
				$('.articles').append(data);
				increaseArticles += 10;
				Papery.authenticFilter();
				Papery.randomizeHeaders();
				Papery.hoverFilter();
			}
		});

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
				        'limit': Papery.loadAmount
				      },
				     	 success: function(data){
					        $('.articlesFade').append(data).hide().fadeIn(1000);
					        increaseArticles += 10;
					        Papery.authenticFilter();
					        Papery.randomizeHeaders();
					        Papery.hoverFilter();

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
}
