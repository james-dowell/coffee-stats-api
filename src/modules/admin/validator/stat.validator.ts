
import * as cs from '../../../cs-typings/tsd.d';
import ApiError from '../../middleware/error';

export default class SubmitStatValidator {

    constructor() {}

    public validate(
        req: cs.ISaveStatRequest,
        res: Express.Response,
        next: Function
    ): void {

        const { cups } = req.body;

        if (!cups || typeof cups !== 'number') {
            next(new ApiError('Invalid coffee stat submission', 400));
        }

        next();

    }

}
