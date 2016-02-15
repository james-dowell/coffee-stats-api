import {Inject} from 'di-ts';
import * as mongodb from 'mongodb';

import Application from '../application';

@Inject
export default class CollectionProvider {

    constructor(
        private application: Application
    ) {}

    public getStatCollection(): Q.Promise<mongodb.Collection> {
        return this.application.db.then(
            (connection) => connection.collection('stats')
        );
    }

}
