import {IController} from "@/utils/types/controller.types";
import {Router, Request, Response, NextFunction} from "express";
import UserService from "./user.service";
import ResourceValidation from "@/middleware/resource.validation";
import userValidation, {UserInputType} from "./user.validation";
import ResponseWrapper from "@/utils/response/response.wrapper";
import ResourceNotfoundException from "@/utils/exceptions/resource.notfound.exception";

class UserController extends UserService implements IController {
    path = '/users';
    router = Router();

    constructor() {
        super();
        this.userRoutes();
    }

    userRoutes(): void {
        this.router.post(this.path, ResourceValidation(userValidation), this.createUser)
    }

    public createUser = async (req: Request<{}, {}, UserInputType['body']>, res: Response, next: NextFunction): Promise<any> => {
        const response: ResponseWrapper<any> = new ResponseWrapper<any>(res);
        try {
            return response.ok(await this.create(req.body));
        } catch (e: any) {
            next(new ResourceNotfoundException('sdsd', 'sds', 'dsf'))
        }
    }

}

export default UserController;