import { Migration } from "../scripts/dbMigrate";

export const up: Migration = async (params) => {
  params.context
    .query(`ALTER TABLE tasks ADD FOREIGN KEY (boardId) REFERENCES boards(id) ON DELETE CASCADE
  `);
};
