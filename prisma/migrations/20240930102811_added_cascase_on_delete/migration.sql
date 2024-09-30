-- DropForeignKey
ALTER TABLE "Form" DROP CONSTRAINT "Form_offerId_fkey";

-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_geoId_fkey";

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_geoId_fkey" FOREIGN KEY ("geoId") REFERENCES "Geo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
