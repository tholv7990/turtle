import { ApplicationEnvironment } from "@libs/model";
import { MongoConfiguration } from "@libs/providers";
import { Configuration } from "./configuration";


export abstract class BaseConfiguration implements Configuration {

    readonly build: string;
    readonly domain: string;
    readonly environment: ApplicationEnvironment;

    readonly database:
        {
            mongo: MongoConfiguration;
          //  azure: AzureStorageConfiguration;
        };

    readonly queue: {
        prefix: string;
    };

    readonly redis: {
        host: string
    };

  

    readonly cors: {
        orgin?: string | string[];
    };


    constructor(
        environment: ApplicationEnvironment
        ) {

        this.build = `${process.env.BUILD_DATE}-${process.env.BUILD_VERSION}`;
        this.environment = environment;
     

        const databaseName = 'turtle-dev';
        const databaseServer = process.env.DATABASE_SERVER ? process.env.DATABASE_SERVER : 'mongodb://jms-mongo-1:27016';
        const poolSize = isNaN(parseInt(process.env.DATABASE_POOL_SIZE, 10))
            ? 10
            : parseInt(process.env.DATABASE_POOL_SIZE, 10);

        this.database = {
            mongo: {
                dbName: databaseName,
                connectionString: `${databaseServer}/${databaseName}`,
                poolSize: poolSize
            },
            // azure: {
            //     account: 'jmsfiles',
            //     key: 'tgdr7hoZujiFxB0sECAl/dDvjdGHrKQLs0OZGG5oF1lCWtLF0o21Sdu7TOcB/3Tbx4oF38PQXLXhk2Z+U0/hZQ==',
            //     container: this.environment
            // }
        };

     

    }
}

