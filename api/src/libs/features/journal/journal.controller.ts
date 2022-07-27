import { Journal } from '@libs/model';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JournalReadRepository, JournalWriteRepository } from './repositories';

@ApiTags('journal')
@Controller()
export class JournalController {

    constructor(
        private journalWriteRepository: JournalWriteRepository,
        private journalReadRepository: JournalReadRepository
    ){ }

    @Get()
    public async getAll(): Promise<Journal[]> {

        const result = await this.journalReadRepository.getAll();
        return result;
    }

    @Post()
    public async save(@Body() request: Journal): Promise<Journal> {

        const result = await this.journalWriteRepository.save(request);
        return result;
    }

}
