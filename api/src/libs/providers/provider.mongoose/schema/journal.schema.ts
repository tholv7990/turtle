
import {  Attachment, Entity, Journal, TradingSide, TradingStatus } from '@libs/model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DateTime } from 'luxon';

@Schema()
export class JournalDocument implements Journal {
   

    @Prop()
    _id: string;

    @Prop()
    active?: boolean;

    @Prop()
    name: string;

    @Prop()
    account: string;

    @Prop()
    strategy: string;

    @Prop()
    status: TradingStatus;

    @Prop()
    side: TradingSide;

    @Prop()
    symbol: string;

    @Prop()
    entry: number;

    @Prop()
    exist: number;

    @Prop()
    target: number;

    @Prop()
    open: DateTime;

    @Prop()
    close: DateTime;

    @Prop()
    profit: number;

    @Prop()
    size: number;

    @Prop()
    amount: number;

    @Prop()
    cost: number;

    @Prop()
    note: string;

    @Prop()
    multipleR: number;

    @Prop()
    commission: number;

    @Prop()
    before: Attachment[];

    @Prop()
    during: Attachment[];

    @Prop()
    after: Attachment[];

    @Prop()
    system?: boolean;
}

export const JournalSchema = SchemaFactory.createForClass(JournalDocument);