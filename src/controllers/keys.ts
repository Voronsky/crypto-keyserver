import {Request, Response} from "npm:express";
import * as log from "https://deno.land/std/log/mod.ts";
import {generateKeyPair} from "https://deno.land/std@0.173.0/node/crypto.ts";

export const generateKey = async (req: Request, res: Response) => {
    try{
        generateKeyPair("rsa", RSAKeyPairOptions<"pem","pem">,(err, publicKey, privateKey)=>
        {
            log.info(`${publicKey}, ${privateKey}`);
        }
        );
        res.status(200).json({private: "",public: ""});
    } catch (err){
        log.error(`${err}`);
        res.status(500).json({message: `Error has occurred ${err}`});
    }

}