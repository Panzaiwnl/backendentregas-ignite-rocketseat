import { Request, Response, NextFunction } from "express";
import {verify} from "jsonwebtoken"


interface IPayload{
   sub: string;
}

export async function ensureAuthenticateClient(request: Request, response: Response,
     next: NextFunction){
        const authHeader = request.headers.authorization;

        if(!authHeader){
           return response.status(401).json({
            message: "token missing"
           });
        }


        const [,token ] = authHeader.split(" ");

        try {
           const { sub } = verify(token,"019acc25a4e242bb55ad489832ada12d") as IPayload;

           request.id_client = sub;

           

        
        return next();

        }catch(err){
            return response.status(401).json({
                message: "invalid token"
               });

            

        }



}