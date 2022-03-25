# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- Show
- Create [token required]


#### Users
- Index [token required]
- Show [token required]
- Create N[token required]


#### Orders
- Current Order by user (args: user id)[token required]

## Data Shapes

#### Product
-  id: number
- name: string
- price: number

                                   Table "public.product"
 Column |         Type          | Collation | Nullable |               Default               
--------+-----------------------+-----------+----------+-------------------------------------
 id     | integer               |           | not null | nextval('product_id_seq'::regclass)
 name   | character varying(20) |           |          | 
 price  | integer               |           |          | 




#### User
- id
- first_Name
- last_ame
- user_name
- password


table
                                  Table "public.users"
   Column   |          Type          |                     Modifiers                      
------------+------------------------+----------------------------------------------------
 id         | integer                | not null default nextval('users_id_seq'::regclass)
 first_name | character varying(40)  | 
 last_name  | character varying(40)  | 
 user_name  | character varying(40)  | 
 password   | character varying(100) | 



#### Orders
- id:number
- quantity : number
- user_id : numbber
- status : string


                                    Table "public.orders"
  Column  |         Type          | Collation | Nullable |              Default               
----------+-----------------------+-----------+----------+------------------------------------
 id       | integer               |           | not null | nextval('orders_id_seq'::regclass)
 quantity | integer               |           |          | 
 user_id  | integer               |           |          | 
 status   | character varying(20) |           |          | 


#### Orders_product

- id: number
- order_id: number
- product_id: number

                              Table "public.orders_product"
   Column   |  Type   | Collation | Nullable |                  Default                   
------------+---------+-----------+----------+--------------------------------------------
 id         | integer |           | not null | nextval('orders_product_id_seq'::regclass)
 order_id   | integer |           |          | 
 product_id | integer |           |          | 

