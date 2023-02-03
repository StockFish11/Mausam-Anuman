let weather = {
    apikey : "bd2c06728bd58d8b3ca718ce14b37a94",
    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="  
         +  city   +  "&units=metric&appid="
         + this.apikey)
        .then((res) => res.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather : function(data){
        const { name } = data;
        const { icon, description} = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.city').innerHTML = "Weather in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.temp').innerHTML = temp + "°C";
        document.querySelector('.description').innerHTML = description;
        document.querySelector('.humidity').innerHTML = "Humidity : " + humidity +" %";
        document.querySelector('.wind').innerHTML = "Wind Speed : " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search : function(){
        this.fetchWeather(document.querySelector('.search_bar').value);
    }
};

document.querySelector('.search button').addEventListener('click', function(){
        weather.search();
});

document.querySelector('.search_bar').addEventListener('keyup', function(event){
        if(event.key == "Enter"){
            weather.search();
        }
});

weather.fetchWeather("Delhi");