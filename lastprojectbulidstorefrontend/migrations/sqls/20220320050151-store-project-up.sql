CREATE TABLE Orders_product(
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES Orders(id),
    product_id INTEGER REFERENCES Product(id));