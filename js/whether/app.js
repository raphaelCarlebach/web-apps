import theCreator from "./manager.js"
import keys from "../../config.js"


$(document).ready(function () {

    const key = keys.weather_key;

    // auto current location
    navigator.geolocation.getCurrentPosition(seccess, error);

    function seccess(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`,
            type: 'GET',
            success: function (res) {
                theCreator(res);
            },
            error: function (err) {
                console.log(err);
            }
        });
    };

    function error(err) {
        console.log(err)
        const result = $("#whether");

        result.html(`
            <div>${err.message} </div>
        `);
    };

    // by location
    $(".searchButton").click((event) => {

        $(".error").css("display", "none");
       
        const whetherInput = $(".searchInput").val();
        console.log(whetherInput);
        
        const location = whetherInput;

        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`,
            type: 'GET',
            success: function (res) {
                theCreator(res);
            },
            error: function (err) {
                console.log(err);
                $(".error").css("display", "block");
            }
        });
    });

});