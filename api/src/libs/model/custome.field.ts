import { Entity } from "./entity";

export enum CustomFieldType {
    Email = 'em',
    Phone = 'ph',
    Text = 'txt',
    Note = 'nt',
    Number = 'num',
    Date = 'd',
    DateTime = 'dt',
    Dropdown = 'dd',
    DropdownMulti = 'ddm',
    Boolean = 'bool',
    Address = 'add',
    None = 'None'
}

export interface CustomField extends Entity {
    type: CustomFieldType;
    options: any;

    createdAt?: Date;
    updatedAt?: Date;
}
