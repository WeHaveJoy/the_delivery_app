-- create table types_of_cars (
-- 	id serial not null primary key,
--    car_type text not null
-- );

create table customer(
    id serial not null primary key,
    name text not null,
    location text not null,
    item_name text not null,
    item_price text not null

);



-- create table types_of_services (
--     service_type text not null,
--    price decimal(10,2)

-- );