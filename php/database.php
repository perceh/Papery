<?php 

if(isset($_GET['offset']) && isset($_GET['limit'])){
	//De database connectie word hier aangemaakt
	define('DBHOST', 'YOURHOST');
	define('DBUSER', 'YOURUSERNAME');
	define('DBPASS', 'YOURDBPASSWORD');
	define('DBNAME', 'YOURDBNAME');
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
	$query = "SELECT * FROM articles ORDER BY created_article DESC LIMIT $limit OFFSET $offset"; //replace the articles and created_article with your database row names
	$data = mysqli_query($conn, $query);

	if (mysqli_num_rows($data) > 0) 
        {
            while($row = mysqli_fetch_assoc($data)) //replace the row's with your database row names and your own image
                {
                	echo'<article class="collumn">
							<h1 class="headline">'. $row['title'] . '</h1>
							<h2 class="headline">'. $row['title_small'] .'</h2>
							<p>
								'. $row['article_small'] .'
							</p>
							<img src="https://media1.britannica.com/eb-media/25/93825-004-A21EC811.jpg"> 
						</article>';
                }
        }
}
 ?>
