import { Migration } from "../scripts/dbMigrate";

export const up: Migration = async (params) => {
  params.context.query(
    `CREATE TABLE boardtodo (
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL,
    boardId INT NOT NULL,
    task TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP)`
  );
};
export const down: Migration = async (params) => {
  params.context.query(`DROP TABLE boardtodo`);
};
