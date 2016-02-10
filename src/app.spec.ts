import Application from './application';
import * as chai from 'chai';

'use strict';

const expect = chai.expect;

describe('Application', () => {

    let app: Application;

    beforeEach(() => app = new Application());

    it('should have the express application publically available', () => {
        expect(app.app).to.exist;
    });

    it('should hold a connection to the database', () => {
        expect(app.db).to.exist;
    });

});
