import StatValidator from './stat.validator';
import {Injector} from 'di-ts';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import * as cs from '../../../cs-typings/tsd.d';

chai.use(sinonChai);

const expect = chai.expect;

describe('SubmitStatValidator', () => {

    let statValidator: StatValidator;
    let req, res = {}, next;

    beforeEach(() => {
        req = <any>{ body: {} };
        next = sinon.stub();
        statValidator = new StatValidator();
    });

    it('should call next with an error if cups is not provided', () => {
        statValidator.validate(req, res, next);
        let error = next.getCall(0).args[0];

        expect(next).to.have.been.calledOnce;
        expect(error.message).to.be.equal('Invalid coffee stat submission');
    });

    // it('should call next with an error if cups is not a number', () => {
    //     req.body = { cups: 'banter' };
    //     statValidator.validate(req, res, next);
    //     expect(next).to.have.been.calledOnce;
    // });

});
