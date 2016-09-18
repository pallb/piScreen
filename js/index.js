// v3.1.0
//Docs at http://simpleweatherjs.com
$(document).ready(function() {
    getWeather(); //Get the initial weather.
  setInterval(getWeather, 600000); //Update the weather every 10 minutes.
});

function getWeather() {
  $.simpleWeather({
    location: 'Hamden, CT',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<strong class="city">'+weather.city+'</strong>';
      html += '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      
     // html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
     // html += '<li class="currently">'+weather.currently+'</li>';
    //  html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      html += '<ul>';
      for(var i=0;i<5;i++) {
       if(weather.forecast[i].text == "Scattered Thunderstorms"){
          //alert("big string");
          var weatherText = "Sct T-Storms";
        }else{
          var weatherText = weather.forecast[i].text;
        }
        html += '<li>'+'<strong class="day">'+weather.forecast[i].day+'</strong>'+'<br>'+'<em class="icon-'+weather.forecast[i].code+'"></em>'+'<br>'+ weatherText +'<br>'+ 'Hi '+weather.forecast[i].high+ '&deg; / Lo '+weather.forecast[i].low+'&deg;</li>';      }
      html += '</ul>';
      //Don't forget to include the moment.js plugin.
      var timestamp = moment(weather.updated);
      html += '<p>Weather updated '+moment(timestamp).fromNow()+'</p>';
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
