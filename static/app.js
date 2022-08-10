const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '421ee44f7cmsh4cdbcb5aecb032ep198612jsnff7eda551739',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

	

let weather ={

	apikey : '421ee44f7cmsh4cdbcb5aecb032ep198612jsnff7eda551739',
	fetchWeather : function(city){
		fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+city, options)
		.then(response => response.json())
		.then(data => this.displayWeather(data))
		.then(response => console.log(response))
		.catch(err => console.error(err));
	},

	displayWeather : function(data){
		const { name } = data.location;
		const {localtime} = data.location;
		const { temp_c } = data.current;
		const { clouds } = data.current;
		const { humidity } = data.current;
		const { wind_kph } = data.current;

		console.log(`${name} ${localtime} ${temp_c} ${humidity} ${wind_kph}`);

		document.querySelector('.city').innerText = "Weather in " + name;
		document.querySelector('.temp').innerText = "Temperature: " + temp_c + "°C";
		document.querySelector('.clouds').innerText = "Clouds: " + clouds + "%";
		document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
		document.querySelector('.wind').innerText = "Wind: " + wind_kph + "kph";
	},

  search : function (){
    this.fetchWeather(document.querySelector(".input").value);
  }
};

setInterval(weather.fetchWeather("paris"), 3000);
setInterval(weather.fetchWeather("Algiers"), 3000);


