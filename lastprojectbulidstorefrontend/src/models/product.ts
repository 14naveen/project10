import client from "../database";

export type product={
    id:Number;
    name:string;
    price:number
}

export type createProduct={
    // id:Number;
    name:string;
    price:number
}

export class productStore{
    async index():Promise<product[]>{
        try{
            const connect=await client.connect();
            const sql='SELECT * FROM Product'
            const res=await connect.query(sql);
            connect.release();
            return res.rows;
        }catch(err){
            throw new Error(`error was ${err}`);
        }
    }
    async show(id:string):Promise<product[]>{
        try{
            const connect=await client.connect();
            const sql=`SELECT * FROM Product WHERE id=${id}`;
            const res=await connect.query(sql);
            connect.release();
            return res.rows;
        }catch(err){
            throw new Error(`error was ${err}`);
        }
    }
    async create(data:createProduct):Promise<product>{
        try{
            const connect=await client.connect();
            const sql=`INSERT INTO Product (name, price) VALUES ('${data.name}', '${data.price}')  RETURNING *`
            const res=await connect.query(sql);
            // console.log("after sql run res=",res.rows[0])
            connect.release();
            return res.rows[0];
        }catch(err){
            throw new Error(`error was ${err}`);
        }
    }

   async delete(id:string):Promise<product[]>{
       try{
            const connect=await client.connect();
            const sql=`DELETE FROM Product WHERE id=${id}`;
            const res=await connect.query(sql);
            connect.release();
            return res.rows;
       }catch(err){
           throw new Error(`error is ${err}`);
       }
   }
}