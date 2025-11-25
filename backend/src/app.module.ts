import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PrismaModule,
    TasksModule,
    ConfigModule.forRoot({
      isGlobal: true, // ConfigModule global
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
