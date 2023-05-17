/*
  Warnings:

  - You are about to drop the column `N_APOGEE` on the `emprunt_livre_etudiant` table. All the data in the column will be lost.
  - You are about to drop the column `N_APOGEE` on the `emprunt_pfe_etudiant` table. All the data in the column will be lost.
  - Added the required column `N_inscription` to the `emprunt_livre_etudiant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `N_inscription` to the `emprunt_pfe_etudiant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `emprunt_livre_etudiant` DROP FOREIGN KEY `FK_EMPRUNT_LIVRE_ETUDIANT3`;

-- DropForeignKey
ALTER TABLE `emprunt_pfe_etudiant` DROP FOREIGN KEY `FK_EMPRUNT_PFE_ETUDIANT3`;

-- AlterTable
ALTER TABLE `emprunt_livre_etudiant` DROP COLUMN `N_APOGEE`,
    ADD COLUMN `N_inscription` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `emprunt_pfe_etudiant` DROP COLUMN `N_APOGEE`,
    ADD COLUMN `N_inscription` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `FK_EMPRUNTE_LIVRE_ETUDIANT` ON `emprunt_livre_etudiant`(`N_inscription`);

-- CreateIndex
CREATE INDEX `FK_EMPRUNTE_PFE_ETUDIANT` ON `emprunt_pfe_etudiant`(`N_inscription`);

-- AddForeignKey
ALTER TABLE `emprunt_livre_etudiant` ADD CONSTRAINT `FK_EMPRUNT_LIVRE_ETUDIANT3` FOREIGN KEY (`N_inscription`) REFERENCES `etudiant`(`N_inscription`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `emprunt_pfe_etudiant` ADD CONSTRAINT `FK_EMPRUNT_PFE_ETUDIANT3` FOREIGN KEY (`N_inscription`) REFERENCES `etudiant`(`N_inscription`) ON DELETE RESTRICT ON UPDATE RESTRICT;
