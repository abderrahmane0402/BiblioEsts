/*
  Warnings:

  - You are about to drop the column `ID_PROF` on the `emprunt_livre_prof` table. All the data in the column will be lost.
  - You are about to drop the column `IDPFE` on the `emprunt_pfe_etudiant` table. All the data in the column will be lost.
  - You are about to drop the column `IDPFE` on the `emprunt_pfe_prof` table. All the data in the column will be lost.
  - You are about to drop the column `ID_PROF` on the `emprunt_pfe_prof` table. All the data in the column will be lost.
  - The primary key for the `pfe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `IDPFE` on the `pfe` table. All the data in the column will be lost.
  - The primary key for the `prof` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_PROF` on the `prof` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[N_inscription]` on the table `etudiant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Code` to the `emprunt_livre_prof` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Cote` to the `emprunt_pfe_etudiant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Code` to the `emprunt_pfe_prof` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Cote` to the `emprunt_pfe_prof` table without a default value. This is not possible if the table is not empty.
  - Added the required column `N_inscription` to the `etudiant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Cote` to the `pfe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Code` to the `prof` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `emprunt_livre_prof` DROP FOREIGN KEY `FK_EMPRUNT_LIVRE_PROF2`;

-- DropForeignKey
ALTER TABLE `emprunt_pfe_etudiant` DROP FOREIGN KEY `FK_EMPRUNT_PFE_ETUDIANT2`;

-- DropForeignKey
ALTER TABLE `emprunt_pfe_prof` DROP FOREIGN KEY `FK_EMPRUNT_PFE_PROF2`;

-- DropForeignKey
ALTER TABLE `emprunt_pfe_prof` DROP FOREIGN KEY `FK_EMPRUNT_PFE_PROF3`;

-- DropForeignKey
ALTER TABLE `exemplaire` DROP FOREIGN KEY `FK_AVOIR`;

-- AlterTable
ALTER TABLE `emprunt_livre_prof` DROP COLUMN `ID_PROF`,
    ADD COLUMN `Code` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `emprunt_pfe_etudiant` DROP COLUMN `IDPFE`,
    ADD COLUMN `Cote` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `emprunt_pfe_prof` DROP COLUMN `IDPFE`,
    DROP COLUMN `ID_PROF`,
    ADD COLUMN `Code` VARCHAR(191) NOT NULL,
    ADD COLUMN `Cote` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `etudiant` ADD COLUMN `N_inscription` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `pfe` DROP PRIMARY KEY,
    DROP COLUMN `IDPFE`,
    ADD COLUMN `Cote` VARCHAR(191) NOT NULL,
    ADD COLUMN `Filiere` CHAR(100) NULL,
    ADD PRIMARY KEY (`Cote`);

-- AlterTable
ALTER TABLE `prof` DROP PRIMARY KEY,
    DROP COLUMN `ID_PROF`,
    ADD COLUMN `Code` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`Code`);

-- CreateIndex
CREATE INDEX `FK_EMPRUNTE_LIVRE_PROF` ON `emprunt_livre_prof`(`Code`);

-- CreateIndex
CREATE INDEX `FK_EMPRUNTER_PFE_ETUDIANT` ON `emprunt_pfe_etudiant`(`Cote`);

-- CreateIndex
CREATE INDEX `FK_EMPRUNTER_PFE_PROF` ON `emprunt_pfe_prof`(`Cote`);

-- CreateIndex
CREATE INDEX `FK_EMPRUNTE_PFE_PROF` ON `emprunt_pfe_prof`(`Code`);

-- CreateIndex
CREATE UNIQUE INDEX `etudiant_N_inscription_key` ON `etudiant`(`N_inscription`);

-- AddForeignKey
ALTER TABLE `emprunt_livre_prof` ADD CONSTRAINT `FK_EMPRUNT_LIVRE_PROF2` FOREIGN KEY (`Code`) REFERENCES `prof`(`Code`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `emprunt_pfe_etudiant` ADD CONSTRAINT `FK_EMPRUNT_PFE_ETUDIANT2` FOREIGN KEY (`Cote`) REFERENCES `pfe`(`Cote`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `emprunt_pfe_prof` ADD CONSTRAINT `FK_EMPRUNT_PFE_PROF2` FOREIGN KEY (`Cote`) REFERENCES `pfe`(`Cote`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `emprunt_pfe_prof` ADD CONSTRAINT `FK_EMPRUNT_PFE_PROF3` FOREIGN KEY (`Code`) REFERENCES `prof`(`Code`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `exemplaire` ADD CONSTRAINT `FK_AVOIR` FOREIGN KEY (`ID_LIVRE`) REFERENCES `livre`(`ID_LIVRE`) ON DELETE CASCADE ON UPDATE CASCADE;
