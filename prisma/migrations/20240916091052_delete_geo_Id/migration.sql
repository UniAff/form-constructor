/*
  Warnings:

  - You are about to drop the column `geoId` on the `Form` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Form" DROP CONSTRAINT "Form_geoId_fkey";

-- AlterTable
ALTER TABLE "Form" DROP COLUMN "geoId";
