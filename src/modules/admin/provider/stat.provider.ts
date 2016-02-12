import Application from '../../application';
import {Inject} from 'di-ts';
import * as cs from '../../../cs-typings/tsd.d';
import CollectionProvider from '../../provider/collection.provider';
import * as mongodb from 'mongodb';

@Inject
export default class StatsProvider {

    private statCollection: mongodb.Collection;

    constructor(
        private application: Application,
        private collectionProvider: CollectionProvider
    ) {

        this.statCollection = this.collectionProvider.getStatCollection();

    }

    public save(
        req: cs.ISaveStatRequest,
        res: Express.Response,
        next: Function
    ): void {

        const { cups } = req.body;

        this.statCollection.insert({ cups });

        next();

    }

}
