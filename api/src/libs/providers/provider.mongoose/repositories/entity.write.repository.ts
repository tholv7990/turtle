
import { Entity, ItemDeletedResponse } from '@libs/model';
import { Logger } from '@nestjs/common';
import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';
import { WriteRepository } from '../repository.interface';
import { MongoUtility } from '../utilities';

export type StringIdDocument<T extends Entity> = T & Document<string>;

export class MongoEntityWriteRepository<T extends Entity> implements WriteRepository<T> {

    constructor(
        protected document: Model<T>,
        protected softDelete = true,
        protected logger: Logger = null
    ) { }


    public async save(item: Partial<T>, session?: any): Promise<T> {

        try {

            const update = {
                $set: item
            } as any;

            const options = {
                new: true,
                upsert: false
            };

            if (!item._id) {
                item._id = null;
                MongoUtility.fixId(item);
                item['active'] = true;
                options.upsert = true;
            }

            const entity = await this
                .document
                .findByIdAndUpdate(item._id, update, options)
                .session(session)
                .lean()
                .exec();

            return entity as any;

        } catch (error) {
            if (this.logger) {
               
            } else {
                console.error(error);
            }
        }

        return null;


    }

    public async delete(id: string, session?: any): Promise<ItemDeletedResponse> {

        try {

            if (!this.softDelete) {

                const item = await this
                    .document
                    .findByIdAndDelete(id)
                    .session(session)
                    .lean()
                    .exec();

                return { success: true, _id: id } as ItemDeletedResponse;

            }

            const query = {
                _id: id
            } as FilterQuery<any>;

            const update = {
                $set: {
                    active: false
                }
            } as any;

            const options = {
                new: true
            };

            const item = await this
                .document
                .findOneAndUpdate(query, update, options)
                .session(session)
                .lean()
                .exec();

            return { success: true, _id: id } as ItemDeletedResponse;

        } catch (error) {
            if (this.logger) {
                
            } else {
                console.error(error);
            }

            return { success: false, _id: id, error } as ItemDeletedResponse;
        }


    }

    public async patch(id: string, item: Partial<T>, session?: any): Promise<T> {

        const query = {
            _id: id
        };

        const update = this.buildSafePatch(item) as UpdateQuery<T>;

        const options = {
            new: true
        };

        try {

            const patched = await this.document
                .findByIdAndUpdate(query, update, options)
                .session(session)
                .lean()
                .exec() as Document<string>;

            return patched as any;

        } catch (error) {
            if (this.logger) {
                
            } else {
                console.error(error);
            }
        }

        return null;
    }

    public async drop(): Promise<ItemDeletedResponse> {

        try {
            await this.document.collection.drop();
            return { success: true, _id: 'drop' };

        } catch (error) {
            if (this.logger) {
                
            } else {
                console.error(error);
            }

            return { success: false, _id: this?.document?.modelName };
        }
    }

    protected buildSafePatch(item: Partial<T>): any {

        const update = {
            $set: {}
        };

        const keys = Object.keys(item);
        keys
            .filter(key => key != '_id')
            .forEach(key => {
                update.$set[key] = item[key];
            });

        return update;
    }
}