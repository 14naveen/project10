import client from "../database";

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

export class orderStore{
    async index():Promise<order[]>{
        try{
            console.log("in oders index")
            const connect=await client.connect();
            const sql='SELECT * FROM Orders'
            const res=await connect.query(sql);
            connect.release();
            return res.rows;
        }catch(err){
            throw new Error(`error was ${err}`);
        }
    }
    async show(id:string):Promise<order[]>{
        try{
            console.log("in oders show")
            const connect=await client.connect();
            const sql=`SELECT * FROM Orders WHERE id=${id}`;
            // console.log("in order show with cmd=",sql);
            const res=await connect.query(sql);
            // console.log("after running sql cmd res=",res.rows)
            connect.release();
            return res.rows;
        }catch(err){
            throw new Error(`error was ${err}`);
        }
    }
    async create(data:createOrder):Promise<order>{
        try{
            // console.log("first line");
            // console.log("in store order create with  ",data);
            console.log("in oders create")
            const connect=await client.connect();
            const sql=`INSERT INTO Orders (quantity, user_id, status) VALUES (${data.quantity}, ${data.user_id}, '${data.status}') RETURNING *;`
            // console.log("sql command is  ",sql)
            const res=await connect.query(sql);
            connect.release();
            // console.log("after running query ans",res.rows[0])
            return res.rows[0];
        }catch(err){
            throw new Error(`error was ${err}`);
        }
    }

    // async userOrders(id:string):Promise<order[]>{
        
    // }

   async delete(id:string):Promise<order>{
       try{
        console.log("in oders delete")
        const connect=await client.connect();
            const sql=`DELETE FROM Orders WHERE id=${id} RETURNING *`;
            const res=await connect.query(sql);
            connect.release();
            return res.rows[0];
       }catch(err){
           throw new Error(`error is ${err}`);
       }
   }
}