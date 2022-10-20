CREATE TABLE cakes (
	id SERIAL PRIMARY KEY,
  	name VARCHAR(100) NOT NULL,
  	price NUMERIC not NULL,
  	image VARCHAR(200) NOT NULL,
  	description text
);

CREATE TABLE clients (
	id SERIAL PRIMARY KEY,
  	name VARCHAR(100) NOT NULL,
  	address VARCHAR(200) NOT NULL,
  	phone VARCHAR(20) NOT NULL
);

CREATE TABLE orders(
	id SERIAL PRIMARY KEY,
  	"clientId" integer NOT NULL REFERENCES clients(id),
  	"cakeId" integer NOT NULL REFERENCES cakes(id),
  	quatitity integer NOT NULL,
	"createdAt" timestamp without time zone DEFAULT now() NOT NULL,
	"totalPrice" numeric NOT NULL   		
);