export type boardData = {
  title: string;
  color: string;
};

export type boardCard = boardData & { id: number; createdat: string };
