
import { Module } from '@nestjs/common';
import { MeuModuloCronService } from './cron.service';
import { MeuModuloConfigController } from './controller';
import { CronModule } from '@core/cron/cron.module';
import { PrismaModule } from '@core/prisma/prisma.module';

@Module({
    imports: [CronModule, PrismaModule],
    providers: [MeuModuloCronService],
    controllers: [MeuModuloConfigController],
})
export class MeuModuloModule { }
