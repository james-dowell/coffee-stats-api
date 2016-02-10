import * as express from 'express';
import {Router} from 'express';
import {Inject} from 'di-ts';

import Application from '../application';

@Inject
export default class AdminModule {

    constructor(
        private application: Application
    ) {

        const router:express.Router = Router();

        router.post('/stat',
            (req: express.Request, res: express.Response, next: Function) => {
                console.log('OUCHIE');
                res.send({});
            }
        );

        application.app.use(router);

    }

}
