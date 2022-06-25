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
    aws: {
      bucketName: string;
      accessKey: string;
      secretKey: string;
      region: string;
    }
}

export enum ApplicationEnvironment {
    Development = 'dev',
    Production = 'prod',
}


export const environmentEdge = {
    production: false,
    api: '/api',
    domain: 'turtletrading.app',
    auth: {
      local: {
        callbackUrl: 'http://{0}:3000/callback',
      }
    },
    aws: {
      bucketName: 'turtle-trading',
      accessKey: 'AKIATUG34ZRIDT3NFR6R',
      secretKey: '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',
      region: 'ap-southeast-1'
    },
    environment: ApplicationEnvironment.Development
  } as EnvironmentConfiguration;
  

