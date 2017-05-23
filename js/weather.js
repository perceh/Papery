$(document).ready(function() {
  $.simpleWeather({
    location: 'goirle, nb',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html= ''+weather.currently+'';
      html+= '<br>High: '+weather.high+'&nbsp;&#8451'+' &nbsp;&nbsp;'; 
      html+= 'Low: '+weather.low+'&nbsp;&deg;C';

  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html(error);
    }
  });
});
