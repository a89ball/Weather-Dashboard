$("#currentDay").text(moment().format("DD/M/YYYY"));

var API_KEY = "e72b1512a96a15828d146af29009e625"

function generateEndpoint(city) {
    var NUMBER_OF_DAYS_TO_REQUEST = 5;
    return `api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${NUMBER_OF_DAYS_TO_REQUEST}&appid=${API_key}`;

}

function makeRequest(endpoint) {
    return fetch (endpoint).then(function(response) {
        return response.json();
    });

}

var city = "Birmingham";

var endpoint = generateEndpoint(city)

makeRequest(endpoint).then(function(weatherInfo){
    
})