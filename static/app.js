 import cities from ".//cities.json" assert {type: 'json'};


 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '421ee44f7cmsh4cdbcb5aecb032ep198612jsnff7eda551739',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

let weather ={
	fetchWeather : function(city){
		fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+city, options)
		.then(response => response.json())
		.then(data => this.displayWeather(data))
		.catch(err => console.error(err));
	},

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

function fade(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
		if (op <= 0.8){
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
		}
    },30);
}


setInterval(() => {
	let city = cities[Math.floor(Math.random() * cities.length)];
	weather.fetchWeather(city.name);
	fade(document.querySelector('.weather'));
}, 3000);





