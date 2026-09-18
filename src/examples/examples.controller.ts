import { Controller } from '@nestjs/common';
import ExamplesService from './examples.service';

@Controller()
export default class ExamplesController {
  constructor(private readonly examplesService: ExamplesService) {}
}
