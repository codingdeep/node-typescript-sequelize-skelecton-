import {AnyZodObject} from "zod";
import {Request, Response, NextFunction} from "express";
import HttpException from "@/utils/exceptions/http.exception";

const ResourceValidation = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        })
        next()
    } catch (e: any) {
        next(new HttpException(false, e.issues, 400))
    }
}

export default ResourceValidation;