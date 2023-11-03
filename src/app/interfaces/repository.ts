export interface IRepository {
  items: IItem[];
  total_count: number;
}

export interface IItem {
  id: number,
  name: string,
  full_name: string,
  created_at: string,
  updated_at: string,
  pushed_at: string,
  language: string,
  stargazers_count: number,
  description: string,
  topics: string[],
}
