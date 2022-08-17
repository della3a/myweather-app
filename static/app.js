 import cities from ".//cities.json" assert {type: 'json'};


 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '421ee44f7cmsh4cdbcb5aecb032ep198612jsnff7eda551739',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

let weather ={

	// function that fetch weather data from API

	fetchWeather : function(city){
		fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+city, options)
		.then(response => response.json())
		.then(data => this.displayWeather(data))
		.catch(err => console.error(err));
	},

	// function that displays weather data on the page

	displayWeather : function(data){
		const { name, country, localtime } = data.location;
		const { temp_c, cloud, humidity, wind_kph } = data.current;

		console.log(`${name} ${country} ${localtime} ${temp_c} ${cloud} ${humidity} ${wind_kph}`);

		document.querySelector('.city').innerText = "Weather in " + name;
		document.querySelector('.country').innerText = country;
		document.querySelector('.time').innerText = localtime;
		document.querySelector('.temp').innerText = temp_c + "°C";
		document.querySelector('.cloud').innerText = "Clouds: " + cloud + "%";
		document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
		document.querySelector('.wind').innerText = "Wind: " + wind_kph + "kph";
	},
};

// animation for the weather box fading in

function fade(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
		if (op <= 0.8){
        element.style.opacity = op;
        op += op * 0.1;
		}
    },30);
}


setInterval(() => {
	fade(document.querySelector('.weather'));
	let city = cities[Math.floor(Math.random() * cities.length)];
	weather.fetchWeather(city.name);
}, 3000);





