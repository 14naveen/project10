import supertest from "supertest";

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
// console.log("in testing phase");

const test1:User={
    first_name:"Naveen",
    last_name:"Pothu",
    user_name:"users_names",
    password:"password123"
}

let data:newUser;
beforeAll(async()=>{
    data=await store.create(test1)
})

const tester={
    id:1,
    first_name:"Naveen",
    last_name:"Pothu",
    user_name:"users_names",
    // password:"password123"
    }

describe("user table",()=>{

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
        it("check authenticate",()=>{
            expect(store.authenticate).toBeDefined();
        })
    })


    describe("user table",()=>{

        it("create user",async()=>{
            
            const returned_ans={
                id:data.id,
                first_name:data.first_name,
                last_name:data.last_name,
                user_name:data.user_name
            }
            expect(returned_ans.first_name).toEqual(tester.first_name);
        })

        it("user show",async ()=>{
                const data=await store.show("1");
                expect(data.first_name).toEqual("Naveen");
        }) 

        it("user index",async()=>{
            const data=await store.index();
            expect(data[0].last_name).toEqual("Pothu");
        })

        it("user authenticate",async()=>{
            const data=await store.authenticate(test1.user_name,test1.password)
        })
    })

})