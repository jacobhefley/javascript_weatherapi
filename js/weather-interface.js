var apiKey = require('./../.env').apiKey;
var Weather = require('./../js/weather.js').Weather;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    var newWeather = new Weather();
    $.get(newWeather.getWeather(city)).then(function(response) {
      $('.showWeather').html("<br>" + "The city you have chosen is " + city + "." + "<br><br>" + "The current temperature in " + city + " is " + response.main.temp + "K, which is " + newWeather.getCelsius(); + "C" + "<br>" + "The current humidity in " + city + " is " + response.main.humidity + "%" + "<br>" + " The current wind speed is " + response.wind.speed);
     }).fail(function(error){
     	$('.showWeather').text(error.responseJSON.message);
    });
  });
});
