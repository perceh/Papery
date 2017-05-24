$(document).ready(function(){

	$.ajax({
		type: "GET",
		url: "get_articles.php",
		data: {
			'offset': 0,
			'limit': 3
		},
		success: function(data){
			$('body').append(data);
		}
	});
});	