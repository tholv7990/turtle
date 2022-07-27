import { Module } from '@nestjs/common';
import { TagReadRepository, TagWriteRepository } from './repositories';
import { TagController } from './tag.controller';

@Module({
  controllers: [
    TagController
  ],
  providers: [
    TagWriteRepository,
    TagReadRepository
  ]
})
export class TagModule {

}
