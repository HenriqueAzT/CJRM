const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document
    .querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
let timeIconContainer = document.querySelector('[data-js="time-icon"]')

const getImageSRC = timeOfDay => {
    return `./src/${timeOfDay}.svg`
}

const showCityCard = () => {
    const containsDnone = cityCard.classList.contains('d-none')
    if (containsDnone) {
        cityCard.classList.remove('d-none')
    }
}

const fetchCityWeatherInfo = async (inputValue) => {
    const [{Key, LocalizedName}] = await getCityData(inputValue)
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await 
        getCityWeather(Key)

    return { LocalizedName, WeatherText, Temperature, IsDayTime, WeatherIcon }

}

const showCityWeatherInfo = async inputValue => {
    const { LocalizedName, WeatherText, Temperature, IsDayTime, WeatherIcon } = 
        await fetchCityWeatherInfo(inputValue)
    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`
    
    timeImg.src = IsDayTime ? getImageSRC('day') : getImageSRC('night')
    timeIconContainer.innerHTML = timeIcon
    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.Value

    showCityCard()
}

const showLocalStorageCity = () => {
    const city = localStorage.getItem('city')
    
    if (city) {
        showCityWeatherInfo(city)
    }
}

const handleCityForm = event => {
    event.preventDefault()
    const inputValue = event.target.city.value
    
    showCityWeatherInfo(inputValue)
    localStorage.setItem('city', inputValue)
    cityForm.reset()
}

cityForm.addEventListener('submit', handleCityForm)

showLocalStorageCity()
