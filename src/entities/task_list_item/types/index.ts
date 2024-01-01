export enum Difficulty {
  HARD = "HARD",
  MEDIUM = "MEDIUM",
  EASY = 'EASY'
}

interface ITaskListItem {
  id: string;
  title: string;
  difficulty: Difficulty;
}

export { ITaskListItem };