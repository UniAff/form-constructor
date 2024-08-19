import { Module } from '@nestjs/common';
import { OfferController } from './offers.controller';
import { OfferService } from './offers.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OfferController],
  providers: [OfferService],
})
export class OffersModule {}
