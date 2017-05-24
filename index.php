<?php 
	include('php/database.php'); 
	$sql =  "SELECT * FROM articles";
	$result = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Demo</title>
		<link href="css/styles.css" type="text/css"    rel="stylesheet" /> 
		<link  href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<script src="js/jquery-3.2.1.min.js"></script>
		<script src="js/SimpleWeather.js"></script>
		<script src="js/weather.js"></script>
	</head>
	<body id="paperbody">
		<div class="head">
		    <div class="headerobjectswrapper">
		        <div class="weatherforcastbox"><span>Weatherforcast for today: </span><br><div id="weather"> </div></div>
		        <header id="rickytimes">The Ricky Times</header>
		    </div>
		    <div class="subhead">Goirle - <?php echo date("l j F Y"); ?> - Price: Free</div>
		</div>

		<div class="articles">
			<article class="collumn">
				<h1 class="headline hl3">Welkom</h1>
				<h2 class="headline hl4">ondertitel</h2>
				<p>
					ncjdsbcuibdsouc ducbdsbcoudsbcoub
				</p>
			</article>

			<article class="collumn">
				<h1 class="headline hl3">Welkom</h1>
				<h2 class="headline hl4">ondertitel</h2>
				<p>
					ncjdsbcuibdsouc ducbdsbcoudsbcoub
				</p>
			</article>

			<article class="collumn">
				<h1 class="headline hl3">Welkom</h1>
				<h2 class="headline hl4">ondertitel</h2>
				<p>
					ncjdsbcuibdsouc ducbdsbcoudsbcoub
				</p>
			</article>

			<article class="collumn">
				<h1 class="headline hl3">Welkom</h1>
				<h2 class="headline hl4">ondertitel</h2>
				<p>
					ncjdsbcuibdsouc ducbdsbcoudsbcoub
				</p>
			</article>

			<article class="collumn">
				<h1 class="headline hl3">Welkom</h1>
				<h2 class="headline hl4">ondertitel</h2>
				<p>
					ncjdsbcuibdsouc ducbdsbcoudsbcoub
				</p>
			</article>

			<article class="collumn">
				<h1 class="headline hl3">Welkom</h1>
				<h2 class="headline hl4">ondertitel</h2>
				<p>
					ncjdsbcuibdsouc ducbdsbcoudsbcoub
				</p>
			</article>

			<article class="collumn">
				<h1 class="headline hl3">Welkom</h1>
				<h2 class="headline hl4">ondertitel</h2>
				<p>
					ncjdsbcuibdsouc ducbdsbcoudsbcoub
				</p>
			</article>

			<article class="collumn">
				<h1 class="headline hl3">Welkom</h1>
				<h2 class="headline hl4">ondertitel</h2>
				<p>
					ncjdsbcuibdsouc ducbdsbcoudsbcoub
				</p>
			</article>
		</div>
	</body>
</html>

