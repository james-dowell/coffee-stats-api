import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import * as mongodb from 'mongodb';
import * as Q from 'q';
import {Injector} from 'di-ts';

chai.use(sinonChai);

import CollectionProvider from './collection.provider';
import ApplicationMock from '../application.mock';
import Application from '../application';

const expect = chai.expect;
const injector = new Injector([ApplicationMock]);

describe('CollectionProvider', () => {

    let collectionProvider: CollectionProvider;
    let application: Application;
    let collectionStub;

    beforeEach(() => {

        collectionStub = sinon.stub();
        application = injector.get(Application);
        collectionProvider = injector.get(CollectionProvider);

        application.db = <any>Q.when({ collection: collectionStub });
        
    });

    it('should have a method to get the stat collection', (done) => {

        collectionProvider.getStatCollection().then(() => {

            expect(collectionStub).to.have.been.calledOnce
                .and.calledWith('stats');
            done();

        });

    });

});
