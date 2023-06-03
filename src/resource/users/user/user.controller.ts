import {IController} from "@/utils/types/controller.types";
import {Router} from "express";
import UserService from "./user.service";
import ResourceValidation from "@/middlewares/resource.validation";
import userValidation from "./user.validation";


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

    public createUser = async () => {
        const user = await this.create();
    }

}

export default UserController;