import * as di_ts from 'di-ts';

import index from './modules/stats/index';
import admin from './modules/admin/index';
import EndMiddleware from './modules/middleware/end.middleware';
import ErrorMiddleware from './modules/middleware/error.middleware';

const injector = new di_ts.Injector();

injector.get(index);
injector.get(admin);
injector.get(EndMiddleware);
injector.get(ErrorMiddleware);
