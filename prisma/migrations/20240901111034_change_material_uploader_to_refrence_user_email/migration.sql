-- DropForeignKey
ALTER TABLE `material` DROP FOREIGN KEY `Material_uploaderId_fkey`;

-- AddForeignKey
ALTER TABLE `Material` ADD CONSTRAINT `Material_uploaderId_fkey` FOREIGN KEY (`uploaderId`) REFERENCES `users`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
