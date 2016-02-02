'use strict';

import * as mongodb from 'mongodb';

const DATABASE_USER = 'uvdata';
const DATABASE_PASSWORD = '6FRrRtzD';
const DATABASE_HOST = 'dharma.mongohq.com';
const DATABASE_PORT = '10097';
const DATABASE_NAME = 'coffeestats_test';

const DB_CONNECTION = `mongodb://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;
const MongoClient = mongodb.MongoClient;

export default function getDBConnection(): Q.Promise<mongodb.Db> {

    let defer: Q.Deferred<any> = Q.defer();

    MongoClient.connect(DB_CONNECTION, (err, db: mongodb.Db) => {
        (err) ? defer.reject(err) : defer.resolve(db);
    });

    return defer.promise;

}
