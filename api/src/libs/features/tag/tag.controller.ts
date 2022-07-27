import {  Tag } from '@libs/model';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TagReadRepository, TagWriteRepository } from './repositories';

@ApiTags('journal')
@Controller()
export class TagController {

    constructor(
        private tagWriteRepository: TagWriteRepository,
        private tagReadRepository: TagReadRepository
    ){ }

    @Get()
    public async getAll(): Promise<Tag[]> {

        const result = await this.tagReadRepository.getAll();
        return result;
    }

    @Post()
    public async save(@Body() request: Tag): Promise<Tag> {

        const result = await this.tagWriteRepository.save(request);
        return result;
    }

}
