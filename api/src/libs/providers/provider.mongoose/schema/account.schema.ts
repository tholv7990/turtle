
import { Account } from '@libs/model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AccountDocument implements Account {

    @Prop()
    active?: boolean;

    @Prop()
    locked?: boolean;

    @Prop()
    invalidLogins: number;

    @Prop()
    _id: string;

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    firstName?: string;

    @Prop()
    lastName?: string;

    @Prop()
    mobile?: string;

    @Prop()
    password: string;

    @Prop()
    system?: boolean;

}

export const AccountSchema = SchemaFactory.createForClass(AccountDocument);