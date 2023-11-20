const apiKey = "85192a7c2c8269032fedfb61a3404a63";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);


    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed+ " Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "Images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Images/drizzle.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "Images/snow.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "Images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

// checkWeather(city)