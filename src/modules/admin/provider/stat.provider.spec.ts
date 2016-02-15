import StatProvider from './stat.provider';
import {Injector} from 'di-ts';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import * as cs from '../../../cs-typings/tsd.d';
import * as Q from 'q';
import * as express from 'express';

chai.use(sinonChai);

import CollectionProvider from '../../provider/collection.provider';
import CollectionProviderMock from '../../provider/collection.provider.mock';
import ApplicationMock from '../../application.mock';

const expect = chai.expect;
const injector = new Injector([CollectionProviderMock, ApplicationMock]);

describe('StatProvider', () => {

    let statProvider: StatProvider;
    let collectionProvider;
    let req: cs.ISaveStatRequest;
    let res: express.Response;
    let next: Function;

    let insert = sinon.stub();

    collectionProvider = injector.get(CollectionProvider);
    collectionProvider.getStatCollection.returns(Q.when({ insert }));
    statProvider = injector.get(StatProvider);

    beforeEach(() => {

        req = <any>{};
        res = <any>{ status: sinon.stub() };
        next = sinon.stub();

        insert.reset();

    });

    describe('Saving coffee', () => {

        beforeEach(() => {

            req.body = {
                cups: 2
            }

        });

        it('should save a stat with the a count and a datetime', () => {
            statProvider.save(req, res, next);
        });

        it('should call insert function on the stats collection', (done) => {
            //Need to come up with a better solution for this
            statProvider.save(req, res, next)

            Q.when({}).then(() => {
                expect(insert).to.have.been.calledOnce.and.calledWith({ cups: 2 });
                done();
            });
        });

        describe('succesful save', () => {

            beforeEach(() => {
                statProvider.save(req, res, next);
            });

            it('should call next', (done) => {

                Q.when().then(() => {
                    insert.getCall(0).args[1]();
                    expect(next).to.have.been.calledOnce;
                    done();
                });

            });

        });

    });

});
