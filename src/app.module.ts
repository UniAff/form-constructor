import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeoModule } from './geo/geo.module';
import { OffersModule } from './offers/offers.module';
import { FormsModule } from './forms/forms.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [GeoModule, OffersModule, FormsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
