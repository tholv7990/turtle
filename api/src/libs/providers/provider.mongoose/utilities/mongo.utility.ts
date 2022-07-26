import * as uuid from 'uuid';

export class MongoUtility {

    static fixId(obj: any) {

        for (const property in obj) {
            if (property === '_id' && !obj[property])
                obj[property] = uuid.v4();
            else if (typeof obj[property] === 'object') {
                this.fixId(obj[property]);
            }
        }
    }
}
