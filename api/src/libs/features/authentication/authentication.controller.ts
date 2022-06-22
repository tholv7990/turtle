import { Account, AuthenticateRequest, AuthenticateResponse } from '@libs/model';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticateLogic } from './logic';
import { AccountReadRepository, AccountWriteRepository } from './repositories';
import * as AWS from "aws-sdk";


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

    @Post()
    public async save(@Body() file: any): Promise<any> {


        const s3 = new AWS.S3
            ({
                secretAccessKey: 'wGwhx7LKjujpWDHCYuvWjgoShOnKAWKFt+uxSMyK',
                accessKeyId: 'AKIATUG34ZRIIHKDCOEZ',
                region: 'ap-southeast-1'
            });

        const params =
        {
            Bucket: 'turtle-trading',
            Key: file?.name,
            Body: file,
            ACL: "public-read",
            ContentType: file?.type,
            ContentDisposition: "inline",
            CreateBucketConfiguration:
            {
                LocationConstraint: "ap-southeast-1"
            }
        };

        console.log(params);

        try
        {
            let s3Response = await s3.upload(params).promise();

            console.log(s3Response);
        }
        catch (e)
        {
            console.log(e);
        }

    }

}
