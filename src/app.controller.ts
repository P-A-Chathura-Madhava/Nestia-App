import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TypedRoute } from '@nestia/core';
import { tags } from 'typia';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @TypedRoute.Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
