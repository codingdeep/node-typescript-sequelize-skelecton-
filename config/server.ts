import express, {Application} from "express";
import {IController} from "@/utils/types/controller.types";


class Server {
    public express: Application;
    public port: number;
    public controllers: Array<IController>

    constructor(controllers: Array<IController>, port: number) {
        this.express = express();
        this.controllers = controllers;
        this.port = port;
    }
}

export default Server;