
import { Entity, ItemDeletedResponse } from '@libs/model';
import { FilterQuery } from 'mongoose';

export interface Repository<T> {
    getAll?(filter?: string): Promise<any[]>;
    getByName(name?: string): Promise<T>;
    getById(id: any): Promise<T>;
    save(owner: Entity, item: T): Promise<T>;
    delete(owner: Entity, id: any): Promise<ItemDeletedResponse>
    createNew(data: T): Promise<T>;
    createNew(data: T[]): Promise<T[]>;
    count(): Promise<number>;
    drop(): Promise<any>;
}

export interface WriteRepository<T> {
    save(item: Partial<T>, session?: any): Promise<T>;
    patch(id: string, item: Partial<T>, session?: any): Promise<T>
    delete(id: any, session?: any): Promise<ItemDeletedResponse>;
    drop(): Promise<ItemDeletedResponse>;
}

export interface ReadRepository<T extends Entity> {
    getById(id: string): Promise<T>;
    getAll(): Promise<T[]>;
    get(match: FilterQuery<T>): Promise<T[]>;
    getOne(match: FilterQuery<T>): Promise<T>;
    getAggregation(pipeline: any[]): Promise<any[]>;
    getAggregationSingle(pipeline: any[]): Promise<any>;
}

export interface IReadRepositoryFactory {
    getRepository<T extends Entity>(schemaToken: string): ReadRepository<T>;
}
