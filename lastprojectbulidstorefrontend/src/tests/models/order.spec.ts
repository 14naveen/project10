import exp from "constants";
import { orderStore } from "../../models/order";


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

const test1:createOrder={
    // id:1,
    quantity:8,
    user_id:1,
    status:"active",
}

describe("order table ",()=>{
        
    let newOne:order;

    beforeAll(async()=>{
        newOne= await store.create(test1)
    })
    
    describe("check declararion",()=>{
        it("check create",()=>{
            expect(store.create).toBeDefined();
        })
        it("check show",()=>{
            expect(store.index).toBeDefined();
        })
        it("check show",()=>{
            expect(store.show).toBeDefined();
        })
    })

    describe("check working",()=>{
         it("check create",async()=>{
            
            const data={
                // id:1,
                quantity:newOne.quantity,
                user_id:newOne.user_id,
                status:newOne.status,
            }
            expect(data.status).toEqual(test1.status);
        })
  
        it("check index",async ()=>{
            const temp=await store.index();
            const test1:createOrder={
                quantity:8,
                user_id:1,
                status:"active",
            }
            expect(temp[0].quantity).toEqual(test1.quantity)
        })

        it("check show",async ()=>{
            const temp=await store.show("1");
            if(temp){
                expect(temp[0].user_id).toEqual(test1.user_id);
            }
        })
    
    })

})