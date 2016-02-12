import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import * as mongodb from 'mongodb';
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

    beforeEach(() => {
        collectionProvider = injector.get(CollectionProvider);
        application = injector.get(Application);
    });

    it('should have a method to get the stat collection', () => {
        let collectionStub = sinon.stub();
        application.db = <any>{ collection: collectionStub };
        collectionProvider.getStatCollection();
        expect(collectionStub).to.have.been.calledOnce
            .and.calledWith('stats');
    });

});
