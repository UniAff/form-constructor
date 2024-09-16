/*
  Warnings:

  - You are about to drop the column `currency` on the `Form` table. All the data in the column will be lost.
  - You are about to drop the column `discount` on the `Form` table. All the data in the column will be lost.
  - You are about to drop the column `photo` on the `Form` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Form` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Form" DROP CONSTRAINT "Form_geoId_fkey";

-- AlterTable
ALTER TABLE "Form" DROP COLUMN "currency",
DROP COLUMN "discount",
DROP COLUMN "photo",
DROP COLUMN "price",
ALTER COLUMN "geoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_geoId_fkey" FOREIGN KEY ("geoId") REFERENCES "Geo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
