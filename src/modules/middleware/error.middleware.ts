import {Inject} from 'di-ts';
import Application from '../application';

@Inject
export default class ErrorMiddleware {

    constructor(
        private application: Application
    ) {
        this.application.app.use(this.middleware);
    }

    private middleware(err, req, res, next): void {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    }

};
