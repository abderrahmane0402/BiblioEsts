-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: biblioests
-- ------------------------------------------------------
-- Server version	8.0.33

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

drop database if exists BiblioESTS;
create database BiblioESTS;
use BiblioESTS;

--
-- Table structure for table `approvisionement`
--

DROP TABLE IF EXISTS `approvisionement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `approvisionement` (
  `ID_APRO` int NOT NULL AUTO_INCREMENT,
  `ID_U` int NOT NULL,
  `ID_FOR` int NOT NULL,
  `DEVIS` decimal(10,0) DEFAULT NULL,
  `DATE` date DEFAULT NULL,
  `ENTREPRISE` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ADRESSE` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TELEPHONE` bigint DEFAULT NULL,
  PRIMARY KEY (`ID_APRO`),
  KEY `FK_FAIRE` (`ID_U`),
  KEY `FK_FOUNIR` (`ID_FOR`),
  CONSTRAINT `FK_FAIRE` FOREIGN KEY (`ID_U`) REFERENCES `utilisateur` (`ID_U`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_FOUNIR` FOREIGN KEY (`ID_FOR`) REFERENCES `fournisseur` (`ID_FOR`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `approvisionement`
--

LOCK TABLES `approvisionement` WRITE;
/*!40000 ALTER TABLE `approvisionement` DISABLE KEYS */;
INSERT INTO `approvisionement` VALUES (1,1,1,1000,'2023-05-02','Books entreprise','Books entrepriseBooks entreprise',58829773899);
/*!40000 ALTER TABLE `approvisionement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorie` (
  `ID_CAT` int NOT NULL AUTO_INCREMENT,
  `CAT_ID_CAT` int DEFAULT NULL,
  `LIBELLE` longtext COLLATE utf8mb4_unicode_ci,
  `SUJET` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`ID_CAT`),
  KEY `FK_APPARTIENT_CAT` (`CAT_ID_CAT`),
  CONSTRAINT `FK_APPARTIENT_CAT` FOREIGN KEY (`CAT_ID_CAT`) REFERENCES `categorie` (`ID_CAT`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorie`
--

LOCK TABLES `categorie` WRITE;
/*!40000 ALTER TABLE `categorie` DISABLE KEYS */;
INSERT INTO `categorie` VALUES (1,NULL,'informatique','informatiqueinformatiqueinformatiqueinformatique'),(2,1,'reseau informatique','reseau informatiquereseau informatiquereseau informatiquereseau informatiquereseau informatique'),(3,NULL,'informatique','informatiqueinformatiqueinformatiqueinformatique');
/*!40000 ALTER TABLE `categorie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contient`
--

DROP TABLE IF EXISTS `contient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contient` (
  `ID_APRO` int NOT NULL,
  `ID_LIVRE` int NOT NULL,
  `QTE` int DEFAULT NULL,
  PRIMARY KEY (`ID_APRO`,`ID_LIVRE`),
  KEY `FK_CONTIENT` (`ID_LIVRE`),
  CONSTRAINT `FK_CONTIENT` FOREIGN KEY (`ID_LIVRE`) REFERENCES `livre` (`ID_LIVRE`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_CONTIENT2` FOREIGN KEY (`ID_APRO`) REFERENCES `approvisionement` (`ID_APRO`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contient`
--

LOCK TABLES `contient` WRITE;
/*!40000 ALTER TABLE `contient` DISABLE KEYS */;
INSERT INTO `contient` VALUES (1,1,3);
/*!40000 ALTER TABLE `contient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emprunt_livre_etudiant`
--

DROP TABLE IF EXISTS `emprunt_livre_etudiant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emprunt_livre_etudiant` (
  `IDLE` int NOT NULL AUTO_INCREMENT,
  `N_INVENTAIRE` int NOT NULL,
  `N_APOGEE` int NOT NULL,
  `ID_U` int NOT NULL,
  `DATE_D` date DEFAULT NULL,
  `DATE_F` date DEFAULT NULL,
  `DATE_R` date DEFAULT NULL,
  `OBSERVATIONLE` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`IDLE`),
  KEY `FK_EMPRUNTER_LIVRE_ETUDIANT` (`N_INVENTAIRE`),
  KEY `FK_EMPRUNTE_LIVRE_ETUDIANT` (`N_APOGEE`),
  KEY `FK_SIGNER_LIVRE_ETUDIANT` (`ID_U`),
  CONSTRAINT `FK_EMPRUNT_LIVRE_ETUDIANT` FOREIGN KEY (`ID_U`) REFERENCES `utilisateur` (`ID_U`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_EMPRUNT_LIVRE_ETUDIANT2` FOREIGN KEY (`N_INVENTAIRE`) REFERENCES `exemplaire` (`N_INVENTAIRE`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_EMPRUNT_LIVRE_ETUDIANT3` FOREIGN KEY (`N_APOGEE`) REFERENCES `etudiant` (`N_APOGEE`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emprunt_livre_etudiant`
--

LOCK TABLES `emprunt_livre_etudiant` WRITE;
/*!40000 ALTER TABLE `emprunt_livre_etudiant` DISABLE KEYS */;
INSERT INTO `emprunt_livre_etudiant` VALUES (1,22002,2106092,1,'2023-05-03','2023-05-15','2023-05-13',NULL),(2,22002,2106092,1,'2023-05-03','2023-05-15','2023-05-17',NULL);
/*!40000 ALTER TABLE `emprunt_livre_etudiant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emprunt_livre_prof`
--

DROP TABLE IF EXISTS `emprunt_livre_prof`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emprunt_livre_prof` (
  `IDLP` int NOT NULL AUTO_INCREMENT,
  `N_INVENTAIRE` int NOT NULL,
  `ID_PROF` int NOT NULL,
  `ID_U` int NOT NULL,
  `DATE_D` date DEFAULT NULL,
  `DATE_F` date DEFAULT NULL,
  `DATE_R` date DEFAULT NULL,
  `OBSERVATIONLP` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`IDLP`),
  KEY `FK_EMPRUNTER_LIVRE_PROF` (`N_INVENTAIRE`),
  KEY `FK_EMPRUNTE_LIVRE_PROF` (`ID_PROF`),
  KEY `FK_SIGNER_LIVRE_PROF` (`ID_U`),
  CONSTRAINT `FK_EMPRUNT_LIVRE_PROF` FOREIGN KEY (`ID_U`) REFERENCES `utilisateur` (`ID_U`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_EMPRUNT_LIVRE_PROF2` FOREIGN KEY (`ID_PROF`) REFERENCES `prof` (`ID_PROF`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_EMPRUNT_LIVRE_PROF3` FOREIGN KEY (`N_INVENTAIRE`) REFERENCES `exemplaire` (`N_INVENTAIRE`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emprunt_livre_prof`
--

LOCK TABLES `emprunt_livre_prof` WRITE;
/*!40000 ALTER TABLE `emprunt_livre_prof` DISABLE KEYS */;
/*!40000 ALTER TABLE `emprunt_livre_prof` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emprunt_pfe_etudiant`
--

DROP TABLE IF EXISTS `emprunt_pfe_etudiant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emprunt_pfe_etudiant` (
  `IDPE` int NOT NULL AUTO_INCREMENT,
  `IDPFE` int NOT NULL,
  `ID_U` int NOT NULL,
  `N_APOGEE` int NOT NULL,
  `DATE_D` date DEFAULT NULL,
  `DATE_F` date DEFAULT NULL,
  `DATE_R` date DEFAULT NULL,
  `OBSERVATIONPE` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`IDPE`),
  KEY `FK_EMPRUNTER_PFE_ETUDIANT` (`IDPFE`),
  KEY `FK_EMPRUNTE_PFE_ETUDIANT` (`N_APOGEE`),
  KEY `FK_SIGNER_PFE_ETUDIANT` (`ID_U`),
  CONSTRAINT `FK_EMPRUNT_PFE_ETUDIANT` FOREIGN KEY (`ID_U`) REFERENCES `utilisateur` (`ID_U`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_EMPRUNT_PFE_ETUDIANT2` FOREIGN KEY (`IDPFE`) REFERENCES `pfe` (`IDPFE`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_EMPRUNT_PFE_ETUDIANT3` FOREIGN KEY (`N_APOGEE`) REFERENCES `etudiant` (`N_APOGEE`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emprunt_pfe_etudiant`
--

LOCK TABLES `emprunt_pfe_etudiant` WRITE;
/*!40000 ALTER TABLE `emprunt_pfe_etudiant` DISABLE KEYS */;
/*!40000 ALTER TABLE `emprunt_pfe_etudiant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emprunt_pfe_prof`
--

DROP TABLE IF EXISTS `emprunt_pfe_prof`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emprunt_pfe_prof` (
  `IDPP` int NOT NULL AUTO_INCREMENT,
  `ID_U` int NOT NULL,
  `IDPFE` int NOT NULL,
  `ID_PROF` int NOT NULL,
  `DATE_D` date DEFAULT NULL,
  `DATE_F` date DEFAULT NULL,
  `DATE_R` date DEFAULT NULL,
  `OBSERVATIONPP` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`IDPP`),
  KEY `FK_EMPRUNTER_PFE_PROF` (`IDPFE`),
  KEY `FK_EMPRUNTE_PFE_PROF` (`ID_PROF`),
  KEY `FK_SIGNER_PFE_PROF` (`ID_U`),
  CONSTRAINT `FK_EMPRUNT_PFE_PROF` FOREIGN KEY (`ID_U`) REFERENCES `utilisateur` (`ID_U`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_EMPRUNT_PFE_PROF2` FOREIGN KEY (`IDPFE`) REFERENCES `pfe` (`IDPFE`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_EMPRUNT_PFE_PROF3` FOREIGN KEY (`ID_PROF`) REFERENCES `prof` (`ID_PROF`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emprunt_pfe_prof`
--

LOCK TABLES `emprunt_pfe_prof` WRITE;
/*!40000 ALTER TABLE `emprunt_pfe_prof` DISABLE KEYS */;
/*!40000 ALTER TABLE `emprunt_pfe_prof` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `etudiant`
--

DROP TABLE IF EXISTS `etudiant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `etudiant` (
  `N_APOGEE` int NOT NULL,
  `NOM` char(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PRENOM` char(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `FILERE` char(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`N_APOGEE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etudiant`
--

LOCK TABLES `etudiant` WRITE;
/*!40000 ALTER TABLE `etudiant` DISABLE KEYS */;
INSERT INTO `etudiant` VALUES (2106092,'sabkari','abderrahmane','GI');
/*!40000 ALTER TABLE `etudiant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exemplaire`
--

DROP TABLE IF EXISTS `exemplaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exemplaire` (
  `N_INVENTAIRE` int NOT NULL AUTO_INCREMENT,
  `ID_LIVRE` int NOT NULL,
  `OBSERVATIONE` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`N_INVENTAIRE`),
  KEY `FK_AVOIR` (`ID_LIVRE`),
  CONSTRAINT `FK_AVOIR` FOREIGN KEY (`ID_LIVRE`) REFERENCES `livre` (`ID_LIVRE`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=22005 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exemplaire`
--

LOCK TABLES `exemplaire` WRITE;
/*!40000 ALTER TABLE `exemplaire` DISABLE KEYS */;
INSERT INTO `exemplaire` VALUES (22002,1,NULL),(22003,1,NULL),(22004,1,NULL);
/*!40000 ALTER TABLE `exemplaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fournisseur`
--

DROP TABLE IF EXISTS `fournisseur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fournisseur` (
  `ID_FOR` int NOT NULL AUTO_INCREMENT,
  `NOM` char(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PRENOM` char(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `GMAIL` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ADDRESSE` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TELEPHONE` int DEFAULT NULL,
  PRIMARY KEY (`ID_FOR`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fournisseur`
--

LOCK TABLES `fournisseur` WRITE;
/*!40000 ALTER TABLE `fournisseur` DISABLE KEYS */;
INSERT INTO `fournisseur` VALUES (1,'alami','mohamed','alamimohamed@gmail.com','mohamedmohamed',777524479),(2,'alami','mohamed','alamimohamed@gmail.com','mohamedmohamed',777524479);
/*!40000 ALTER TABLE `fournisseur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livre`
--

DROP TABLE IF EXISTS `livre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livre` (
  `ID_LIVRE` int NOT NULL AUTO_INCREMENT,
  `TITRE` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `AUTHEUR` char(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ID_CAT` int NOT NULL,
  `EDITEUR` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DATE_EDITION` date DEFAULT NULL,
  `CODE` int DEFAULT NULL,
  `OBSERVATIONL` text COLLATE utf8mb4_unicode_ci,
  `PAGE_DE_GARDE` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `SOMAIRE` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PRIX` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`ID_LIVRE`),
  KEY `FK_APPARTIENT` (`ID_CAT`),
  CONSTRAINT `FK_APPARTIENT` FOREIGN KEY (`ID_CAT`) REFERENCES `categorie` (`ID_CAT`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livre`
--

LOCK TABLES `livre` WRITE;
/*!40000 ALTER TABLE `livre` DISABLE KEYS */;
INSERT INTO `livre` VALUES (1,'la boite a merveille','ahmaed sefriwi',1,'dar takafa','2002-02-02',112356,'qwertyuiqoneovnc\\nuhqd9h2e89hd2iqhs9\\nuiehwdf9h2e0','/ESTS.jpg',NULL,51);
/*!40000 ALTER TABLE `livre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pfe`
--

DROP TABLE IF EXISTS `pfe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pfe` (
  `IDPFE` int NOT NULL AUTO_INCREMENT,
  `SUJET` text COLLATE utf8mb4_unicode_ci,
  `REALISATEUR` text COLLATE utf8mb4_unicode_ci,
  `ENCADRANT` char(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DATE_REALISATION` year DEFAULT NULL,
  PRIMARY KEY (`IDPFE`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pfe`
--

LOCK TABLES `pfe` WRITE;
/*!40000 ALTER TABLE `pfe` DISABLE KEYS */;
INSERT INTO `pfe` VALUES (1,'compilateur c online','abderrahmane sabkari\nabdessamad hnioua\nwissal talbi','jamal bakkas',2023),(2,'compilateur c online','abderrahmane sabkari\nabdessamad hnioua\nwissal talbi','jamal bakkas',2023);
/*!40000 ALTER TABLE `pfe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prof`
--

DROP TABLE IF EXISTS `prof`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prof` (
  `ID_PROF` int NOT NULL AUTO_INCREMENT,
  `NOM` char(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PRENOM` char(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DEPARTEMENT` char(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ID_PROF`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prof`
--

LOCK TABLES `prof` WRITE;
/*!40000 ALTER TABLE `prof` DISABLE KEYS */;
INSERT INTO `prof` VALUES (1,'salmi','mohamed','INFORMATIQUE');
/*!40000 ALTER TABLE `prof` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilisateur` (
  `ID_U` int NOT NULL AUTO_INCREMENT,
  `NOM` char(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PRENOM` char(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TELEPHONE` int DEFAULT NULL,
  `LOGIN` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PASSWORD` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ID_U`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur`
--

LOCK TABLES `utilisateur` WRITE;
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
INSERT INTO `utilisateur` VALUES (1,'sabkari','abderrahmane',777524479,'abderrahmanesabkari@gmail.com','sa12344321sa'),(2,'rakhela','zakaria',648175782,'rakhelazakaria@gmail.com','123456789'),(3,'sabkari','abderrahmane',777524479,'abderrahmanesabkari@gmail.com','sa12344321sa'),(4,'rakhela','zakaria',648175782,'rakhelazakaria@gmail.com','123456789');
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-08 22:41:14
