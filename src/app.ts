import express from "express";
import { router } from "./router";

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger/swagger_output.json");

export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware() {
    this.server.use(express.json({ limit: "15mb" }));
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
  }

  private router() {
    this.server.use(router);
  }
}
