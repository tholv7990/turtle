import { FilterQuery, Model } from 'mongoose';
import * as Enumerable from 'linq';
import { Entity } from '@libs/model';
import { ReadRepository } from '../repository.interface';

export class MongoEntityReadRepository<T extends Entity> implements ReadRepository<T> {

    constructor(
        protected document: Model<T>,
    ) { }


    public async getById(id: string): Promise<T> {
        if (!id) return null;

        const item = await this.document
            .findById(id)
            .lean()
            .exec();
        return item as T;
    }

    public async get(match: FilterQuery<T>): Promise<T[]> {
        const items = await this.document
            .find(match)
            .lean()
            .exec();
        return items as T[];
    }

    public async getOne(match: FilterQuery<T>): Promise<T> {
        const items = await this.document
            .findOne(match)
            .lean()
            .exec();
        return items as T;
    }

    public async getAll(): Promise<T[]> {
        const items = await this.document
            .find({})
            .lean()
            .exec();
        return items as T[];
    }

    public async getAggregation(pipeline: any[]): Promise<any[]> {
        const items = await this.document
            .aggregate(pipeline)
            .exec();
        return items as T[];
    }

    public async getAggregationSingle(pipeline: any[]): Promise<any> {
        const items = await this.getAggregation(pipeline);
        return null;
    }
}