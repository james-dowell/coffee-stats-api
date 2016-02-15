
import * as cs from '../../../cs-typings/tsd.d';

export default class SubmitStatValidator {

    constructor() {}

    public validate(
        req: cs.ISaveStatRequest,
        res: Express.Response,
        next: Function
    ): void {

        const { cups } = req.body;

        if (!cups || typeof cups !== 'number') {
            next(new Error('Invalid coffee stat submission'));
        }

    }

}
