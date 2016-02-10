import * as express from 'express';
import {Router} from 'express';

import Application from '../application';

'use strict';

const router:express.Router = Router();

export default class AdminModule {

    constructor(
        private application: Application
    ) {

        router.post('stats',
            (req: express.Request, res: express.Response, next: Function) => { next(); }
        );

        application.app.use(router);

    }

}
