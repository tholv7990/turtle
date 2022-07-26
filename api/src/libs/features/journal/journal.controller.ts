import { Journal } from '@libs/model';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JournalWriteRepository } from './repositories';

@ApiTags('journal')
@Controller()
export class JournalController {

    constructor(
        private journalWriteRepository: JournalWriteRepository
    ){ }


    @Post()
    public async login(@Body() request: Journal): Promise<Journal> {

        const result = await this.journalWriteRepository.save(request);
        return result;
    }

}
