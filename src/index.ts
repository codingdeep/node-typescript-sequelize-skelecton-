import 'dotenv/config'
import 'module-alias/register'
import Server from "./config/server";

export const app = new Server([], Number(process.env.PORT))
app.Listen();