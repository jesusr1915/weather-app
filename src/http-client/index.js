import {ENV} from '~/core/env';
import * as realHttpClient from './http-client';
import * as dummyHttpClient from './http-client-dummy';

export const httpClient = ENV === 'DUMMY' ? dummyHttpClient : realHttpClient;
