const ash = document.getElementById('Check_Weather');
ash.addEventListener("click", function weather() {
    //this is the search button for the prototype.
    var bar = document.getElementById('Search').value;
    //the code below fetch the data stored from api to SQL.
    fetch('http://localhost/Prototype2/2058978_index.php?city=' + bar)

    .then(response => response.json()).then(response => {
            console.log(response)
                // The var below defines the variable and all the temperature balue in Kelvin.

            // Here res, main, win and weather are objects that take value in key pair. 
            var city = response.city_name;
            var country = response.country_name;
            var temp = response.temperature;
            var win = response.wind_speed;
            var humi = response.humidity;
            var mx_tem = response.max_temp;
            var mn_tem = response.min_temp;
            var feel = response.feels_like;
            var des = response.weather_description;
            var time = response.time;

            // The code below converts temperature from Kelvin to Celsius.

            const temp_C = temp - 273.15;
            const feel_C = feel - 273.15;
            const mx_tem_C = mx_tem - 273.15;
            const mn_tem_C = mn_tem - 273.15;

            // The code below is to print the respective value from API
            document.querySelector(".temp").innerHTML = temp_C.toFixed(2) + " °C";
            document.querySelector(".wind").innerHTML = win + " m/h"; //here m/h is miles per hour.
            document.querySelector(".humid").innerHTML = humi + " %";
            document.querySelector(".feel").innerHTML = feel_C.toFixed(2) + " °C";
            document.querySelector(".max_temp").innerHTML = mx_tem_C.toFixed(2) + " °C";
            document.querySelector(".min_temp").innerHTML = mn_tem_C.toFixed(2) + " °C";
            document.querySelector(".sky").innerHTML = des;
            document.querySelector(".city").innerHTML = city;
            document.querySelector(".country").innerHTML = country;
            document.querySelector(".time").innerHTML = time;

            // The code given below is to print the icons for the description oif the SKY.
            if (des == "Clouds") {
                document.querySelector(".desc").innerHTML = 'Sky <i class="bi bi-cloud"></i>:- <span class="sky"></span>'
                document.querySelector(".sky").innerHTML = des;
            } else if (des == "Sun") {
                document.querySelector(".desc").innerHTML = 'Sky <i class="bi bi-brightness-high-fill"></i>:- <span class="sky"></span>'
                document.querySelector(".sky").innerHTML = des;
            } else if (des == "Fog") {
                document.querySelector(".desc").innerHTML = 'Sky <i class="bi bi-cloud-fog2-fill"></i>:- <span class="sky"></span>'
                document.querySelector(".sky").innerHTML = des;
            } else if (des == "Rain") {
                document.querySelector(".desc").innerHTML = 'Sky <i class="bi bi-cloud-rain-fill"></i>:- <span class="sky"></span>'
                document.querySelector(".sky").innerHTML = des;
            } else if (des == "clear sky") {
                document.querySelector(".desc").innerHTML = 'Sky <i class="bi bi-brightness-high"></i>:- <span class="sky"></span>'
                document.querySelector(".sky").innerHTML = des;
            } else if (des == "broken clouds") {
                document.querySelector(".desc").innerHTML = 'Sky <i class="bi bi-cloud-haze"></i>:- <span class="sky"></span>'
                document.querySelector(".sky").innerHTML = des;
            } else if (des == "Drizzle") {
                document.querySelector(".desc").innerHTML = 'Sky <i class="bi bi-cloud-rain-fill"></i>:- <span class="sky"></span>'
                document.querySelector(".sky").innerHTML = des;
            } else {
                document.querySelector(".desc").innerHTML = 'Sky <i class="bi bi-cloud"></i>:- <span class="sky"></span>'
                document.querySelector(".sky").innerHTML = des;
            }


        })
        // This code pass erro if there is any error in API key or internet not available.
        .catch(er => {
            console.log(er)
            alert("Error in fetching API. Please check your connection or API Key");
        });


})

function weather() {


};