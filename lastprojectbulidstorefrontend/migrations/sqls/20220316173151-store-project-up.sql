CREATE TABLE Users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50), 
    last_name VARCHAR(50),
    user_name VARCHAR(50),
    password VARCHAR(40));