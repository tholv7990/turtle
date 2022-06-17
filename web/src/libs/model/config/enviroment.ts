export interface EnvironmentConfiguration {
    production: boolean;
    api: string;
    auth: {
        local: {
            callbackUrl: string,
        }
    };
    domain: string;
    environment?: string;
    build?: string;
    mappingKey?: string;
    imageProxy?: string;
}

export enum ApplicationEnvironment {
    Development = 'dev',
    Production = 'prod',
}


export const environmentEdge = {
    production: false,
    api: '/api',
    domain: 'turtle.trading.run',
    auth: {
      local: {
        callbackUrl: 'http://{0}:3000/callback',
      }
    },
    environment: ApplicationEnvironment.Development
  } as EnvironmentConfiguration;
  

