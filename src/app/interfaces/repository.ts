export interface IRepository {
  items: [
    id: number,
    name: string,
    full_name: string,
    created_at: string,
    updated_at: string,
    pushed_at: string,
    language: string,
  ],
  total_count: number;
}
