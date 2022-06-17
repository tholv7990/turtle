import { Account, AuthenticateRequest, AuthenticateResponse } from '@libs/model';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticateLogic } from './logic';
import { AccountReadRepository, AccountWriteRepository } from './repositories';


@ApiTags('authentication')
@Controller()
export class AuthenticationController {

    constructor(private accountWriteRep: AccountWriteRepository,
        private accountReadRep: AccountReadRepository,
        private authenticateLogic: AuthenticateLogic) { }

    @Get(':email')
    public async checkExists(@Param('email') email: string): Promise<boolean> {

        const result = await this.accountReadRep.checkExists(email);
        return result;
    }

    @Post('login')
    public async login(@Body() request: AuthenticateRequest): Promise<AuthenticateResponse> {

        const result = await this.authenticateLogic.login(request);
        return result;
    }

    @Post('register')
    public async register(@Body() request: Account): Promise<Account> {

        const account = await this.accountWriteRep.create(request);

        return account;
    }

}
