import * as express from 'express';
import {Router} from 'express';
import {Inject} from 'di-ts';

import Application from '../application';
import StatProvider from './provider/stat.provider';

@Inject
export default class AdminModule {

    constructor(
        private application: Application,
        private statProvider: StatProvider
    ) {

        const router:express.Router = Router();

        router.post('/stat',
            (req: express.Request, res: express.Response, next: Function) => this.statProvider.save(req, res, next)
        );

        application.app.use(router);

    }

}
