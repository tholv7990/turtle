import { Attachment, AttachmentType, Entity } from '@libs/model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class AttachmentDocument implements Attachment {

    @Prop()
    type: AttachmentType;

    @Prop()
    path: string;

    @Prop()
    size: number;

    @Prop()
    system?: boolean;

    @Prop()
    _id: string;

    @Prop()
    name: string;


}

export const AttachmentSchema = SchemaFactory.createForClass(AttachmentDocument);