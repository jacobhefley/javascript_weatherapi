var apiKey = require('./../.env').apiKey;

exports.Weather = function() {
  this.temperature = "";
}

exports.Weather.prototype.getWeather = function(city) {
  return 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
};

exports.Weather.prototype.getCelsius = function() {
  this.celsius = this.temperature - 273.15;
  debugger;
  return this.celsius.toFixed(2);
}
