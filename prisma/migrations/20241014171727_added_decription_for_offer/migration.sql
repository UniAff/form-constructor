/*
  Warnings:

  - Added the required column `buttonDescription` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Offer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Offer" ADD COLUMN     "buttonDescription" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;
