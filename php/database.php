<?php 

//De database connectie word hier aangemaakt
define('DBHOST', 'localhost');
define('DBUSER', 'root');
define('DBPASS', '');
define('DBNAME', 'portfolio');

// Create connection
$conn = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME);

// Check connection
if (mysqli_connect_errno()) {
 //echo "Failed to connect to MySQL: " . mysqli_connect_error();
	die('Service kan niet geladen worden');
}
 ?>
