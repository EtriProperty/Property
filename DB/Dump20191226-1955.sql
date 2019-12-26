-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: property
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `contentinfo`
--

DROP TABLE IF EXISTS `contentinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contentinfo` (
  `number` int(11) NOT NULL AUTO_INCREMENT,
  `floor` varchar(45) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `price` varchar(45) DEFAULT NULL,
  `roomtype` varchar(45) NOT NULL,
  `roomcount` varchar(45) NOT NULL,
  `roomsize` varchar(45) NOT NULL,
  `imgpath` varchar(1000) DEFAULT NULL,
  `date` date NOT NULL,
  `address` varchar(200) NOT NULL,
  PRIMARY KEY (`number`),
  KEY `owner_id_idx` (`owner_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`owner_id`) REFERENCES `userinfo` (`number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contentinfo`
--

LOCK TABLES `contentinfo` WRITE;
/*!40000 ALTER TABLE `contentinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `contentinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `replycontent`
--

DROP TABLE IF EXISTS `replycontent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `replycontent` (
  `number` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `user` varchar(45) NOT NULL,
  `owner` varchar(45) NOT NULL,
  `point` int(11) DEFAULT NULL,
  `rtime` datetime NOT NULL,
  PRIMARY KEY (`number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `replycontent`
--

LOCK TABLES `replycontent` WRITE;
/*!40000 ALTER TABLE `replycontent` DISABLE KEYS */;
/*!40000 ALTER TABLE `replycontent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userinfo`
--

DROP TABLE IF EXISTS `userinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userinfo` (
  `number` int(11) NOT NULL AUTO_INCREMENT,
  `id` varchar(45) NOT NULL,
  `password` varchar(10000) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `name` varchar(10) NOT NULL,
  `pointavg` decimal(7,1) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `auth` tinyint(2) NOT NULL,
  `ethaccount` varchar(100) DEFAULT NULL,
  `salt` varchar(100) NOT NULL,
  PRIMARY KEY (`number`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinfo`
--

LOCK TABLES `userinfo` WRITE;
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES (1,'pb0364','aa26711ec4c877f79746fca1b92c1683fbca1b0d89d6e0ef34d7bf4795e66224374e57a775746e419aa34061ecb65d88b220b223f9f4435556efc63b04dd91f0','1','1',NULL,'123@gmail.com',1,NULL,'1536922742246'),(2,'pb03641','d5f3ea654a1d2150b2edc29fd0ae40178e3316336c66f6da5ddd929737b1741c5b3c83b271f286fac647b0e9c3748a1370dc66bd38b7685be72f25299fc7a7e9','1','1',NULL,'123@gmail.com',1,NULL,'696258975463'),(3,'pb03642','f56f3fe127bf77a69623ffb4e7634f66938716516e6321c6475de4e909d6085e60721a84d2f4e1f126ab20be553ba50bda3966d0ddffd01f92a461fb83c4d9ec','1','123',NULL,'123@gmail.com',1,NULL,'89953842979'),(4,'pb03643','7d6b153844706903727ac475d9c5f4b0952357729e43fc4f424b581eb3712cad450af33b9716fcdef3f9425a1d679083722ed8e4dfa49ee6cc632247d6f026f9','1','1',NULL,'123@gmail.com',1,NULL,'292459990780');
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishilist`
--

DROP TABLE IF EXISTS `wishilist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishilist` (
  `id` int(11) NOT NULL,
  `imgpath` varchar(45) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `homeid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userid_idx` (`userid`),
  KEY `homenumber_idx` (`homeid`),
  CONSTRAINT `homenumber` FOREIGN KEY (`homeid`) REFERENCES `contentinfo` (`number`),
  CONSTRAINT `usernumber` FOREIGN KEY (`userid`) REFERENCES `userinfo` (`number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishilist`
--

LOCK TABLES `wishilist` WRITE;
/*!40000 ALTER TABLE `wishilist` DISABLE KEYS */;
/*!40000 ALTER TABLE `wishilist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-26 19:55:48
