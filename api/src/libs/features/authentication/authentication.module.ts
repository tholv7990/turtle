import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticateLogic } from './logic';
import { AccountReadRepository, AccountWriteRepository } from './repositories';

@Module({
  imports: [ ],
  controllers: [AuthenticationController],
  providers: [
    AccountWriteRepository,
    AccountReadRepository,
    AuthenticateLogic
  ]
})
export class AuthenticationModule {}
