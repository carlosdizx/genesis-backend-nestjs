import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import CommonModule from './common/common.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    CommonModule,
    ObserveModule.forRoot({
      appKey: '!pkb&X4KzLQEEcBv',
      appSecret: 'OdpiGVfT2$EZx1&DLJ8vaAdKCOgp4g9aYrLZKezhSKSkz',
      serviceId: 'challeng-v12',
    }),
  ],
})
export default class AppModule {}
