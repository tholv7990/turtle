import { Module } from '@nestjs/common';
import { JournalController } from './journal.controller';
import { JournalReadRepository, JournalWriteRepository } from './repositories';

@Module({
  controllers: [JournalController],
  providers: [
    JournalWriteRepository,
    JournalReadRepository
  ]
})
export class JournalModule {
    
}
