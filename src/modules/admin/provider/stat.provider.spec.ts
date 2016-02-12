import StatProvider from './stat.provider';
import {Injector} from 'di-ts';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import * as cs from '../../../cs-typings/tsd.d';

chai.use(sinonChai);

import ApplicationMock from '../../application.mock';
import CollectionProvider from '../../provider/collection.provider';
import CollectionProviderMock from '../../provider/collection.provider.mock';

const expect = chai.expect;
const injector = new Injector([ApplicationMock, CollectionProviderMock]);

describe.only('StatProvider', () => {

    let statProvider: StatProvider;
    let collectionProvider;
    let req: cs.ISaveStatRequest;
    let res: Express.Response;
    let next: Function;

    beforeEach(() => {

        req = <any>{};
        res = {};
        next = sinon.stub();

        statProvider = injector.get(StatProvider);
        collectionProvider = injector.get(CollectionProvider);

    });

    describe('Saving coffee', () => {

        let insert;

        beforeEach(() => {

            insert = sinon.stub();
            collectionProvider.getStatCollection.returns({ insert });

            req.body = {
                cups: 2
            }

        });

        it('should save a stat with the a count and a datetime', () => {
            statProvider.save(req, res, next);
        });

        it('should call insert function on the stats collection', () => {
            statProvider.save(req, res, next);
            expect(insert).to.have.been.calledOnce.and.calledWith({ cups: 2 });
        });

        it('should call next', () => {
            statProvider.save(req, res, next);
            expect(next).to.have.been.calledOnce;
        })

    });

});
