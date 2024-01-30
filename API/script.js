const apiKey = '163cd6ad88c1f620b37b47f113a91081'

async function getWeather(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        document.getElementById('city-name').textContent = data.name;
        document.getElementById('temperature').textContent = `${data.main.temp}°C`;
        document.getElementById('weather-description').textContent = data.weather[0].description;
        document.getElementById('weather-icon').src = `./img/${data.weather[0].icon}.svg`; 
        // document.getElementById('wind-speed').textContent = `${data.wind.speed} m/s`;

       var temp = data.weather[0].icon;
       console.log(temp); 
    }
    catch(error){
        console.error('Erreur, ville non trouvé', error);
    }
}


function getMeteo() {
    const val = document.querySelector('input').value;
    document.getElementById('weather-icon').style.display = 'flex';
    getWeather(val);


}

