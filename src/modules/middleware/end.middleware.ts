import * as express from 'express';
import {Inject} from 'di-ts';

import Application from '../application';

interface IStatResponse extends express.Response {
    data: any;
}

@Inject
export default class EndMiddleware {

    constructor (
        private application: Application
    ) {
        this.application.app.use(this.middleware);
    }

    private middleware (
        req,
        res: IStatResponse,
        next: Function
    ): void {

        const { data } = res;

        if (data) {
            res.status(200).json({
                error: null,
                data
            });
        }

        next();

    }
}
