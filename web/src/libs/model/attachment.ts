import { Entity } from "./entity";

export enum AttachmentType {
    Image = 'Image',
    File = 'File'
}

export interface Attachment extends Entity {
    type: AttachmentType;
    path: string;
    size: number;
}
