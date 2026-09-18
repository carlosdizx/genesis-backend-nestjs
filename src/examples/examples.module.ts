import { Module } from '@nestjs/common';
import ExamplesService from './examples.service';
import ExamplesController from './examples.controller';

@Module({
  controllers: [ExamplesController],
  providers: [ExamplesService],
})
export default class ExamplesModule {}
