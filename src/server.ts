import express from "npm:express";
import * as log from "https://deno.land/std/log/mod.ts";
import keysRouter from "./routers/keys.ts";

const app = express();

//Body-parser
app.use(express.json());
app.use("/keys", keysRouter);

app.listen(3000, ()=>{
    log.info("Server started on port 3000"); 
});