<!DOCTYPE html>
<html>
	<head>
		<title>Demo</title>
		<link href="css/styles.css" type="text/css"    rel="stylesheet" /> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<script src="js/jquery-3.2.1.min.js"></script>
		<script src="js/SimpleWeather.js"></script>
		<script src="js/weather.js"></script>
		<script src="js/papery.js"></script>
		<script>
			$(document).ready(function(){
				var settings = {authenticFilter: 'on', randomizeHeaders: {state: 'on', topHeaderElement: 'h1', bottomHeaderElement: 'h2', topHeaderClass: ["hl1", "hl3"], bottomHeaderClass: ["hl4", "hl2"]}, hoverFilter: 'on'};
				var papery = new Papery(settings);
			});
		</script>
	</head>
	<body>
		<div class="head"> <!-- Header !-->
		    <div class="headerobjectswrapper">
		        <div class="weatherforcastbox"><span>Weatherforcast for today: </span><br><div id="weather"> </div></div>
		        <header id="rickytimes">The Papery Times</header>
		    </div>
		    <div class="subhead">Goirle - <?php echo date("l j F Y"); ?> - Price: Free</div>
		</div>

		<div class="articles">
			
		</div>
		<div class="articlesFade">
			
		</div>
	</body>
</html>

