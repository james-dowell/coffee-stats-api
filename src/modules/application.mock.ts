import * as sinon from 'sinon';
import {Provide} from 'di-ts';

import Application from './application';

@Provide(Application)
export default class ApplicationMock {

    public app = sinon.stub();
    public db = sinon.stub();
    public logger = sinon.stub();

}
