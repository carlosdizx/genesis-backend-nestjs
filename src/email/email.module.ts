import { Module } from '@nestjs/common';
import EmailService from './email.service';

@Module({
  providers: [EmailService],
})
export default class EmailModule {}
