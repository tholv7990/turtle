import { Tokens } from '@libs/common/constants';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    imports: [ConfigModule],
    provide: Tokens.DbConnectionToken,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://letho:0IwMk0ik6BMXFJvT@cluster0.zznc3.mongodb.net/?retryWrites=true&w=majority', { dbName: 'turtle' }),
    inject: [ConfigService],
  },
];