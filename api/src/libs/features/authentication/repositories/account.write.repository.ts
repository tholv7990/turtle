
import { SchemaTokens } from '@libs/common/constants';
import { Account } from '@libs/model';
import { AuthenticationUtility } from '@libs/utils';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import * as uuid from 'uuid';

@Injectable()
export class AccountWriteRepository {

    constructor(@Inject(SchemaTokens.Account) private document: Model<Account>) { }


    public async create(account: Account): Promise<Account> {

        account._id = uuid.v4();

        account.active = true;
        account.locked = false;

        account.password = AuthenticationUtility.hashPassword(account.password);

        const result = await this.document.create(account);

        return result;

    }

    public async update(email: string, request: Partial<Account>): Promise<Account> {


        const query = {
            email: email
        }

        const update = {
            $set: {
            }
        };

        const keys = Object.keys(request);
        keys.forEach(p => {
            update.$set[p] = request[p];
        });

        const updated = await this.document
            .findOneAndUpdate(query, update, { new: true })
            .lean()
            .exec() as Account;

        return updated;

    }


}
