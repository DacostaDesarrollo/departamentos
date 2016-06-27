-- phpMyAdmin SQL Dump
-- version 4.0.10.14
-- http://www.phpmyadmin.net
--
-- Servidor: localhost:3306
-- Tiempo de generación: 24-06-2016 a las 15:41:49
-- Versión del servidor: 5.6.30
-- Versión de PHP: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `suppler_application`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE IF NOT EXISTS `departamento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prefijo` varchar(200) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `etiqueta` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=33 ;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`id`, `prefijo`, `nombre`, `etiqueta`) VALUES
(1, '', 'AMAZONAS', ''),
(2, '', 'ANTIOQUIA', ''),
(3, '', 'ARAUCA', ''),
(4, '', 'ATLANTICO', ''),
(5, '', 'BOLIVAR', ''),
(6, '', 'BOYACA', ''),
(7, '', 'CALDAS', ''),
(8, '', 'CAQUETA', ''),
(9, '', 'CASANARE', ''),
(10, '', 'CAUCA', ''),
(11, '', 'CESAR', ''),
(12, '', 'CHOCO', ''),
(13, '', 'CORDOBA', ''),
(14, '', 'CUNDINAMARCA', ''),
(15, '', 'GUAINIA', ''),
(16, '', 'GUAVIARE', ''),
(17, '', 'HUILA', ''),
(18, '', 'GUAJIRA', ''),
(19, '', 'MAGDALENA', ''),
(20, '', 'META', ''),
(21, '', 'NARINO', ''),
(22, '', 'NORTE DE SANTANDER', ''),
(23, '', 'PUTUMAYO', ''),
(24, '', 'QUINDIO', ''),
(25, '', 'RISARALDA', ''),
(26, '', 'SAN ANDRES Y PROVIDENCIA', ''),
(27, '', 'SANTANDER', ''),
(28, '', 'SUCRE', ''),
(29, '', 'TOLIMA', ''),
(30, '', 'VALLE DEL CAUCA', ''),
(31, '', 'VAUPES', ''),
(32, '', 'VICHADA', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
