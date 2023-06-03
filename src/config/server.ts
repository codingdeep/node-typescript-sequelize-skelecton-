import express, {Application} from "express";
import {IController} from "@/utils/types/controller.types";
import helmet from "helmet";
import cors from 'cors'
import compression from "compression";
import DBConnection from "./db/db.connection";
import Logger from "@/utils/log.utils";
import {LogEnum} from "@/utils/enum/log.enum";

class Server {
    public express: Application;
    public port: number;
    public controllers: Array<IController>

    constructor(controllers: Array<IController>, port: number) {
        this.express = express();
        this.controllers = controllers;
        this.port = port;

        //initializing
        this.initMiddleware();
        this.initController();
        this.initGlobalErrorHandler();
        this.dbConnection();
    }

    private initMiddleware(): void {
        this.express.use(helmet());
        this.express.use(cors())
        this.express.use(express.json())
        this.express.use(express.urlencoded({extended: false}))
        this.express.use(compression())
    }

    private initController(): void {
        this.controllers.map((controller: IController) => this.express.use("/api/v1", controller.router))
    }

    private initGlobalErrorHandler(): void {

    }

    private dbConnection(): void {
        DBConnection.connect()
    }

    public Listen(): void {
        this.express.listen(this.port, () => Logger.info(LogEnum.APP_LISTENING_TO_PORT + this.port))
    }

}

export default Server;