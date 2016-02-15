import {Inject} from 'di-ts';
import * as cs from '../../../cs-typings/tsd.d';
import * as mongodb from 'mongodb';
import * as express from 'express';

import CollectionProvider from '../../provider/collection.provider';
import Application from '../../application';

@Inject
export default class StatsProvider {

    private statCollection: Q.Promise<mongodb.Collection>;

    constructor(
        private collectionProvider: CollectionProvider,
        private application: Application
    ) {
        this.statCollection = this.collectionProvider.getStatCollection();
    }

    public save(
        req: cs.ISaveStatRequest,
        res: express.Response,
        next: Function
    ): void {

        const { cups } = req.body;

        this.statCollection.then(
            (collection) => collection.insert({cups}, (err, a) => {
                res.sendStatus(201);
                this.application.logger('Saved stat', cups);
                next();
            })
        );

    }


}
