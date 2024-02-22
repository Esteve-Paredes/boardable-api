import { Migration } from "../scripts/dbMigrate";

export const up: Migration = async (params) => {
  params.context.query(`ALTER TABLE boardtodo ADD FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE`);
};
