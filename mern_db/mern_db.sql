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
-- Table structure for table `description`
--

DROP TABLE IF EXISTS `description`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `description` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Coefficient` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Description` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `description`
--

LOCK TABLES `description` WRITE;
/*!40000 ALTER TABLE `description` DISABLE KEYS */;
INSERT INTO `description` VALUES (1,'layer','Количество слоёв в печатной плате'),(2,'countHoles','Общее количество отверстий в печатной плате (монтажных и переходных)'),(3,'a','Длина печатной платы в см'),(4,'b','Ширина печатной платы в см'),(5,'cMountConnect','Количество на печатной плате соединений для элементов поверхностного монтажа'),(6,'cMetalConnect','Количество металлизированных отверстий'),(7,'n1','Количество сквозных отверстий пропаянных способом «пайка волной»'),(8,'n2','Количество сквозных отверстий пропаянных ручным способом'),(9,'W','Ширина проводящих дорожек (печатных проводников)'),(10,'cycleCount','Число этапов работы (наработки) для печатной платы с разными значениями температуры окружающей среды t в i-м рабочем режиме'),(11,'cycleCount2','Число этапов работы (наработки) и нерабочих режимов (бездействия, хранения, ожидания)'),(12,'tPP','Cредняя температура окружающего воздуха вблизи печатной платы (возле элементов) для i-го рабочего этапа;'),(13,'tau','Годовая доля времени для печатной платы в постоянном режиме работы с питанием и температуре t i-го этапа работы'),(14,'nj','Количество циклов в год для j-го этапа эксплуатации, которым подвергается печатная плата и соединения с температурными изменениями Δt'),(15,'dtj','Средняя амплитуда теплового изменения в циклах j-го этапа эксплуатации');
/*!40000 ALTER TABLE `description` ENABLE KEYS */;
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
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `kExploitation` double DEFAULT NULL,
  `kAcceptance` int(11) DEFAULT NULL,
  `layer` int(11) DEFAULT NULL,
  `countHoles` int(11) DEFAULT NULL,
  `a` double DEFAULT NULL,
  `b` double DEFAULT NULL,
  `kWidth` int(11) DEFAULT NULL,
  `cMountConnect` int(11) DEFAULT NULL,
  `cMetalConnect` int(11) DEFAULT NULL,
  `n1` int(11) DEFAULT NULL,
  `n2` int(11) DEFAULT NULL,
  `cycleCount` int(11) DEFAULT NULL,
  `cycleCount2` int(11) DEFAULT NULL,
  `sum1` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sum2` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kLayer` double DEFAULT NULL,
  `square` double DEFAULT NULL,
  `countPrintedConductor` double DEFAULT NULL,
  `sumConnF` double DEFAULT NULL,
  `tauOn` double DEFAULT NULL,
  `tauOff` double DEFAULT NULL,
  `сWaveSoldering` int(11) DEFAULT NULL,
  `lambda` double DEFAULT NULL,
  `Pt` double DEFAULT NULL,
  `tn` double DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
INSERT INTO `history` VALUES (1,'2022-03-07 23:51:21',2,1,1,338,20,16,1,110,12,12,0,2,4,'[{\"t\":\"33\",\"tau\":\"23.8\",\"i\":0,\"kT\":1.0579147436437573},{\"t\":\"38\",\"tau\":\"23.8\",\"i\":1,\"kT\":1.1591870633250354}]','[{\"n\":\"261\",\"t\":\"23\",\"i\":0,\"kC\":68.65098701225978},{\"n\":\"261\",\"t\":\"18\",\"i\":1,\"kC\":68.65098701225978},{\"n\":\"261\",\"t\":\"10\",\"i\":2,\"kC\":68.65098701225978},{\"n\":\"104\",\"t\":\"7\",\"i\":3,\"kC\":34.11499703472625}]',1,320,224,0.00000033139599999999996,47.6,52.4,326,0.000000004526847419054283,0.9999603456028655,4169.76);
/*!40000 ALTER TABLE `history` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
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

-- Dump completed on 2022-03-08  2:58:01
