import { Module } from '@nestjs/common';
import { JournalController } from './journal.controller';
import { JournalWriteRepository } from './repositories';

@Module({
  controllers: [JournalController],
  providers: [
    JournalWriteRepository
  ]
})
export class JournalModule {
    
}
