import Application from './application';
import * as chai from 'chai';

const expect = chai.expect;

describe('Application', () => {

    let app: Application;

    beforeEach(() => app = new Application());

    it('should have the express application publically available', () => {
        expect(app.app).to.exist;
    });

});
