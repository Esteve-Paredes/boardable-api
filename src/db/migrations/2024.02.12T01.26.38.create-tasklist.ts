import { Migration } from "../scripts/dbMigrate";

export const up: Migration = async (params) => {
  params.context.query(
    `CREATE TABLE tasklist (
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL,
    boardId INT NOT NULL,
    title TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP)`
  );
};
export const down: Migration = async (params) => {
  params.context.query(`DROP TABLE tasklist`);
};
