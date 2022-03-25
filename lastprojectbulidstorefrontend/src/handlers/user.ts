import express,{NextFunction, Request,Response} from "express";
import { UsersStore,} from "../models/user";
import jwt, { Secret } from "jsonwebtoken";

export type User={
    // id:Number;
    first_name:string;
    last_name:string;
    user_name:string
    password:string;

}

export type newUser={
    id:number,
    first_name:string,
    last_name:string,
    user_name:string,
    password:string;

}


export type showUser={
    id:number,
    first_name:string,
    last_name:string,
    user_name:string
}

const store=new UsersStore();

const secret_code=process.env.TOKEN_SECRET as Secret;

const create=async(req:Request,res:Response)=>{
    try{
        const user:User={
            // id:req.body.id,
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            user_name:req.body.user_name,
            password:req.body.password
        }
        // console.log(user)
        let newOne=await store.create(user);
        // console.log(newOne.password)
        const expass=newOne.password
        const user_token =jwt.sign({expass},secret_code);
        // console.log("returning tok=",user_token)
        res.json(user_token);
    }catch(err){
        res.json(err)
        res.status(400)
    }
}

const index=async(req:Request,res:Response)=>{
    try{
        const shower=await store.index();
        res.json(shower);
    }catch(err){
        res.status(400)
        res.json(err)
    }
}

const show=async(req:Request,res:Response)=>{
    console.log("in handler user show with id ",req.params.id);
    const shower=await store.show(req.params.id);
    res.json(shower)
}

const remove=async(req:Request,res:Response)=>{
    const removed=await store.delete(req.body.id);
    res.json(removed);
}
const authenticator=async(req:Request,res:Response)=>{
    try{
        const usrnm=req.body.user_name;
        const pswrd=req.body.password as string;
        // console.log("in hanledr usrnme.pass=",usrnm,pswrd)
        const checked=await store.authenticate(usrnm,pswrd);
        // console.log("checked=",checked)
        if(checked==null){
            // console.log("in if null")
            res.status(400);
            res.send("invalid credentials");
        }
        else{
            const newOneData =jwt.sign({checked},secret_code);
            res.json(newOneData);
        }
    }catch(err){
        res.json(err)
        res.status(400)
    }
}

export function tokenCheck(req:Request,res:Response,next:NextFunction){
    try{
        console.log("in token check");
        if(!req.headers.authorization){
            res.status(401)
            res.json("no permision granted")
            return false;
        }
        const temp:string=req.headers.authorization as string;
        
        const dec=jwt.verify(temp,secret_code)
        next();
    }catch(err){
        res.status(401);
        res.json(err)
        return false;
    }
}

const userRouter=(app:express.Application)=>{
    app.get("/users",tokenCheck,index);
    app.post("/users",create);
    app.get("/users/:id",tokenCheck,show);
    app.post("/users/authenticate",authenticator);
}

export default userRouter;