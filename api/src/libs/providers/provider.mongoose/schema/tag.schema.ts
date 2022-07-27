import {  Tag, TagEntity } from '@libs/model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class TagDocument implements Tag {

    @Prop()
    _id: string;

    @Prop()
    name: string;

    @Prop()
    color: string;

    @Prop()
    entity: TagEntity;


}

export const TagSchema = SchemaFactory.createForClass(TagDocument);