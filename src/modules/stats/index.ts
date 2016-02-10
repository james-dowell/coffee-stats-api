import {Inject} from 'di-ts';
import * as express from 'express';
import {Router} from 'express';

import Application from '../application';

const DATABASE_USER = 'uvdata';
const DATABASE_PASSWORD = '6FRrRtzD';
const DATABASE_HOST = 'dharma.mongohq.com';
const DATABASE_PORT = '10097';
const DATABASE_NAME = 'coffeestats_test';

@Inject
export default class StatsModule {

    constructor(
        private application: Application
    ) {

        const router:express.Router = Router();

        router.get('/stat',
            (req: express.Request, res: express.Response, next: Function) => {
                res.send({});
            }
        );

        application.app.use(router);

    }

}




// var mongoUrl = 'mongodb://' + database_user + ':' + database_password + '@' + database_host + ':' + database_port + '/' + database_name;
//
// console.log(mongoUrl);
//
// MongoClient.connect(mongoUrl, function (err, _db_) {
//
//     db = new DBController(_db_);
//     submit = new SubmitController(_db_);
//
//     console.log('connected');
//
// });
//
// app.get('/api/coffee-stats', function (req, res) {
//
//     var ObjToRespond = {};
//
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//
//     db.totalStats(function (results) {
//
//         ObjToRespond.totalStats = results;
//
//         db.dailyStats(function (todayResults, lastWeek) {
//
//             ObjToRespond.todayStats = todayResults;
//             ObjToRespond.lastWeek = lastWeek;
//
//             db.monthlyStats(function (results) {
//
//                 ObjToRespond.monthlyStats = results;
//
//                 db.averageStats(function (results) {
//
//                     ObjToRespond.averageStats = results;
//
//                     res.send(JSON.stringify(ObjToRespond));
//
//                 });
//
//             });
//
//         });
//
//     });
//
// });

// app.options('/api/save-coffee-stat', function (req, res) {
//
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//
//     res.send();
// });

// app.post('/api/save-coffee-stat', function (req, res) {
//
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//
//     submit.submitCoffee(req.body);
//
//     res.send();
//
// });

// app.get('/api/get-coffees-this-week', function (req, res) {
//
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//
//     db.getWeeklyCoffees(function (results) {
//         res.send(JSON.stringify(results));
//     });
//
// });

// router.post('/api/save-coffee-stat', function (req, res) {

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');
//     res.setHeader('Access-Control-Allow-Credentials', true);


//     console.log(req.body);

//     res.send();

// });

// var server = http.createServer(app);
//
// server.listen(8083);
