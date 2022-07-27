
import { SchemaTokens } from '@libs/common/constants';
import {  Tag } from '@libs/model';
import { MongoEntityWriteRepository } from '@libs/providers';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class TagWriteRepository extends MongoEntityWriteRepository<Tag> {

    constructor(
        @Inject(SchemaTokens.Tag) document: Model<Tag>
    ) {
        super(document);
    }

    public override save(item: Tag): Promise<Tag> {

        return super.save(item);

    }

}