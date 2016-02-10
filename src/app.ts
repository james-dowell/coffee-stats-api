import * as di_ts from 'di-ts';

import index from './modules/stats/index';
import admin from './modules/admin/index';

const injector = new di_ts.Injector();

injector.get(index);
injector.get(admin);
