export type boardData = {
  userId: number;
  title: string;
  color: string;
};

export type boardCard = boardData & { id: number; createdat: string };
