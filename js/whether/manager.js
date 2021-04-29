
const theCreator = (res) => {

    // location
    const locationName = res.name;
    const country = res.sys.country;   

    // temperature
    let temperature;
    const kelvin = res.main.temp;
    const celsius = kelvin - 273.15;
    const fahrenheit = ((kelvin - 273.15) * 1.8) + 32; 
    
    temperature = celsius;


    // humidity
    const humidity = res.main.humidity;

    // wind
    const windDeg = res.wind.deg;
    const windSpeed = res.wind.speed;
    
    // weather
    const description = res.weather[0].description;
    const weatherMain = res.weather[0].main;   

    // date
    const date_ob = new Date();
    const date = ("0" + date_ob.getDate()).slice(-2);
    const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    const now = month + "." + date;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = date_ob.getDay();

    // icons

    let icon;

    const clearSkyIcon = "../../images/whether/clearSky.png";
    const fewCloudsIcon = "../../images/whether/fewCloudsIcon.png";
    const scatteredCloudsIcon = "../../images/whether/scatteredCloudsIcon.png";
    const brokenCloudsIcon = "../../images/whether/scatteredCloudsIcon.png";
    const showerRainIcon = "../../images/whether/showerRainIcon.png"; 
    const rainIcon = "../../images/whether/rainIcon.png";
    const thunderstormIcon = "../../images/whether/thunderstormIcon.png";
    const snowIcon = "../../images/whether/snowIcon.png"; 

    if(description == "clear sky"){
        icon = clearSkyIcon;
    } else if(description == "few clouds"){
        icon = fewCloudsIcon;
    } else if(description == "scattered clouds"){
        icon = scatteredCloudsIcon;
    } else if(description == "broken clouds"){
        icon = brokenCloudsIcon;
    } else if(description == "shower rain"){
        icon = showerRainIcon;
    } else if(description == "rain"){
        icon = rainIcon;
    } else if(description == "thunderstorm"){
        icon = thunderstormIcon;
    } else if(description == "snow"){
        icon = snowIcon;
    } else {
        icon = fewCloudsIcon;
    };

    // append html
    const whether = $("#whether");
      
    whether.html(`
            <div class="head">
            <div class="location"> ${locationName} , ${country} </div>
            <div> ${now} ${days[today]} </div>
        </div>

        <div id="result">
            <div class="temp">
                <span class="temp-num">${temperature.toFixed(0)}</span> <span class="temp-icon">°</span> <span class="temp-type"> <span class="celsius">c</span> | <span class="fahrenheit">f</span> | <span class="kelvin">k</span> </span>
            </div>

            <div class="info">
                <div>Humidity: ${humidity} % </div>
                <div>Wind Speed: ${windSpeed} km/h </div>
                <div>Status: ${weatherMain} </div>
            </div>
        </div>

        <div class="description">
            <img src="${icon}" alt="icon ${description}">
            <div>${description}</div>
        </div>
    `);


    // click  temperature
    $(".celsius").click(()=>{
        temperature = celsius;
        $(".temp-num").text(temperature.toFixed(0));
        $(".celsius").css("color","wheat");
        $(".fahrenheit").css("color","white");
        $(".kelvin").css("color","white");

    });

    $(".fahrenheit").click(()=>{
        temperature = fahrenheit;
        $(".temp-num").text(temperature.toFixed(0));
        $(".fahrenheit").css("color","wheat");
        $(".celsius").css("color","white");
        $(".kelvin").css("color","white");
    });

    $(".kelvin").click(()=>{
        temperature = kelvin;
        $(".temp-num").text(temperature.toFixed(0));
        $(".kelvin").css("color","wheat");
        $(".fahrenheit").css("color","white");
        $(".celsius").css("color","white");
    });

};


export default theCreator