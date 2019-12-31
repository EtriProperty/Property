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
  `phonenumber` varchar(45) NOT NULL,
  PRIMARY KEY (`number`),
  KEY `owner_id_idx` (`owner_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`owner_id`) REFERENCES `userinfo` (`number`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contentinfo`
--

LOCK TABLES `contentinfo` WRITE;
/*!40000 ALTER TABLE `contentinfo` DISABLE KEYS */;
INSERT INTO `contentinfo` VALUES (1,'2',1,'500/50','월세','1','7','../uploads/1577417703956-pb0364-원룸사진1-1.jpg,../uploads/1577417703950-pb0364-원룸사진1-2.jpg,','2019-12-24','관악구 조원중앙로 28-1','010-8109-1029'),(2,'4',2,'8000','전세','1.5','10','../uploads/1577424328341-mon-원룸사진2-1.JPG,../uploads/1577424328338-mon-원룸사진2-2.JPG,','2019-12-25','금천구 희로길 99-1','010-2450-6909'),(3,'2',2,'400/40','월세','1','7','../uploads/1577431267338-mon-원룸사진3-2.JPG,../uploads/1577431267336-mon-원룸사진3-1.JPG,','2019-12-27','구로구 01-1','010-2450-6909'),(4,'5',3,'8000','전세','2','9','../uploads/1577431444852-hoon-원룸4-1.JPG,../uploads/1577431444851-hoon-원룸4-2.JPG,','2019-12-27','성북구 조취로 1-1','010-8765-4637'),(5,'6',4,'1000/25','월세','1','7','../uploads/1577431527928-dong-원룸5-1.JPG,../uploads/1577431527927-dong-원룸5-2.JPG,','2019-12-27','서초구 76-22','010-9191-3131');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinfo`
--

LOCK TABLES `userinfo` WRITE;
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES (1,'pb0364','aa26711ec4c877f79746fca1b92c1683fbca1b0d89d6e0ef34d7bf4795e66224374e57a775746e419aa34061ecb65d88b220b223f9f4435556efc63b04dd91f0','010-8109-1029','이성준',NULL,'pb0364@gmail.com',1,NULL,'1536922742246'),(2,'mon','019802a16c35276b6924ba6c94d971e635b63998af0cb1cf4793788a2d01cc31d933dd7de11e2fbb64cf6064ca831546ceecf167d997b7bb0df54c996a1849d0','010-2450-6909','홍길동',NULL,'mon@gmail.com',1,NULL,'1323811030735'),(3,'hoon','bdd130b11d45da2b04b8983f891cb1620041b92bda6831240cb60183af5735dc7fce258c8f01a756059d9a1f72507407d6604dc804e4f3e9aafdab2e1a855fce','010-8765-4637','이훈',NULL,'hoon2@gmail.com',1,NULL,'178032072845'),(4,'dong','6ef60b4b9b8fa81562288e68f4c19c90dcd1e8eca2840ea338b8c340e5dc78013a52649f8b0465630a7da14250e2005f333e21a041b9408d624a9d817053ffd9','010-9191-3131','동진',NULL,'dong@gmail.com',1,NULL,'346937256617'),(5,'kangho','93e41548dbe1db4846b606faa1189a5bb33bd8f8b3a31dbbd40107ab1676a7d8f9450c5caa51976790ccbd0e4dcfd7b9b2f43ee873fd5ed54cf46a71c2e2e470','010-9888-1010','강호',NULL,'kang@gmail.com',1,NULL,'792708404406');
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

-- Dump completed on 2019-12-27 17:38:16
