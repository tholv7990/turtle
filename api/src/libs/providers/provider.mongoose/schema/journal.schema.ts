
import {  Attachment, Entity, Journal, TradingSide, TradingStatus } from '@libs/model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DateTime } from 'luxon';
import { SchemaTypes } from 'mongoose';
import { AttachmentSchema } from './attachment.schema';
import { EntitySchema } from './entity.schema';

@Schema()
export class JournalDocument implements Journal {
   

    @Prop()
    _id: string;

    @Prop()
    active?: boolean;

    @Prop()
    name: string;

    @Prop({ type: EntitySchema })
    account: Entity;

    @Prop({ type: EntitySchema })
    strategy: Entity;

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

    @Prop({type: AttachmentSchema})
    before: Attachment[];

    @Prop({type: AttachmentSchema})
    during: Attachment[];

    @Prop({type: AttachmentSchema})
    after: Attachment[];

    @Prop()
    system?: boolean;
}

export const JournalSchema = SchemaFactory.createForClass(JournalDocument);