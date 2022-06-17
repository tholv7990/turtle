import { Injectable } from '@angular/core';
import { EnvironmentConfiguration } from '@libs/model';

@Injectable()
export class ConfigService {

    private static _config: EnvironmentConfiguration;
    public static get environment(): EnvironmentConfiguration {
        this._config = this._config
            ? this._config
            : { ...window['config'] } as any;
        return this._config;
    }

    public static get origin(): string {
        return ConfigService.window().location.origin;
    }

    private static window(): any {
        return window;
    }
}
