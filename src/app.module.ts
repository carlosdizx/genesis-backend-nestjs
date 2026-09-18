import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: '!pkb&X4KzLQEEcBv',
      appSecret: 'OdpiGVfT2$EZx1&DLJ8vaAdKCOgp4g9aYrLZKezhSKSkz',
      serviceId: 'challeng-v12',
    }),
  ],
})
export default class AppModule {}
