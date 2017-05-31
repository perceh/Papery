## Papery, your newspaper on the web

Newspapers are artifacts from the past nowadays, but for those who would like to bring journalism in the form of articles or even a real newspaper website can use Papery to do so.
Papery offers a few tools like "lazy loading" and image filters that can give your blog, website or portfolio an authentic newspaper look and feeling on today's web. 

## Code Example

## Setup
Install Papery by downloading the ZIP from Github and copying at least the following files into your project: "papery.js", "database.php" and "jquery-3.2.1.min.js" (or download the lastest version of jquery and link it in your head). 

### PHP
Papery requires a database connection to load the articles which is established in database.php
```
define('DBHOST', 'YOURHOST');
define('DBUSER', 'YOURHOSTUSERNAME');
define('DBPASS', 'YOURPASSWORD');
define('DBNAME', 'YOURDATABASE');
```
Fill in your own database details and the name of the database you want to use for your articles

Ìn the PHP file (database.php) you also declare the structure of your website. The "collumn" class has to be assigned to the top HTML element, which in the case of the demo is `<article>`. H1's, H2's and P's can be named differently or not be present in your website structure. In the demo we load "title" from the database as our article title, "title_small" as our sub-title and "article_small" as our article and main text. You can either change the HTML structure here and replace the titles and article in `$row['YOURDATABASEROW']` which whatever you want to load from your database.

```
<article class="collumn">
	<h1 class="headline">'. $row['title'] . '</h1>
	<h2 class="headline">'. $row['title_small'] .'</h2>
	<p>
		'. $row['article_small'] .'
	</p>
	<img src="'. $row['image'] . '"> 
</article>';
```

### HTML
The HTML structure is pretty straight foreward. In order to lazy load articles make sure to assign the articles class to one div and articlesFade to another on the page you want to add the several functions on. 
```
<div class="articles">
			
</div>
		
<div class="articlesFade">
			
</div>
```

### Papery.js
Papery.js requires very little configuration and can be configurated in the variable "settings" at the top of the file. The various functions of Papery can be set on/off from here. Some functions like randomizeHeaders have secondary configurations in which you can set the HTML element to suit your own HTML document setup.
```
var settings = {
	authenticFilter: 'off', 
	randomizeHeaders: {state: 'on', topHeader: 'h1', bottomHeader: 'h2'}, 
	hoverFilter: 'on',  
}
```

## History of Papery

Sometimes portfolio websites all feel the same. The ol' bootstrap onepager with the graph section about how good you might be at "webdevelopment", while being as unoriginal as you can be. I (Ricky Rekkers)
felt that my portfolio should contain something of me, something authentic. I am a storyteller and that is what I did on my portfolio. I created articles about my passions and my past projects and turned them into an actual online newspaper design. Not only did I give my website certain characteristics, but I also stood out while having job interviews! With the release of Papery, so can you!


## Contributors

For questions or if you want to contribute in making Papery better you can tweet me at [@PE_Despian](https://twitter.com/peDespian "My Twitter")!

## License

MIT License

Copyright (c) [2017] [Ricky Jason Rekkers]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.