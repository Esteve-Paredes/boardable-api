CREATE TABLE boards (
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL REFERENCES users(id),
    title TEXT NOT NULL,
    color TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TYPE statetask AS ENUM ('to do', 'doing', 'done');

CREATE TABLE boardtodo (
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL REFERENCES users(id),
    boardId INT NOT NULL REFERENCES boards(id),
    task TEXT NOT NULL,
    state statetask,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO boards (userid, title, color) VALUES (64, 'second card', 'fff44f');
INSERT INTO boards (userid, title, color) VALUES (64, 'third card', 'ff4f44');

INSERT INTO boardtodo (userid, boardid, task, state) VALUES (64, '1', 'lavar los platos', 'to do');


