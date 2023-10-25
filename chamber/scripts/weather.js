const weatherIcon = document.querySelector('#weather-icon-today');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#todayCaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-23.55&lon=-46.64&units=imperial&appid=ab7549aafebad18977aed6ad75482258';

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const imgSrc = ` https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', imgSrc);
    weatherIcon.setAttribute('alt', 'weatherIcon');
    captionDesc.textContent = desc;
}

apiFetch();  


/* ---------- ForecastWeather ---------- */
const forecastTemp = document.querySelector('#forecast-temp');
const forecastIcon = document.querySelector('#weather-icon-forecast');
const forecastCaption = document.querySelector('#forecastCaption');

const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-23.55&lon=-46.64&units=imperial&appid=ab7549aafebad18977aed6ad75482258';

async function apiFetchForecast(){
	try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
			displayResultsFore(data);
        }else{
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displayResultsFore(data){
    forecastTemp.innerHTML = `${data.list[16].main.temp}&deg;F`;
    const imgSrc = ` https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`;
    let desc = data.list[16].weather[0].description;

    forecastIcon.setAttribute('src', imgSrc);
    forecastIcon.setAttribute('alt', 'weatherIcon');
    forecastCaption.textContent = desc;
}


apiFetchForecast();
