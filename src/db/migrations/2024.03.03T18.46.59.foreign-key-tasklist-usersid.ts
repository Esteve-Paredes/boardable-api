import { Migration } from "../scripts/dbMigrate";

export const up: Migration = async (params) => {
  params.context.query(
    `ALTER TABLE tasklist ADD FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE`
  );
};
