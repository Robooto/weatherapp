// Services
weatherApp.service('cityService', function() {
    this.city = 'Portland, OR';
});

weatherApp.service('weatherService', [ '$resource', function($resource) {
    this.apiKey = '2de143494c0b295cca9337e1e96b00e0';
    this.GetWeather = function(city, days) {  var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
        callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
                                  
        return weatherAPI.get({ q: city, cnt: days, appid: this.apiKey  });
    };
}]);