import { Entity } from '@libs/model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class EntityDocument implements Entity {

    @Prop()
    _id: string;

    @Prop()
    name: string;


}

export const EntitySchema = SchemaFactory.createForClass(EntityDocument);