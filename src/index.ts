import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import { APP_ENV } from "./env";

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(urlencodedParser);
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("test, World!");
});

const server = app.listen(APP_ENV.APP_PORT, () => {
  console.log(`Server listening on port ${APP_ENV.APP_PORT}`);
});

export default app;
export { server };
