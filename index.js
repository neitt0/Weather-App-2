const searchLoc = document.querySelector('button')
const todayTemp = document.querySelector('.weatherSum h1')
const todayWeekDate = document.querySelector('.dayOfWeek')
const todayDate = document.querySelector('.date')
const selectedlocation = document.querySelector('.location')
const todayIcon = document.querySelector('.weatherSum i')
const todayDescription = document.querySelector('.weatherDescription')

const apiKey = 'f3cc0892f458cdd3dce8f69e9c8356c0'

const weatherIcon = {
    '01d': 'sun',
    '01n': 'moon',
    '02d': 'sun',
    '02n': 'moon',
    '03d': 'cloud',
    '03n': 'cloud',
    '04d': 'cloud',
    '03n': 'cloud',
    '09d': 'cloud-rain',
    '09n': 'cloud-rain',
    '10d': 'cloud-rain',
    '10n': 'cloud-rain',
    '11d': 'cloud-lightning',
    '11n': 'cloud-lightning',
    '13d': 'cloud-snow',
    '13n': 'cloud-snow',
    '50d': 'water',
    '50n': 'water',
}

// default location
fetchData('Greenville')

// Search location
searchLoc.addEventListener('click', () => {
    fetchData(prompt('Enter a location', 'France'))
})

function fetchData(area) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            const iconCode = data.list[0].weather[0].icon

            // update infos
            // today infos
            todayTemp.textContent = `${data.list[0].main['temp']}°C`
            todayWeekDate.textContent = new Date().toLocaleDateString('en', {weekday: 'long'})
            todayDate.textContent = new Date().toLocaleDateString('en', {day: 'numeric', month: 'long', year: 'numeric'})
            selectedlocation.textContent = `${data.city['name']}, ${data.city['country']}`
            todayIcon.className = `bx bx-${weatherIcon[iconCode]}`
            todayDescription.textContent = `${data.list[0].weather[0].description}`

            // forecasts
        })
    
}