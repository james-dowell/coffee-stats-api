
import * as express from 'express';
import * as bodyParser from 'body-parser';

function getApplication(): express.Express {

    let app = express();

    app.use(bodyParser.json());

    // app.use((req:any, res, next) => {
    //     req.transaction = req.url + '--' + new Date().getTime();
    //     next();
    // });
    //
    // app.get('/health-check', function(req, res){
    //     res.json(200, { status: 'OK'});
    // });

    return app;
}

export class Application {

    public app: express.Application = getApplication();
    // public config: LimpidMarkets.ApplicationConfiguration = config;

}

export default Application;
