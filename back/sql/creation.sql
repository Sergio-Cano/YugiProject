DROP TABLE IF EXISTS decks;
DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cards;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE if NOT EXISTS decks (
    deck_name TEXT NOT NULL,
    card_name TEXT NOT NULL,
    card_type TEXT NOT NULL,
    type TEXT NOT NULL,
    attribute TEXT,
    card_description TEXT NOT NULL,
    attack INTEGER,
    defense INTEGER,
    level_rank INTEGER,
    link_rating INTEGER,
    scale INTEGER,
    img_url TEXT NOT NULL,
    img_url_small TEXT NOT NULL,
    img_url_cropped TEXT NOT NULL,
    created_by uuid REFERENCES users
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE if NOT EXISTS favorites (
    card_name TEXT NOT NULL,
    card_type TEXT NOT NULL,
    type TEXT NOT NULL,
    attribute TEXT,
    card_description TEXT NOT NULL,
    attack INTEGER,
    defense INTEGER,
    level_rank INTEGER,
    link_rating INTEGER,
    scale INTEGER,
    img_url TEXT NOT NULL,
    img_url_small TEXT NOT NULL,
    img_url_cropped TEXT NOT NULL,
    created_by uuid REFERENCES users
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE if NOT EXISTS cards (
    card_id INTEGER NOT NULL,
    card_name TEXT NOT NULL,
    card_type TEXT NOT NULL,
    type TEXT NOT NULL,
    attribute TEXT,
    archetype TEXT,
    card_description TEXT NOT NULL,
    attack INTEGER,
    defense INTEGER,
    level_rank INTEGER,
    link_rating INTEGER,
    scale INTEGER,
    img_url TEXT NOT NULL,
    img_url_small TEXT NOT NULL,
    img_url_cropped TEXT NOT NULL
);