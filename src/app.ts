'use strict';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongodb from 'mongodb';

'use strict';

import DBConnectionPromise from './modules/provider/database.provider';

function getApplication(): express.Express {

    let app: express.Express = express();

    app.use(bodyParser.json());

    app.listen(8083);

    return app;

}

export class Application {

    public app: express.Application
    public db: mongodb.Db;

    constructor() {
        this.init();
    }

    private async init() {
        this.app = getApplication();
        this.db = await DBConnectionPromise();

        console.log('Initialised', this.db);
    }


}

export default Application;
