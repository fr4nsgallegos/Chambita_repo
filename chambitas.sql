-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 04, 2020 at 04:13 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chambitas`
--

-- --------------------------------------------------------

--
-- Table structure for table `empleadorcalificaciones`
--

CREATE TABLE `empleadorcalificaciones` (
  `idCalificacion` int(11) NOT NULL,
  `dniEmpleador` int(11) NOT NULL,
  `dniTrabajador` int(11) NOT NULL,
  `numCalificacion` int(11) NOT NULL DEFAULT 0,
  `Comentario` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `empleadores`
--

CREATE TABLE `empleadores` (
  `dniEmpleador` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `numTelefono` int(11) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `ciudad` varchar(255) NOT NULL,
  `distrito` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `cuentaValidada` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `etiquetas`
--

CREATE TABLE `etiquetas` (
  `idEtiqueta` int(11) NOT NULL,
  `titulo` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `horarios`
--

CREATE TABLE `horarios` (
  `idHorario` int(11) NOT NULL,
  `idTrabajo` int(11) NOT NULL,
  `dia` varchar(255) NOT NULL,
  `horaInicio` time NOT NULL,
  `horaFinal` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `trabajadorcalificaciones`
--

CREATE TABLE `trabajadorcalificaciones` (
  `idCalificacion` int(11) NOT NULL,
  `idTrabajador` int(11) NOT NULL,
  `idEmpleador` int(11) NOT NULL,
  `numCalificacion` int(11) NOT NULL DEFAULT 0,
  `comentario` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `trabajadores`
--

CREATE TABLE `trabajadores` (
  `dni` int(11) NOT NULL,
  `nombres` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `numTelefono` int(11) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `ciudad` varchar(255) NOT NULL,
  `distrito` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `descripcion` varchar(750) NOT NULL,
  `cuentaValidada` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `trabajador_etiquetas`
--

CREATE TABLE `trabajador_etiquetas` (
  `idRelacion` int(11) NOT NULL,
  `dniTrabajador` int(11) NOT NULL,
  `idEtiqueta` int(11) NOT NULL,
  `nivel` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `trabajador_trabajos`
--

CREATE TABLE `trabajador_trabajos` (
  `idRelacion` int(11) NOT NULL,
  `dniTrabajador` int(11) NOT NULL,
  `idTrabajo` int(11) NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFinal` date NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `trabajos`
--

CREATE TABLE `trabajos` (
  `idTrabajo` int(11) NOT NULL,
  `nombreTrabajo` varchar(255) NOT NULL,
  `descTrabajo` varchar(750) NOT NULL,
  `pagoTrabajo` decimal(10,2) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1,
  `fechaInicio` date NOT NULL,
  `fechaFinal` date NOT NULL,
  `plazoPostulacion` date NOT NULL,
  `distrito` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `dniEmpleador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `trabajo_etiquetas`
--

CREATE TABLE `trabajo_etiquetas` (
  `idRelacion` int(11) NOT NULL,
  `idTrabajo` int(11) NOT NULL,
  `idEtiqueta` int(11) NOT NULL,
  `prioridad` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `empleadorcalificaciones`
--
ALTER TABLE `empleadorcalificaciones`
  ADD PRIMARY KEY (`idCalificacion`),
  ADD KEY `dniEmpleador` (`dniEmpleador`),
  ADD KEY `dniTrabajador` (`dniTrabajador`);

--
-- Indexes for table `empleadores`
--
ALTER TABLE `empleadores`
  ADD PRIMARY KEY (`dniEmpleador`);

--
-- Indexes for table `etiquetas`
--
ALTER TABLE `etiquetas`
  ADD PRIMARY KEY (`idEtiqueta`);

--
-- Indexes for table `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`idHorario`),
  ADD KEY `idTrabajo` (`idTrabajo`);

--
-- Indexes for table `trabajadorcalificaciones`
--
ALTER TABLE `trabajadorcalificaciones`
  ADD PRIMARY KEY (`idCalificacion`),
  ADD KEY `idEmpleador` (`idEmpleador`),
  ADD KEY `idTrabajador` (`idTrabajador`);

--
-- Indexes for table `trabajadores`
--
ALTER TABLE `trabajadores`
  ADD PRIMARY KEY (`dni`);

--
-- Indexes for table `trabajador_etiquetas`
--
ALTER TABLE `trabajador_etiquetas`
  ADD PRIMARY KEY (`idRelacion`),
  ADD KEY `dniTrabajador` (`dniTrabajador`),
  ADD KEY `idEtiqueta` (`idEtiqueta`);

