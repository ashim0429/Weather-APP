<?php
$dbhost ='localhost';
$dbName ='prototype2';
$dbusername = 'root';
$dbpassword = '';


$mysqli = new mysqli($dbhost, $dbusername, $dbpassword, $dbName);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

date_default_timezone_set('Asia/Kathmandu');
$sql = "SELECT * FROM weather_information WHERE city_name = '{$_GET['city']}' AND time >=DATE_SUB(NOW(), INTERVAL 10 SECOND) ORDER BY time DESC limit 1";
$result = $mysqli -> query($sql);
// if no any record is found
if ($result->num_rows == 0) 
{

    $url = 'https://api.openweathermap.org/data/2.5/weather?q=' . $_GET['city'] . '&appid=c76d6641e2f4f1b5276e65d5581f235f';
    // Get data from openweathermap and store in JSON object
    $data = file_get_contents($url);
    //file_get_contents reads the file into a string value
    $json = json_decode($data, true);
    //json_decode converts a JSON encoded string into a PHP variable.


    // Fetch the required data for the prototype.
    $weather_description = $json['weather'][0]['description'];
    $temperature = $json['main']['temp'];
    $wind_speed = $json['wind']['speed'];
    $max_temp = $json['main']['temp_max'];
    $min_temp = $json['main']['temp_min'];
    $humid = $json['main']['humidity'];
    $feel = $json['main']['feels_like'];
    $time = date("Y-m-d H:i:s"); // now
    $city = $json['name'];
    $country = $json['sys']['country'];

    
    // the code below INSERT SQL statement.
    $sql = "INSERT INTO weather_information(weather_description, temperature, wind_speed, time, city_name, country_name, max_temp, min_temp, feels_like, humidity) VALUES('{$weather_description}', {$temperature}, {$wind_speed}, '{$time}', '{$city}', '{$country}', '{$max_temp}', '{$min_temp}', '{$feel}' , '{$humid}')";
    // Run SQL statement and report errors
    if (!$mysqli -> query($sql)) 
    {

        echo("<h4>SQL error description: " . $mysqli -> error . "</h4>");

    }
}
$sql = "SELECT * FROM weather_information ORDER BY time DESC limit 1";
$result = $mysqli -> query($sql);
// Get data, convert to JSON and print
$row = $result -> fetch_assoc();
print json_encode($row);
// Free result set and close connection
$result -> free_result();
$mysqli -> close();

?>
