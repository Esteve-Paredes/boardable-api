CREATE TABLE boards (
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL REFERENCES users(id),
    title TEXT NOT NULL,
    color TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO boards (userid, title, color) VALUES (64, 'second card', 'fff44f');
