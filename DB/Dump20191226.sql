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
  `imgpath` varchar(45) DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinfo`
--

LOCK TABLES `userinfo` WRITE;
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES (1,'pb0364','474bc922fe8b9ed7f4d4bcac1d71c7cad0dc69b9524e83d39d2a5d9d283f41020d12d28cc410816ea7fc8a248144e360aa4a30201cd2b57a5533a77211d366eb','1','1',NULL,'123@gmail.com',1,NULL,'673823565426'),(2,'pb03641','29c7986100abaf4550acd4bb0f3e605a36dc47766ca92274c2be92d11292ac1fc606af0dbac869fba991e6ec5585fce8f744f8cc7bf56717d802bb78235e7689','1','1',NULL,'123@gmail.com',1,NULL,'1504332931123'),(3,'pb03643','ce9abfa0e4f419afc42b0312f810025478d4eed92a431b6411036ccd2915e00ebf18489bf9fde4abbb41a128b7fb387b1056828ed64d86760c8d4808777426eb','1','1',NULL,'1@gmail.com',1,NULL,'1542407390206'),(4,'pb03644','9ddc8f148351f18f819974ee34fa0751daef79104719e1fb2aa4fea0e5d7ee834212a09f2f02cf7089e2a0215b4612875f8fc75c94fbe943ebc62761c8e4bde8','1','1',NULL,'1@gmail.com',1,NULL,'1224716629389'),(5,'pb0365','cd286e25217e404c055be1616668d58c27f06a72a721b2ad6efc59a609d619700fedf2a4f21a7ab79f44cedb851f4a9a96a06b15152da46c9c66e7d8ab2b7e20','1','1',NULL,'1@gmail.com',1,NULL,'479197555522'),(6,'pb03645','2b7d514972dbc9a960ae1815f90f71dd07f967c9300d4a3714ec6bd59a82dd594de6c48333ab6f6f4df04bea654f98b257b7b656b0c3037f4b40fc07ecde8891','1','1',NULL,'1@gmail.com',1,NULL,'704094988422'),(7,'pb03646','352f51d3a85eca1bf67f4cd8b68818d888e759bc1c2034f6a6e9c613350ac3f3affd6685928fed10b2d952fc730f6c4805775fabb7cbd2e3b81af89398efd0a0','1','1',NULL,'1@gmail.com',1,NULL,'53920363859');
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

-- Dump completed on 2019-12-26  3:39:49
