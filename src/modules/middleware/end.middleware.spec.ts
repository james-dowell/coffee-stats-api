import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

import EndMiddleware from './end.middleware';
import {Injector} from 'di-ts';
import ApplicationMock from '../application.mock';
import Application from '../application';

chai.use(sinonChai);

const expect = chai.expect;
const injector = new Injector([ApplicationMock]);

describe('End middleware', () => {

    let req, res, next;
    let endMiddleware;
    let application: any = injector.get(Application);
    let middleware: Function;
    let jsonStub;

    application.app = <any>{ use: sinon.stub() };
    endMiddleware = injector.get(EndMiddleware);
    middleware = application.app.use.getCall(0).args[0];

    beforeEach(() => {

        jsonStub = sinon.stub();

        req = {};
        res = {
            status: sinon.stub().returns({ json: jsonStub })
        };
        next = sinon.stub();

    });

    it('should register the middleware with the application', () => {
        expect(application.app.use).to.have.been.calledOnce;
    });

    describe('middleware functionality', () => {

        it('should send the response without any changes by default', () => {

            middleware(req, res, next);
            expect(next).to.have.been.calledOnce;

        });

        it('should send formatted response data', () => {

            let data = { stats: ['1', '2', '3'] }
            res.data = data;

            middleware(req, res, next);

            expect(jsonStub).to.have.been.calledOnce
                .and.calledWith({
                    error: null,
                    data
                });

        });

    });

});
