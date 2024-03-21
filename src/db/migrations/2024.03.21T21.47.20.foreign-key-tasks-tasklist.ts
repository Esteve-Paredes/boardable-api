import { Migration } from "../scripts/dbMigrate";

export const up: Migration = async (params) => {
  params.context
    .query(`ALTER TABLE tasks ADD FOREIGN KEY (tasklistId) REFERENCES tasklist(id) ON DELETE CASCADE
  `);
};
