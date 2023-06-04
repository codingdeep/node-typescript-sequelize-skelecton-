import 'dotenv/config'
import 'module-alias/register'
import Server from "./config/server";
import UserController from "./resource/users/user/user.controller";
import CommonController from "./resource/common/common.controller";

export const app = new Server([new UserController(), new CommonController()], Number(process.env.PORT))
app.Listen();