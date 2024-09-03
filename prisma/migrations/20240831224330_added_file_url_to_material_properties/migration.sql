/*
  Warnings:

  - Added the required column `file_url` to the `Material` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `material` ADD COLUMN `file_url` VARCHAR(191) NOT NULL;
