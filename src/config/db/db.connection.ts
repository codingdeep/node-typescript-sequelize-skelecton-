import {Sequelize} from "sequelize-typescript";
import Logger from "@/utils/log.utils";
import {LogEnum} from "@/utils/enum/log.enum";
import {UserModel} from "../../resource";

const config = require(__dirname + "/db.data");
const env = process.env.NODE_ENV || 'development'

class DBConnection {

    private static connection: Sequelize;

    //configure the connection
    static getConnection(): Sequelize {
        if (!this.connection) {
            const dbConfig = config[env] as any
            this.connection = new Sequelize(
                dbConfig.database,
                dbConfig.username,
                dbConfig.password,
                {
                    ...dbConfig,
                    models: [UserModel]
                }
            )
        }
        return this.connection
    }

    static async connect() {
        try {
            await this.getConnection().sync();
            Logger.info(LogEnum.DB_CONNECTION_ESTABLISHED)
        } catch (e: any) {
            Logger.error(LogEnum.DB_CONNECTION_FAILURE)
            process.exit(0)
        }
    }
}

export default DBConnection;