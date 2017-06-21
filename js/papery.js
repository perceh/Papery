var Papery = function (settings) {
		var defaultSettings = {
			authenticFilter: 'off', //binds a authentic paper filter to your images on/off
			randomizeHeaders: {state: 'off', topHeaderElement: 'h1', bottomHeaderElement: 'h2', topHeaderClass: ["hl1", "hl3"], bottomHeaderClass: ["hl4", "hl2"]}, //state turns the functionality to randomize header styles on/off, set topheader/botoomheader with class or element from html
			hoverFilter: 'off',  //binds a authentic paper filter to your images & unveils the original immage if a user hovers over it on/off
			screenSizeLoadamount: {monitor: 15, tablet: 10, mobile: 3},
		}
		
		var options = $.extend(true, defaultSettings , settings);
		var ajaxRunning=false; //flag
		var allResultsReceived=false; //flag
		var increaseArticles = 0;
		 
		//check browsersize on load and change load amount accordingly TODO user declares loadamount
		Papery.checkBrowserwidth = function(loadAmount) {
			if ($(window).width() >= 1200) {
				this.loadAmount = options.screenSizeLoadamount.monitor;
			}
			 else if ($(window).width() < 1200 && $(window).width() >= 700) {
			 	this.loadAmount = options.screenSizeLoadamount.tablet;
			 }
			 else if ($(window).width() < 700) {
			 	this.loadAmount = options.screenSizeLoadamount.mobile;
			 }
		}

		Papery.checkBrowserwidth();

		Papery.authenticFilter = function() { //object start
			if (this.authenticFilter == 'on'){
			  	$("img").addClass("authenticFilter");
			  	$(".authenticFilter").css({"filter": "sepia(80%) grayscale(1) contrast(1) opacity(0.7)", "-webkit-filter": "sepia(80%) contrast(1) opacity(0.7)"});
			}
		}

		Papery.randomizeHeaders = function() { 
				$('.collumn ' + options.randomizeHeaders.topHeaderElement).each(function(){
			        $(this).addClass(options.randomizeHeaders.topHeaderClass[~~(Math.random()*options.randomizeHeaders.topHeaderClass.length)]);
			    });

			    $('.collumn ' + options.randomizeHeaders.bottomHeaderElement).each(function(){
			        $(this).addClass(options.randomizeHeaders.bottomHeaderClass[~~(Math.random()*options.randomizeHeaders.bottomHeaderClass.length)]);
			    });
		}

		Papery.hoverFilter = function() {
			if (options.hoverFilter == 'on'){
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
