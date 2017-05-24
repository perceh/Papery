$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "php/database.php",
		data: {
			'offset': 0,
			'limit': 3
		},
		success: function(data){
			$('.articles').append(data);
		}
	});
});