--
-- Indexes for table `trabajador_trabajos`
--
ALTER TABLE `trabajador_trabajos`
  ADD PRIMARY KEY (`idRelacion`),
  ADD KEY `dniTrabajador` (`dniTrabajador`),
  ADD KEY `idTrabajo` (`idTrabajo`);

--
-- Indexes for table `trabajos`
--
ALTER TABLE `trabajos`
  ADD PRIMARY KEY (`idTrabajo`),
  ADD KEY `dniEmpleador` (`dniEmpleador`);

--
-- Indexes for table `trabajo_etiquetas`
--
ALTER TABLE `trabajo_etiquetas`
  ADD PRIMARY KEY (`idRelacion`),
  ADD KEY `idEtiqueta` (`idEtiqueta`),
  ADD KEY `idTrabajo` (`idTrabajo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `empleadorcalificaciones`
--
ALTER TABLE `empleadorcalificaciones`
  MODIFY `idCalificacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `etiquetas`
--
ALTER TABLE `etiquetas`
  MODIFY `idEtiqueta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `horarios`
--
ALTER TABLE `horarios`
  MODIFY `idHorario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trabajadorcalificaciones`
--
ALTER TABLE `trabajadorcalificaciones`
  MODIFY `idCalificacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trabajador_etiquetas`
--
ALTER TABLE `trabajador_etiquetas`
  MODIFY `idRelacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trabajador_trabajos`
--
ALTER TABLE `trabajador_trabajos`
  MODIFY `idRelacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trabajos`
--
ALTER TABLE `trabajos`
  MODIFY `idTrabajo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trabajo_etiquetas`
--
ALTER TABLE `trabajo_etiquetas`
  MODIFY `idRelacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `empleadorcalificaciones`
--
ALTER TABLE `empleadorcalificaciones`
  ADD CONSTRAINT `empleadorcalificaciones_ibfk_1` FOREIGN KEY (`dniEmpleador`) REFERENCES `empleadores` (`dniEmpleador`),
  ADD CONSTRAINT `empleadorcalificaciones_ibfk_2` FOREIGN KEY (`dniTrabajador`) REFERENCES `trabajadores` (`dni`);

--
-- Constraints for table `horarios`
--
ALTER TABLE `horarios`
  ADD CONSTRAINT `horarios_ibfk_1` FOREIGN KEY (`idTrabajo`) REFERENCES `trabajos` (`idTrabajo`);

--
-- Constraints for table `trabajadorcalificaciones`
--
ALTER TABLE `trabajadorcalificaciones`
  ADD CONSTRAINT `trabajadorcalificaciones_ibfk_1` FOREIGN KEY (`idEmpleador`) REFERENCES `empleadores` (`dniEmpleador`),
  ADD CONSTRAINT `trabajadorcalificaciones_ibfk_2` FOREIGN KEY (`idTrabajador`) REFERENCES `trabajadores` (`dni`);

--
-- Constraints for table `trabajador_etiquetas`
--
ALTER TABLE `trabajador_etiquetas`
  ADD CONSTRAINT `trabajador_etiquetas_ibfk_1` FOREIGN KEY (`dniTrabajador`) REFERENCES `trabajadores` (`dni`),
  ADD CONSTRAINT `trabajador_etiquetas_ibfk_2` FOREIGN KEY (`idEtiqueta`) REFERENCES `etiquetas` (`idEtiqueta`);

--
-- Constraints for table `trabajador_trabajos`
--
ALTER TABLE `trabajador_trabajos`
  ADD CONSTRAINT `trabajador_trabajos_ibfk_1` FOREIGN KEY (`dniTrabajador`) REFERENCES `trabajadores` (`dni`),
  ADD CONSTRAINT `trabajador_trabajos_ibfk_2` FOREIGN KEY (`idTrabajo`) REFERENCES `trabajos` (`idTrabajo`);

--
-- Constraints for table `trabajos`
--
ALTER TABLE `trabajos`
  ADD CONSTRAINT `trabajos_ibfk_1` FOREIGN KEY (`dniEmpleador`) REFERENCES `empleadores` (`dniEmpleador`);

--
-- Constraints for table `trabajo_etiquetas`
--
ALTER TABLE `trabajo_etiquetas`
  ADD CONSTRAINT `trabajo_etiquetas_ibfk_1` FOREIGN KEY (`idEtiqueta`) REFERENCES `etiquetas` (`idEtiqueta`),
  ADD CONSTRAINT `trabajo_etiquetas_ibfk_2` FOREIGN KEY (`idTrabajo`) REFERENCES `trabajos` (`idTrabajo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
