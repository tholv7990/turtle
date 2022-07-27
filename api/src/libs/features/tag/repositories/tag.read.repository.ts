
import { SchemaTokens } from '@libs/common/constants';
import { Journal, Tag } from '@libs/model';
import { MongoEntityReadRepository } from '@libs/providers';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class TagReadRepository extends MongoEntityReadRepository<Tag> {

    constructor(
        @Inject(SchemaTokens.Tag) document: Model<Tag>
    ) {
        super(document);
    }

    public override getAll(): Promise<Tag[]> {

        return super.getAll();

    }

}