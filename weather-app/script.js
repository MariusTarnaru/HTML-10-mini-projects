const apikey = '3265874a2c77ae4a04bb96236a642d2f';
const url = (location) =>
 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), {
        origin: "cors"
    });
    const respData = await resp.json();

    console.log(respData, KtoC(respData.main.temp));
    addWeatherToPage(respData);
}

function addWeatherToPage(data){
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('kdiv');
    weather.classList.add('weather');

    weather.innerHTML = `
        <small>There are</small>
        <h2>${temp}*C</h2>
        <small>in ${search.value}</small>
    `;
    // clean up
    main.innerHTML = "";

    main.appendChild(weather);
}

function KtoC(K) {
    return(K - 273.15).toFixed(2);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = search.value;

    if(city){
        getWeatherByLocation(city);
    }

});