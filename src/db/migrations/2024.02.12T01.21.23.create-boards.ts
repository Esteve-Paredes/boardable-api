import { Migration } from "../scripts/dbMigrate";

export const up: Migration = async (params) => {
  params.context.query(
    `CREATE TABLE boards (
    id SERIAL PRIMARY KEY,
    userId INT NOT NULL,
    title TEXT NOT NULL,
    color TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP)`
  );
};
export const down: Migration = async (params) => {
  params.context.query(`DROP TABLE boards`);
};
