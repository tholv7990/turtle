
import { SchemaTokens } from '@libs/common/constants';
import { Journal } from '@libs/model';
import { MongoEntityWriteRepository } from '@libs/providers';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class JournalWriteRepository extends MongoEntityWriteRepository<Journal> {

    constructor(
        @Inject(SchemaTokens.Journal) document: Model<Journal>
    ) {
        super(document);
    }

    public override save(item: Journal): Promise<Journal> {

        return super.save(item);

    }

}