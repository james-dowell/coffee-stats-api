import Application from '../../application';
import {Inject} from 'di-ts';

@Inject
export default class StatsProvider {

    constructor(
        private application: Application
    ) {

    }

}
