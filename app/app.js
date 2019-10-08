var app = angular.module('weatherApp', []);
app.controller('weatherCtrl', function($scope, $http) {
  var vm = $scope;
  vm. channelInfo = {
    heading:"Weather API AngularJS"
  };
  $scope.myFunc = function () {


    $http.get("http://ip-api.com/json").then(function (data) {
      vm.cityName
      var apiKey = "a1cddd83568c85b78ea24e1b1c2442f1";
      var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + vm.cityName + "&appid=" + apiKey + "&units=metric";

      $http.get(openWeatherURL).then(function (data) {
        vm.description = data.data.weather[0].description;
        vm.nameOfCity = data.data.name;
        vm.temp = data.data.main.temp;
        vm.maxTemp = data.data.main.temp_max;
        vm.minTemp = data.data.main.temp_min;
        vm.img = "http://openweathermap.org/img/wn/" + data.data.weather[0].icon + ".png";


      });

    });
  };

});



//http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric