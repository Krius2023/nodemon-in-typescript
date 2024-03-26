import express, { Express, Request, Response } from "express";
import { returnString } from "./utils/common";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  const result = returnString();
  res.send(result);
});

app.listen(8000, () => {
    console.log(`Server is running at http://localhost:8000`);
});


//   res.send("Local server is created using Typescript and Express!");
// {
//   "watch": ["dist"],
//   "ext": "js",
//   "exec": "node dist/index.js" // //"npx ts-node ./index.ts"
// }