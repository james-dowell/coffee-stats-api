import TestClass from './test';
import * as chai from 'chai';

const expect = chai.expect;

describe('test', () => {

    let test: TestClass;

    beforeEach(() => test = new TestClass());

    it('should have a test', () => {
        expect(test.name).to.equal('hello');
    });

});
