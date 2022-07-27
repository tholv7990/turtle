
import { SchemaTokens } from '@libs/common/constants';
import { Journal } from '@libs/model';
import { MongoEntityReadRepository } from '@libs/providers';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class JournalReadRepository extends MongoEntityReadRepository<Journal> {

    constructor(
        @Inject(SchemaTokens.Journal) document: Model<Journal>
    ) {
        super(document);
    }

    public override getAll(): Promise<Journal[]> {

        return super.getAll();

    }

}