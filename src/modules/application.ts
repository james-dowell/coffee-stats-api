
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongodb from 'mongodb';
import * as Q from 'q';

const DATABASE_USER = 'uvdata';
const DATABASE_PASSWORD = '6FRrRtzD';
const DATABASE_HOST = 'dharma.mongohq.com';
const DATABASE_PORT = '10097';
const DATABASE_NAME = 'coffeestats_test';

const DB_CONNECTION = `mongodb://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;

const MongoClient = mongodb.MongoClient;

function getDBConnection(): Q.Promise<mongodb.Db> {

    let defer: Q.Deferred<any> = Q.defer();

    MongoClient.connect(DB_CONNECTION, (err, db: mongodb.Db) => {
        (err) ? defer.reject(err) : defer.resolve(db);
    });

    return defer.promise;

}

function getApplication(): express.Express {

    let app: express.Express = express();

    app.use(bodyParser.json());

    app.listen(8083);

    return app;

}

export class Application {

    public app: express.Application = getApplication();
    public db: mongodb.Db;

    constructor() {
        getDBConnection().then((db) => {
            this.db = db;
        }).catch((err) => {
            console.log('Could not connect to the DB', err);
        });
    }


}

export default Application;
