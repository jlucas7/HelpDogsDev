-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.16 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para teste
CREATE DATABASE IF NOT EXISTS `teste` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `teste`;

-- Copiando estrutura para tabela teste.incidents
CREATE TABLE IF NOT EXISTS `incidents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `value` float NOT NULL,
  `ong_id` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `incident_ong_fk` (`ong_id`),
  CONSTRAINT `incident_ong_fk` FOREIGN KEY (`ong_id`) REFERENCES `ongs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela teste.incidents: ~9 rows (aproximadamente)
/*!40000 ALTER TABLE `incidents` DISABLE KEYS */;
INSERT IGNORE INTO `incidents` (`id`, `title`, `description`, `value`, `ong_id`) VALUES
	(3, 'Caso 1 da ong HelpDog', 'Descrição 1 da ong HelpDogs', 120, '5e577f95'),
	(4, 'Caso 2 da ong HelpDog', 'Descrição 2 da ong HelpDogs', 200, '5e577f95'),
	(5, 'Caso 3 da ong HelpDog', 'Descrição 3 da ong HelpDogs', 300, '5e577f95'),
	(6, 'Caso 4 da ong HelpDog', 'Descrição 4 da ong HelpDogs', 400, '5e577f95'),
	(7, 'Caso 5 da ong HelpDog', 'Descrição 5 da ong HelpDogs', 500, '5e577f95'),
	(8, 'Caso 6 da ong HelpDog', 'Descrição 6 da ong HelpDogs', 600, '5e577f95'),
	(9, 'Caso 7 da ong HelpDog', 'Descrição 7 da ong HelpDogs', 1000, '5e577f95'),
	(11, 'Caso 1 da ong APA', 'Descrição da ong APA', 100, '6e577f95'),
	(12, 'Caso 2 da ong APA', 'Descrição 2 da ong APA', 200, '6e577f95');
/*!40000 ALTER TABLE `incidents` ENABLE KEYS */;

-- Copiando estrutura para tabela teste.ongs
CREATE TABLE IF NOT EXISTS `ongs` (
  `id` varchar(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `whatsapp` varchar(50) NOT NULL,
  `city` varchar(50) DEFAULT NULL,
  `uf` char(2) DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela teste.ongs: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `ongs` DISABLE KEYS */;
INSERT IGNORE INTO `ongs` (`id`, `name`, `email`, `whatsapp`, `city`, `uf`, `image`) VALUES
	('5e577f95', 'HelpDogs', 'HelpDogs@hotmail.com', '999999999', 'Bahia', 'BA', 'assets/ong1'),
	('6e577f95', 'APA', 'APA@hotmail.com', '111111111', 'Bahia', 'BA', 'assets/ong2'),
	('7e577f95', 'Passorro', 'Passorro@gmail.com', '222222222', 'Rio de Janeiro', 'RJ', 'assets/ong3'),
	('8e577f95', 'DogChow', 'DogChow@amigocao.com.br', '333333333', 'São Paulo', 'SP', 'assets/ong4');
/*!40000 ALTER TABLE `ongs` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
