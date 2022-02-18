CREATE DATABASE  IF NOT EXISTS `mern_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `mern_db`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: mern_db
-- ------------------------------------------------------
-- Server version	5.7.35-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `acceptance`
--

DROP TABLE IF EXISTS `acceptance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `acceptance` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Description` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Value` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acceptance`
--

LOCK TABLES `acceptance` WRITE;
/*!40000 ALTER TABLE `acceptance` DISABLE KEYS */;
INSERT INTO `acceptance` VALUES (1,'Приемка 1','Приемка отдела технического контроля предприятий: элементы массового применения',5),(2,'Приемка 3','Приемка отдела технического контроля предприятий: элементы по заказам минестерств и ведомств',3),(3,'Приемка 5','Общее военное применение (ОВП, ВП)',1),(4,'Приемка 7','Элементы особой стабильности, выпускаемые малыми партиями (ОСМ)',1),(5,'Приемка 9','Элементы особой стабильности и повышенной надежности',1);
/*!40000 ALTER TABLE `acceptance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exploitation`
--

DROP TABLE IF EXISTS `exploitation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exploitation` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Name_Index` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Description` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Value` decimal(20,2) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exploitation`
--

LOCK TABLES `exploitation` WRITE;
/*!40000 ALTER TABLE `exploitation` DISABLE KEYS */;
INSERT INTO `exploitation` VALUES (1,'З','р','Стационарная аппаратура, эксплуатируемая в лабораторных условиях, капитальных жилых помещениях, помещениях с искусственно регулируемыми климатическими условиями',1.00),(2,'З','чр','Стационарная аппаратура, эксплуатируемая в нерегулярно отапливаемых помещениях, в производственных, в том числе вентилируемых подземных помещениях',1.20),(3,'З','ов','Стационарная аппаратура, эксплуатируемая под навесом или в неотапливаемых помещениях, где климатические условия близки к условиям открытого воздуха',1.70),(4,'З','пн','Переносная аппаратура, используемая в режиме стационарного применения в любых помещениях',2.00),(5,'З','м','Мобильная аппаратура, эксплуатируемая в любых помещениях, в том числе в кузовах и прицепах автомобилей, палатках или на открытом воздухе',3.00),(6,'З','мд','Мобильная аппаратура, эксплуатируемая на железнодорожном транспорте, в кузовах и салонах автомашин и других механических транспортных средств',4.00),(7,'Б','ск','Аппаратура грузовых и пассажирских самолётов, эксплуатируемая в отсеках, где находятся люди',5.00);
/*!40000 ALTER TABLE `exploitation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kwidth`
--

DROP TABLE IF EXISTS `kwidth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kwidth` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Width` decimal(3,2) DEFAULT NULL,
  `Value` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kwidth`
--

LOCK TABLES `kwidth` WRITE;
/*!40000 ALTER TABLE `kwidth` DISABLE KEYS */;
INSERT INTO `kwidth` VALUES (1,0.56,1),(2,0.35,2),(3,0.23,3),(4,0.15,4),(5,0.10,5),(6,0.08,6);
/*!40000 ALTER TABLE `kwidth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-19  0:52:55
