import { NestFactory } from '@nestjs/core';
import AppModule, { ObserveInstrument } from './app.module';
import { Logger } from '@nestjs/common';
import Env from './common/schemas/env.schema';
import { ConfigService } from '@nestjs/config';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
    bufferLogs: true,
  });

  const configService = app.get(ConfigService<Env, true>);

  app.useLogger(configService.get('LOG_LEVELS', { infer: true }));

  const logger = new Logger('App Bootstrap');

  logger.verbose('Starting App 🟡');

  const port = configService.get('PORT', { infer: true });

  await app.listen(port);
  logger.verbose(`Started App on port ${port} 🟢`);
};

bootstrap().catch((error: unknown) => {
  console.error('Failed to start App 🔴', error);
  process.exit(1);
});
