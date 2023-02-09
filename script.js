$(document).ready(function () {
  //Making a request and displaying the weather data based on the location

  $("#searchBtn").click(function () {
 
    let apiKey = "f7d0cd7f9ebc48190a98cab81a058266";
    let location = document.getElementById("cityInput").value;
    $.ajax({
      type: "GET",
      url:
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        location +
        "&appid=" +
        apiKey,
      data: "[]",

      success: function (response) {
        //Turning the temperature from kelvin to celsisu
        //and then rounding up, as well as turning it 
        //from string to integer
        let temp = +response.main.temp;
        let celsius = (temp - 273.15).toFixed(0);

        //The same process as the above
        let fel = +response.main.feels_like
        let feeling = (fel - 273.15).toFixed(0);

        
        let iconUrl =
          "http://openweathermap.org/img/wn/" +
          response.weather[0].icon +
          "@2x.png";
        
        // Appending the data from the API to a div as well as
        // Appending a button in order to delete each div
        $(".result-container").append(

          "<div class='info-container'>" + "<h2>" + location + "</h2>" +
          
            "<p> Weather: " +
            response.weather[0].main +
            " - " +
            response.weather[0].description +
            "</p><img src='" +
            iconUrl +
            "'>" +
            "<p> Temperature: " +
            celsius + "°C" +
            "</p>" +
            "<p> Feels like: " +
            feeling + "°C" +
            "</p>" +
            "<p> Pressure: " +
            response.main.pressure + " Hg" +
            "</p>" + 
            "<p> Humidity: " +
            response.main.humidity + " g.m-3" +
            "</p><button id='removeBtn' class='btn btn-danger'>Remove</button> </div>" 
        );

        //Deleting the div that is clicked on
        $(".result-container").on("click", "#removeBtn", function() {
          $(this).closest(".info-container").remove();
        });
        
        
      },
    });
  });
});
