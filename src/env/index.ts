import ENV_DEV from './development';
import ENV_PROD from './production';

export type EnvProps = {
    APP_MODE: 'development' | 'production';
    APP_PORT: number;
};

export const APP_ENV = process.env.NODE_ENV !== 'production' ? ENV_DEV : ENV_PROD;
