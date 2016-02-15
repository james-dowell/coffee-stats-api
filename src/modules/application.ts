import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongodb from 'mongodb';

import DBConnectionPromise from './provider/database.provider';
import ErrorMiddleware from './middleware/error.middleware';

function getApplication(): express.Express {

    let app: express.Express = express();

    app.use(bodyParser.json());

    app.listen(8083);

    return app;

}

export class Application {

    public app: express.Application;
    public db: Q.Promise<mongodb.Db>;
    public logger = console.log;

    constructor() {

        this.db = DBConnectionPromise();
        this.app = getApplication();

    }

}

export default Application;
