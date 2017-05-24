<?php 

if(isset($_GET['offset']) && isset($_GET['limit'])){
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

	$offset = $_GET['offset'];
	$limit = $_GET['limit'];

	//database query
	$query = "SELECT * FROM articles ORDER BY created_article DESC LIMIT $limit OFFSET $offset";
	$data = mysqli_query($conn, $query);

	if (mysqli_num_rows($data) > 0) 
        {
            while($row = mysqli_fetch_assoc($data)) 
                {
                	echo'<article class="collumn">
							<h1 class="headline hl3">'. $row['title'] . '</h1>
							<h2 class="headline hl4">'. $row['title_small'] .'</h2>
							<p>
								'. $row['article_small'] .'
							</p>
						</article>';
                }
        }
}
 ?>
