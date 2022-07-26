import { SchemaTokens, Tokens } from '@libs/common/constants';
import { DynamicModule, Module } from '@nestjs/common';
import { databaseProviders } from './provider';
import { Connection } from 'mongoose';
import { AccountSchema } from './schema';
import { ConfigModule } from '@nestjs/config';
import { JournalSchema } from './schema/journal.schema';
@Module({})
export class DatabaseModule {

  public static forApp(): DynamicModule {

    const schemas = [
      { schema: AccountSchema, name: 'account', token: SchemaTokens.Account },
      { schema: JournalSchema, name: 'journal', token: SchemaTokens.Journal },
    ];

    return DatabaseModule.createProviders(schemas);

  }


  public static createProviders(schemas: { schema: any, name: string, token: string, collectionName?: string }[]) {

    const schemaProviders = this.createSchemaProviders(schemas);

    return {
      module: DatabaseModule,
      global: true,
      imports: [ConfigModule],
      providers: [
        ...databaseProviders,
        ...schemaProviders,
      ],
      exports: [
        ...databaseProviders,
        ...schemaProviders,
      ]
    };
  }

  private static createSchemaProviders(definitons: { schema: any, name: string, token: string, collectionName?: string }[]): any[] {

    const providers = [];

    for (const def of definitons) {

      providers.push({
        provide: def.token,
        useFactory: (connection: Connection) => {
          return connection.model(def.name, def.schema, def.collectionName);
        },
        inject: [Tokens.DbConnectionToken]
      })
    }

    return providers;


  }

}