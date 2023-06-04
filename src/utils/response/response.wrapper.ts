import {Response} from 'express'
import {CustomResponse} from "@/utils/response/custom.response";

class ResponseWrapper<T extends { statusCode: number, message: string, errorCode: string }> {

    constructor(public res: Response) {
        this.res = res
    }

    public ok(resp: T) {
        const responseBody = this.responseBody(true, 200, 'data', resp)
        return this.res.send(responseBody)
    }

    public exception(exception: T) {
        //return this.responseBody(false, exception.statusCode, 'errors', exception)
        return {
            timestamp: new Date(),
            status: false,
            errors: [
                {
                    errorCode: exception.statusCode,
                    message: exception.message
                }
            ]
        }
    }

    private responseBody(status: boolean, statusCode: number, type: string, data: T) {
        return {
            statusCode: statusCode,
            [type]: data
        }
    }
}

export default ResponseWrapper;