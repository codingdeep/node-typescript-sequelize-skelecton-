import UserModel, {UserInput} from "./user.model";

class UserService {
    constructor() {
    }

    public create = async (input: UserInput) => {
        try {
            return await UserModel.create(input)
        } catch (e: any) {
            throw new Error(e)
        }
    }
}

export default UserService;