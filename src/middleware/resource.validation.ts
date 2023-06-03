import {AnyZodObject} from "zod";
import {Request, Response, NextFunction} from "express";

const ResourceValidation = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        })
    } catch (e: any) {
        next()
    }
}

export default ResourceValidation;