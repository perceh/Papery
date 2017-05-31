## Papery, your newspaper on the web

Newspapers are artifacts from the past nowadays, but for those who would like to bring journalism in the form of articles or even a real newspaper website can use Papery to do so.
Papery offers a few tools like "lazy loading" and image filters that can turn your website into a newspaper with the technology of the web of today. 

## Code Example

## Setup

### PHP
Papery requires a database connection to load the articles which is established in database.php
```define('DBHOST', 'YOURHOST');
	define('DBUSER', 'YOURHOSTUSERNAME');
	define('DBPASS', 'YOURPASSWORD');
	define('DBNAME', 'YOURDATABASE');```
Fill in your own database details and the name of the database you want to use for your articles

Ìn the PHP file you also declare the structure of your website. The "collumn" class has to be assigned to the top HTML element, which in the case of the demo is `<article>`. H1's, H2's and P's can be named differently to your website structure. In the demo we load "title" from the database as our article title, "title_small" as our sub-title and "article_small" as our article and main text. You can either change the HTML structure here and replace the titles and article which whatever you want to load from your database.

```<article class="collumn">
		<h1 class="headline">'. $row['title'] . '</h1>
		<h2 class="headline">'. $row['title_small'] .'</h2>
		<p>
			'. $row['article_small'] .'
		</p>
		<img src="https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_960_720.jpg"> 
	</article>';```


## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

Provide code examples and explanations of how to get the project.

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Describe and show how to run the tests with code examples.

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

A short snippet describing the license (MIT, Apache, etc.)