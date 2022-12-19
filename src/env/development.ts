import { EnvProps } from '.';

const env: EnvProps = {
    APP_MODE: 'development',
    APP_PORT: 4000
};

export default ((): EnvProps => env)();
