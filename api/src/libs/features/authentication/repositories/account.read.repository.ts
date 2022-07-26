
import { SchemaTokens } from '@libs/common/constants';
import { Account } from '@libs/model';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class AccountReadRepository {

    constructor(@Inject(SchemaTokens.Account) private document: Model<Account>) { }


    public async getByEmail(email: string): Promise<Account> {

        const query = {
            email: email
        }

        const account = await this.document
            .findOne(query)
            .lean()
            .exec();

        return account;

    }

    public async checkExists(email: string): Promise<boolean> {

        const account = await this.getByEmail(email);

        if (account?._id)
            return true;

        return false;
    }

}
