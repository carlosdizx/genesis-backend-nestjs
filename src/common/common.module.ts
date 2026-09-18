import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import validateEnv from './config/env.config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),
  ],
  exports: [ConfigModule],
})
export default class CommonModule {}
