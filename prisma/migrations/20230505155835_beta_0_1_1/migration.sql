/*
  Warnings:

  - The primary key for the `contient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_LIVRE` on the `contient` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `QTE` on the `contient` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `emprunt_livre_etudiant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `IDLE` on the `emprunt_livre_etudiant` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `N_INVENTAIRE` on the `emprunt_livre_etudiant` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `emprunt_livre_prof` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `IDLP` on the `emprunt_livre_prof` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `N_INVENTAIRE` on the `emprunt_livre_prof` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `emprunt_pfe_etudiant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `IDPE` on the `emprunt_pfe_etudiant` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `IDPFE` on the `emprunt_pfe_etudiant` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `emprunt_pfe_prof` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `IDPP` on the `emprunt_pfe_prof` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `IDPFE` on the `emprunt_pfe_prof` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `exemplaire` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `N_INVENTAIRE` on the `exemplaire` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ID_LIVRE` on the `exemplaire` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `TELEPHONE` on the `fournisseur` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `livre` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `ID_LIVRE` on the `livre` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `pfe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `IDPFE` on the `pfe` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `TELEPHONE` on the `utilisateur` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `contient` DROP FOREIGN KEY `FK_CONTIENT`;

-- DropForeignKey
ALTER TABLE `emprunt_livre_etudiant` DROP FOREIGN KEY `FK_EMPRUNT_LIVRE_ETUDIANT2`;

-- DropForeignKey
ALTER TABLE `emprunt_livre_prof` DROP FOREIGN KEY `FK_EMPRUNT_LIVRE_PROF3`;

-- DropForeignKey
ALTER TABLE `emprunt_pfe_etudiant` DROP FOREIGN KEY `FK_EMPRUNT_PFE_ETUDIANT2`;

-- DropForeignKey
ALTER TABLE `emprunt_pfe_prof` DROP FOREIGN KEY `FK_EMPRUNT_PFE_PROF2`;

-- DropForeignKey
ALTER TABLE `exemplaire` DROP FOREIGN KEY `FK_AVOIR`;

-- AlterTable
ALTER TABLE `contient` DROP PRIMARY KEY,
    MODIFY `ID_LIVRE` INTEGER NOT NULL,
    MODIFY `QTE` INTEGER NULL,
    ADD PRIMARY KEY (`ID_APRO`, `ID_LIVRE`);

-- AlterTable
ALTER TABLE `emprunt_livre_etudiant` DROP PRIMARY KEY,
    MODIFY `IDLE` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `N_INVENTAIRE` INTEGER NOT NULL,
    ADD PRIMARY KEY (`IDLE`);

-- AlterTable
ALTER TABLE `emprunt_livre_prof` DROP PRIMARY KEY,
    MODIFY `IDLP` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `N_INVENTAIRE` INTEGER NOT NULL,
    ADD PRIMARY KEY (`IDLP`);

-- AlterTable
ALTER TABLE `emprunt_pfe_etudiant` DROP PRIMARY KEY,
    MODIFY `IDPE` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `IDPFE` INTEGER NOT NULL,
    ADD PRIMARY KEY (`IDPE`);

-- AlterTable
ALTER TABLE `emprunt_pfe_prof` DROP PRIMARY KEY,
    MODIFY `IDPP` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `IDPFE` INTEGER NOT NULL,
    ADD PRIMARY KEY (`IDPP`);

-- AlterTable
ALTER TABLE `exemplaire` DROP PRIMARY KEY,
    MODIFY `N_INVENTAIRE` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `ID_LIVRE` INTEGER NOT NULL,
    ADD PRIMARY KEY (`N_INVENTAIRE`);

-- AlterTable
ALTER TABLE `fournisseur` MODIFY `TELEPHONE` INTEGER NULL;

-- AlterTable
ALTER TABLE `livre` DROP PRIMARY KEY,
    MODIFY `ID_LIVRE` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`ID_LIVRE`);

-- AlterTable
ALTER TABLE `pfe` DROP PRIMARY KEY,
    MODIFY `IDPFE` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`IDPFE`);

-- AlterTable
ALTER TABLE `utilisateur` MODIFY `TELEPHONE` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `contient` ADD CONSTRAINT `FK_CONTIENT` FOREIGN KEY (`ID_LIVRE`) REFERENCES `livre`(`ID_LIVRE`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `emprunt_livre_etudiant` ADD CONSTRAINT `FK_EMPRUNT_LIVRE_ETUDIANT2` FOREIGN KEY (`N_INVENTAIRE`) REFERENCES `exemplaire`(`N_INVENTAIRE`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `emprunt_livre_prof` ADD CONSTRAINT `FK_EMPRUNT_LIVRE_PROF3` FOREIGN KEY (`N_INVENTAIRE`) REFERENCES `exemplaire`(`N_INVENTAIRE`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `emprunt_pfe_etudiant` ADD CONSTRAINT `FK_EMPRUNT_PFE_ETUDIANT2` FOREIGN KEY (`IDPFE`) REFERENCES `pfe`(`IDPFE`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `emprunt_pfe_prof` ADD CONSTRAINT `FK_EMPRUNT_PFE_PROF2` FOREIGN KEY (`IDPFE`) REFERENCES `pfe`(`IDPFE`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `exemplaire` ADD CONSTRAINT `FK_AVOIR` FOREIGN KEY (`ID_LIVRE`) REFERENCES `livre`(`ID_LIVRE`) ON DELETE RESTRICT ON UPDATE RESTRICT;
