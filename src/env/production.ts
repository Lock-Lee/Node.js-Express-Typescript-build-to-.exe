import { EnvProps } from '.';

const env: EnvProps = {
    APP_MODE: 'production',
    APP_PORT: 3001
};

export default ((): EnvProps => env)();
