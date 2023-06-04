import {IController} from "@/utils/types/controller.types";
import {Request, Response, Router} from "express";

class CommonController implements IController {
    path: string = '/healthCheck';
    router: Router = Router()

    constructor() {
        this.init();
    }

    private init() {
        this.router.get(this.path, this.healthCheck)
    }

    private healthCheck(req: Request, res: Response) {
        return res.send({hello: 'Ruvel'})
    }

}

export default CommonController;