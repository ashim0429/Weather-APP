-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2022 at 06:13 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prototype2`
--

-- --------------------------------------------------------

--
-- Table structure for table `weather_information`
--

CREATE TABLE `weather_information` (
  `weather_description` varchar(100) NOT NULL,
  `temperature` float NOT NULL,
  `wind_speed` float NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `city_name` varchar(100) NOT NULL,
  `country_name` varchar(100) NOT NULL,
  `max_temp` float NOT NULL,
  `min_temp` float NOT NULL,
  `feels_like` float NOT NULL,
  `humidity` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `weather_information`
--

INSERT INTO `weather_information` (`weather_description`, `temperature`, `wind_speed`, `time`, `city_name`, `country_name`, `max_temp`, `min_temp`, `feels_like`, `humidity`) VALUES
('few clouds', 292.27, 2.06, '2022-03-15 16:44:31', 'Kathmandu', 'NP', 292.27, 292.27, 292.12, 72),
('few clouds', 292.27, 2.06, '2022-03-15 16:44:43', 'Kathmandu', 'NP', 292.27, 292.27, 292.12, 72),
('clear sky', 297.41, 1.78, '2022-03-15 16:53:43', 'Janakpur Dham', 'NP', 297.41, 297.41, 296.54, 25),
('clear sky', 297.41, 1.78, '2022-03-15 17:11:00', 'Janakpur Dham', 'NP', 297.41, 297.41, 296.54, 25),
('clear sky', 289.22, 8.75, '2022-03-15 17:11:09', 'Denton', 'US', 290.42, 287.84, 288.58, 65),
('overcast clouds', 285.11, 1.79, '2022-03-15 17:11:16', 'Wolverhampton', 'GB', 286.17, 284.03, 284.01, 63),
('few clouds', 285.47, 4.63, '2022-03-15 17:11:55', 'Bradford', 'GB', 286.94, 284.55, 284.38, 62),
('clear sky', 297.73, 1.29, '2022-03-15 17:12:22', 'Biratnagar', 'NP', 297.73, 297.73, 296.82, 22);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
