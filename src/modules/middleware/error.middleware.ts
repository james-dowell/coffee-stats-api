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

        const message = {
            error: err.message || 'Something broke!'
        }

        res.status(err.code || 500).json(message);
    }

};
