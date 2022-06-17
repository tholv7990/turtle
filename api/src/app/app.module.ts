import { AuthenticationModule } from '@libs/features/authentication';
import { DatabaseModule } from '@libs/providers';
import { Inject, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule, Routes } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

export const routes: Routes = [
  {
    path: '/api',
    children: [
      {
          path: '/auth',
          module: AuthenticationModule
      }
    ]
  }
]

@Module({
  imports: [
    AuthenticationModule,
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
