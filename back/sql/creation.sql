DROP TABLE IF EXISTS decks;
DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS users;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE if NOT EXISTS decks (
    deck_name TEXT NOT NULL,
    card TEXT NOT NULL,
    created_by uuid REFERENCES users
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE if NOT EXISTS favorites (
    card TEXT NOT NULL,
    created_by uuid REFERENCES users
        ON UPDATE CASCADE
        ON DELETE CASCADE
);