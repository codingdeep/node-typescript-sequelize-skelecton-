import {Request, Response, NextFunction} from "express";
import ResponseWrapper from "@/utils/response/response.wrapper";
import ResourceNotfoundException from "@/utils/exceptions/resource.notfound.exception";

function GlobalExceptionHandler<T extends ResourceNotfoundException>(
    error: T,
    req: Request,
    res: Response,
    next: NextFunction
) {
    const response: ResponseWrapper<T> = new ResponseWrapper<T>(res);
    res.status(error.statusCode).send(response.exception(error));
}

export default GlobalExceptionHandler