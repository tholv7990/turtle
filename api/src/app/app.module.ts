import { AttachmentModule } from '@libs/features/attachment';
import { AuthenticationModule } from '@libs/features/authentication';
import { JournalModule } from '@libs/features/journal/journal.module';
import { DatabaseModule } from '@libs/providers';
import {  Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule, Routes } from '@nestjs/core';

export const routes: Routes = [
  {
    path: '/api',
    children: [
      {
          path: '/auth',
          module: AuthenticationModule
      },
      {
        path: '/attachment',
        module: AttachmentModule
      },
      {
        path: '/journal',
        module: JournalModule
      }
    ]
  }
]

@Module({
  imports: [
    AuthenticationModule,
    AttachmentModule,
    JournalModule,

    ConfigModule.forRoot(),
    RouterModule.register(routes),
    DatabaseModule.forApp()
  ],
  controllers: [],
  providers: [],
  exports: [
  ]
})
export class AppModule {
  
  constructor(
) { }
 }
