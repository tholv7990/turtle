import { MongoConfiguration } from "@libs/providers";

export interface Configuration {
    build?: string;
    environment?: string;
    domain: string;
    database: {
        mongo: MongoConfiguration,
       // azure?: AzureStorageConfiguration
    };
    cors?: {
        orgin?: string | string[];
    };
   
}
