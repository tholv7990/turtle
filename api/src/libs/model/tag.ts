import { Entity } from "./entity";

export enum TagEntity {
    TimeFrame = 'TimeFrame',
    Trend = 'Trend',
    Other = 'Other'
}

export interface Tag extends Entity {
    entity: TagEntity;
}