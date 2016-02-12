declare module cs {

    //Requests
    interface ISaveStatRequest extends Express.Request {
        body: {
            cups: number;
        }
    }

}

export = cs;
