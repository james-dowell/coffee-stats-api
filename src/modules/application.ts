import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongodb from 'mongodb';

import DBConnectionPromise from './provider/database.provider';

function getApplication(): express.Express {

    let app: express.Express = express();

    app.use(bodyParser.json());

    app.listen(8083);

    return app;

}

export class Application {

    public app: express.Application;
    public db: mongodb.Db;

    constructor() {

        DBConnectionPromise().then((connection) => {
            this.db = connection;
            console.log('Initialised');
        });

        this.init();

    }

    private init() {
        this.app = getApplication();
    }

}

export default Application;