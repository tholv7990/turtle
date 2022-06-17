import { Account, AuthenticateRequest, AuthenticateResponse } from '@libs/model';
import { AuthenticationUtility } from '@libs/utils';
import { Injectable } from '@nestjs/common';
import { AccountReadRepository, AccountWriteRepository } from '../repositories';

@Injectable()
export class AuthenticateLogic {

    constructor(
        private accountWriteRep: AccountWriteRepository,
        private accountReadRep: AccountReadRepository
    ) { }

    public async login(request: AuthenticateRequest): Promise<AuthenticateResponse> {

        const account = await this.accountReadRep.getByEmail(request?.email);

        if (!account?._id) {

            return {
                success: false,
                token: null,
                message: 'Invalid Email'
            } as AuthenticateResponse;
        }

        if (account?.locked) {
            return {
                success: false,
                token: null,
                message: `Your account has been locked. Please contact admin to get the support!`
            } as AuthenticateResponse;
        }

        const passwordMatch = AuthenticationUtility.comparePassword(request?.password, account?.password);

        if (!passwordMatch) {

            const invalidLogins = typeof account?.invalidLogins !== 'number'
                ? 1
                : account?.invalidLogins + 1;

            const locked = invalidLogins >= 5;


            const updatedRequest = {
                locked: locked,
                invalidLogins: invalidLogins
            }


            const updated = await this.accountWriteRep.update(request.email, updatedRequest);

            if (updated?.locked) {
                return {
                    success: false,
                    token: null,
                    message: `Your account has been locked. Please contact admin to get the support!`
                } as AuthenticateResponse;
            }

            return {
                success: false,
                token: null,
                message: 'Invalid Password'
            } as AuthenticateResponse;
        }


        if (!account?.active) {
            return {
                success: false,
                token: null,
                message: 'Account is inactive'
            } as AuthenticateResponse;
        }


        const secret = 'fdddb2f6-b304-4e23-99b1-8a8ddb67b00f';

        const payload = {
            _id: account._id,
            name: account?.name,
            email: account.email,
        } as Partial<Account>;

        const token = AuthenticationUtility.jwtSign(secret, payload, 3600 * 24);

        const updatedRequest = {
            locked: false,
            invalidLogins: 0
        }


        await this.accountWriteRep.update(request.email, updatedRequest);

        return {
            success: true,
            token: token,
            message: ''
        } as AuthenticateResponse;
    }

}
