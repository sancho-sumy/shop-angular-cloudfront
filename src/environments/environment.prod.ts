import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://5pp5f4kp97.execute-api.eu-central-1.amazonaws.com',
    order: 'https://5pp5f4kp97.execute-api.eu-central-1.amazonaws.com',
    import: 'https://5pp5f4kp97.execute-api.eu-central-1.amazonaws.com',
    bff: 'https://5pp5f4kp97.execute-api.eu-central-1.amazonaws.com',
    cart: 'https://5pp5f4kp97.execute-api.eu-central-1.amazonaws.com',
  },
  apiEndpointsEnabled: {
    product: true,
    order: false,
    import: false,
    bff: true,
    cart: false,
  },
};
