export enum Difficulty {
  HARD = "HARD",
  MEDIUM = "MEDIUM",
  EASY = "EASY",
}

export interface ITask {
  id: string;
  title: string;
  difficulty: Difficulty;
  reward: { crystals: number } | null
}
