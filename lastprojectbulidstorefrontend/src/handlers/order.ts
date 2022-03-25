import { orderStore } from "../models/order";
import express,{Request,Response} from "express"
import { tokenCheck } from "./user";


export type order={
    id:Number;
    quantity:number;
    user_id:number;
    status:string;
}

export type createOrder={
    quantity:number;
    user_id:number;
    status:string;
}



const store=new orderStore();

const index=async (req:Request,res:Response)=>{
    try{
        const data=await store.index();
        res.json(data);
    }catch(err){
        res.json(err);
        res.status(400);
    }
}

const show=async (req:Request,res:Response)=>{
    try{
        const param=req.params.id;
        const shower=await store.show(param);
        res.json(shower)
    }catch(err){
        res.status(400)
        res.json(err);
    }
}

const create=async(req:Request,res:Response)=>{
    try{
        const data:createOrder={
            quantity: req.body.quantity,
            user_id: req.body.user_id,
            status: req.body.status,
        }

        const newOne=await store.create(data);
        res.json(newOne);
    }catch(err){
        res.status(400);
        res.json(err);
    }
}

const OrderRouter=(app:express.Application)=>{
    app.get("/orders/:id",show);
    app.get("/orders",index);
    app.post("/orders",tokenCheck,create)

}

export default OrderRouter;