import {Inject} from 'di-ts';
import * as express from 'express';

import Application from '../application';

@Inject
export default class StatsModule {

    constructor(
        private application: Application
    ) {
        console.log(this.application);
    }

}
