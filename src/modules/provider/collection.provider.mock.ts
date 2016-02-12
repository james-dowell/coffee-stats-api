import * as sinon from 'sinon';
import {Provide} from 'di-ts';
import CollectionProvider from './collection.provider';

@Provide(CollectionProvider)
export default class CollectionProviderMock {

    public getStatCollection = sinon.stub();

}
