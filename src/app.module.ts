import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { ConfigService } from '@nestjs/config';
import ExamplesModule from './examples/examples.module';
import CommonModule from './common/common.module';
import Env from './common/schemas/env.schema';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    CommonModule,
    ObserveModule.forRootAsync({
      imports: [CommonModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<Env, true>) => ({
        appKey: configService.get('OBSERVE_APP_KEY', { infer: true }),
        appSecret: configService.get('OBSERVE_APP_SECRET', { infer: true }),
        serviceId: configService.get('OBSERVE_SERVICE_ID', { infer: true }),
      }),
    }),
    ExamplesModule,
  ],
})
export default class AppModule {}
