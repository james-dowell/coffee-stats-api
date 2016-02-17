const e:any = Error;

export default class ApiError {

    public message: string;
    public code: number;
    public info: any;
    public failures: string;

    constructor(msg:string, code:number, originalErr?:any) {

        this.code = code || 500;
        this.info = originalErr || null;
        
        if (originalErr){
            this.failures = originalErr.failures || null;
        }

        e.captureStackTrace(this, this);
        this.message = msg || 'Error';

    }

}
