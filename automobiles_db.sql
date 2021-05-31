-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 31-Maio-2021 às 15:31
-- Versão do servidor: 10.1.37-MariaDB
-- versão do PHP: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `automobiles`
--
CREATE DATABASE IF NOT EXISTS `automobiles` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `automobiles`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluguel_carro`
--

CREATE TABLE `aluguel_carro` (
  `id` int(11) NOT NULL,
  `automovel` varchar(20) NOT NULL,
  `motorista` int(11) NOT NULL,
  `motivo` varchar(255) NOT NULL,
  `data_retirada` date DEFAULT NULL,
  `data_entrega` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `carros`
--

CREATE TABLE `carros` (
  `placa` varchar(20) NOT NULL,
  `cor` varchar(20) NOT NULL,
  `marca` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `carros`
--

INSERT INTO `carros` (`placa`, `cor`, `marca`) VALUES
('ABC-1234', 'PRATA', 'FORD'),
('DEF-5678', 'PRETO', 'HONDA');

-- --------------------------------------------------------

--
-- Estrutura da tabela `motoristas`
--

CREATE TABLE `motoristas` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `motoristas`
--

INSERT INTO `motoristas` (`id`, `nome`) VALUES
(1, 'JOAO'),
(2, 'MARIA'),
(3, 'JOSE');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aluguel_carro`
--
ALTER TABLE `aluguel_carro`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carros`
--
ALTER TABLE `carros`
  ADD PRIMARY KEY (`placa`);

--
-- Indexes for table `motoristas`
--
ALTER TABLE `motoristas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aluguel_carro`
--
ALTER TABLE `aluguel_carro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `motoristas`
--
ALTER TABLE `motoristas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
