--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cakes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cakes (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    price numeric NOT NULL,
    image character varying(200) NOT NULL,
    description text
);


--
-- Name: cakes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cakes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cakes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cakes_id_seq OWNED BY public.cakes.id;


--
-- Name: clients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    address character varying(200) NOT NULL,
    phone character varying(20) NOT NULL
);


--
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    "clientId" integer NOT NULL,
    "cakeId" integer NOT NULL,
    quantity integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "totalPrice" numeric NOT NULL
);


--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: cakes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cakes ALTER COLUMN id SET DEFAULT nextval('public.cakes_id_seq'::regclass);


--
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Data for Name: cakes; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cakes VALUES (3, 'Bolo de pote', 13, 'encurtador.com.br/iDIX0', 'Bolo de chocolate com recheio de leite ninho');
INSERT INTO public.cakes VALUES (4, 'bolosemdescricao', 10, 'encurtador.com.br/iDIX0', ' ');
INSERT INTO public.cakes VALUES (5, 'Bolo de morango', 26, 'encurtador.com.br/iDIX0', 'Bolo de morango');
INSERT INTO public.cakes VALUES (6, 'Bolo de cenoura', 30, 'encurtador.com.br/iDIX0', 'Bolo de cenoura');
INSERT INTO public.cakes VALUES (7, 'Bolo de abacaxi', 22, 'encurtador.com.br/iDIX0', 'Bolo de abacaxi');
INSERT INTO public.cakes VALUES (8, 'ab', 13, 'encurtador.com.br/iDIX0', 'Bolo de chocolate com recheio de leite ninho');
INSERT INTO public.cakes VALUES (9, 'ab', 13, 'encurtador.com.br/iDIX0', 'Bolo de chocolate com recheio de leite ninho');
INSERT INTO public.cakes VALUES (10, 'ab', 13, 'encurtador.com.br/iDIX0', 'Bolo de chocolate com recheio de leite ninho');
INSERT INTO public.cakes VALUES (11, 'abc', 0, 'encurtador.com.br/iDIX0', 'Bolo de chocolate com recheio de leite ninho');


--
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.clients VALUES (1, 'Fulana', 'Rua tal', '2199999999');
INSERT INTO public.clients VALUES (2, 'huahuahua', 'Rua tal', '2199999999999');
INSERT INTO public.clients VALUES (3, 'Fulana', 'Rua tal', '21999999993333');
INSERT INTO public.clients VALUES (4, 'Fulana', 'Rua tal', '21999999993333');
INSERT INTO public.clients VALUES (5, 'Fulana', 'Rua tal', '21999999993333');
INSERT INTO public.clients VALUES (6, 'Fulana', 'Rua tal', '21999999993333');
INSERT INTO public.clients VALUES (7, 'euu', 'Rua tal', '123456789');
INSERT INTO public.clients VALUES (8, 'voceee', 'Rua tal', '1234567890');
INSERT INTO public.clients VALUES (12, '', 'asdasd', '12345678901');
INSERT INTO public.clients VALUES (13, 'asdad', 'asdawd', '1234567890');
INSERT INTO public.clients VALUES (14, 'joao vitor', 'rua teodoro', '21972544238');
INSERT INTO public.clients VALUES (15, 'joao marcelo', 'rua 2', '21972544239');
INSERT INTO public.clients VALUES (16, 'joao ferreira', 'rua 3', '21937890420');


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.orders VALUES (8, 1, 3, 2, '2022-10-21 16:14:12.501072', 26);
INSERT INTO public.orders VALUES (10, 1, 3, 3, '2022-10-21 16:21:13.718746', 39);
INSERT INTO public.orders VALUES (11, 1, 3, 3, '2022-10-21 16:21:14.732121', 39);
INSERT INTO public.orders VALUES (12, 2, 3, 3, '2022-10-21 16:21:17.975777', 39);
INSERT INTO public.orders VALUES (13, 2, 3, 3, '2022-10-21 16:21:18.98572', 39);
INSERT INTO public.orders VALUES (14, 2, 3, 3, '2022-10-21 16:21:19.436319', 39);
INSERT INTO public.orders VALUES (15, 2, 3, 3, '2022-10-21 16:21:19.997026', 39);
INSERT INTO public.orders VALUES (16, 2, 4, 3, '2022-10-21 16:21:31.500914', 10);
INSERT INTO public.orders VALUES (17, 2, 4, 3, '2022-10-21 16:21:32.754241', 10);
INSERT INTO public.orders VALUES (18, 2, 4, 3, '2022-10-21 16:21:33.280841', 10);
INSERT INTO public.orders VALUES (19, 1, 4, 3, '2022-10-21 16:21:35.676245', 10);
INSERT INTO public.orders VALUES (20, 1, 4, 3, '2022-10-21 16:21:35.827923', 10);
INSERT INTO public.orders VALUES (21, 1, 4, 4, '2022-10-21 16:21:41.7308', 15);
INSERT INTO public.orders VALUES (22, 1, 4, 4, '2022-10-21 16:21:42.571499', 15);
INSERT INTO public.orders VALUES (23, 14, 6, 2, '2022-10-24 20:08:32.646782', 60);
INSERT INTO public.orders VALUES (24, 14, 7, 2, '2022-10-24 20:08:41.779186', 44);
INSERT INTO public.orders VALUES (25, 14, 7, 3, '2022-10-24 20:08:48.002065', 66);
INSERT INTO public.orders VALUES (26, 15, 7, 3, '2022-10-24 20:08:59.545081', 66);
INSERT INTO public.orders VALUES (27, 15, 7, 3, '2022-10-24 20:09:00.671458', 66);
INSERT INTO public.orders VALUES (28, 15, 5, 3, '2022-10-24 20:09:12.59687', 66);
INSERT INTO public.orders VALUES (29, 15, 5, 3, '2022-10-24 20:09:13.223309', 66);
INSERT INTO public.orders VALUES (30, 15, 5, 3, '2022-10-25 11:35:33.348883', 66);
INSERT INTO public.orders VALUES (31, 15, 6, 3, '2022-10-25 11:35:42.83605', 80);
INSERT INTO public.orders VALUES (32, 1, 3, 4, '2022-10-25 13:39:03.028644', 26);


--
-- Name: cakes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cakes_id_seq', 11, true);


--
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.clients_id_seq', 16, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.orders_id_seq', 32, true);


--
-- Name: cakes cakes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cakes
    ADD CONSTRAINT cakes_pkey PRIMARY KEY (id);


--
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: orders orders_cakeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_cakeId_fkey" FOREIGN KEY ("cakeId") REFERENCES public.cakes(id);


--
-- Name: orders orders_clientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public.clients(id);


--
-- PostgreSQL database dump complete
--

