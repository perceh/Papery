<?php 

if (isset($_GET['offset']) && isset($_GET['limit'])){
	$limit = $_GET['limit'];
	$offset = $_GET['offset'];

	//De database connectie word hier aangemaakt
	define('DBHOST', 'localhost');
	define('DBUSER', 'root');
	define('DBPASS', '');
	define('DBNAME', 'portfolio');
	/*
	define('DBHOST', 'localhost');
	define('DBUSER', 'rickyrek');
	define('DBPASS', 'aJO1o9lf56');
	define('DBNAME', 'rickyrek_port');
	*/
	// Create connection
	$conn = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME);

	// Check connection
	if (mysqli_connect_errno()) {
	 //echo "Failed to connect to MySQL: " . mysqli_connect_error();
		die('Service kan niet geladen worden');
	}

	$query = "SELECT * FROM articles DESC LIMIT {$limit} OFFSET {$offset} ";
    $data = mysqli_query($conn, $query);

	}
 ?>





