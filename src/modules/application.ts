
import * as express from 'express';
import * as bodyParser from 'body-parser';

function getApplication(): express.Express {

    let app: express.Express = express();

    app.use(bodyParser.json());

    app.listen(8083);

    return app;
}

export class Application {

    public app: express.Application = getApplication();
    // public config: LimpidMarkets.ApplicationConfiguration = config;

}

export default Application;
