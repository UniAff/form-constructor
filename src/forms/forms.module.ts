import { Module } from '@nestjs/common';
import { FormService } from './forms.service';
import { FormController } from './forms.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FormService],
  controllers: [FormController],
})
export class FormsModule {}
