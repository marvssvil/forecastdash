var button = document.querySelector('.citysearch')
var inputValue = document.querySelector('#city')
var city = document.querySelector('.name');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humid = document.querySelector('.humid');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=fc0713daae58f66ca2a44a013d6712ff&units=imperial')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var windValue = data['wind']['speed'];
        var humidValue = data['main']['humidity'];

        city.innerHTML = nameValue;
        temp.innerHTML = "Temp:" +tempValue + "°F";
        wind.innerHTML = "Wind:" + windValue + "MPH";
        humid.innerHTML = "Humidity:" + humidValue + "%";

    })

.catch(err => alert("Put a valid city!"))
}) 
